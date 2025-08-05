# agent_td.py

import numpy as np
import random

class TD0Agent:
    """
    TD(0) agent with ε-greedy policy for a given Maze environment.
    """
    def __init__(self, maze, alpha=0.1, gamma=0.9, epsilon=0.1):
        self.maze    = maze
        self.alpha   = alpha       # 学习率 α
        self.gamma   = gamma       # 折扣因子 γ
        self.epsilon = epsilon     # 探索率 ε
        # 初始化状态价值函数 V(s) 为零，维度 (row, col, has_key)
        self.V = np.zeros((maze.n_row, maze.n_col, 2))

    def choose_action(self, state):
        """
        ε-greedy 策略：
        - 以 ε 概率随机选一个合法动作
        - 否则选使 r + γ V(s') 最大的动作
        """
        valid_actions = self.maze.get_valid_actions(state)
        if random.random() < self.epsilon:
            return random.choice(valid_actions)

        # 评估各动作的价值
        values = []
        for action in valid_actions:
            (r2, c2, k2), reward, done = self.maze.step(state, action)
            values.append(reward + self.gamma * self.V[r2, c2, k2])

        max_val     = max(values)
        best_actions= [a for a, v in zip(valid_actions, values) if v == max_val]
        return random.choice(best_actions)

    def run_episode(self, max_steps=1000):
        """
        运行一个 episode，直到到达终点或达到 max_steps，返回步数。
        """
        state = self.maze.reset()
        steps = 0
        while steps < max_steps:
            r, c, k = state
            action  = self.choose_action(state)
            (r2, c2, k2), reward, done = self.maze.step(state, action)

            # TD(0) 更新
            td_target = reward + self.gamma * self.V[r2, c2, k2]
            self.V[r, c, k] += self.alpha * (td_target - self.V[r, c, k])

            state = (r2, c2, k2)
            steps += 1
            if done:
                break
        return steps

# 简单测试
if __name__ == "__main__":
    from maze import Maze
    grid = [
        [0,1,0],
        [0,0,0],
        [1,0,0],
    ]
    # 在 (0,2) 放钥匙，在 (1,2) 放门
    maze = Maze(grid, start=(1,0), goal=(2,2), key_pos=(0,2), door_pos=(1,2))
    agent = TD0Agent(maze)
    print("Test episode steps:", agent.run_episode())
