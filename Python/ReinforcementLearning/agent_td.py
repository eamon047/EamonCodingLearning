import numpy as np
import random

class TD0Agent:
    """
    TD(0) agent with ε-greedy policy for a given Maze environment.
    """
    def __init__(self, maze, alpha=0.1, gamma=0.9, epsilon=0.1):
        self.maze = maze
        self.alpha = alpha         # learning rate
        self.gamma = gamma         # discount factor
        self.epsilon = epsilon     # exploration rate
        # initialize state-value function V(s) to zero
        self.V = np.zeros((maze.n_row, maze.n_col))

    def choose_action(self, state):
        """
        ε-greedy policy: with probability ε choose random valid action,
        otherwise choose action maximizing (r + γ V(next_state)).
        """
        valid_actions = self.maze.get_valid_actions(state)
        # exploration
        if random.random() < self.epsilon:
            return random.choice(valid_actions)
        # exploitation: evaluate each action
        values = []
        for action in valid_actions:
            next_state, reward, done = self.maze.step(state, action)
            x2, y2 = next_state
            values.append(reward + self.gamma * self.V[x2, y2])
        # select best with random tie-breaking
        max_value = max(values)
        best_actions = [a for a, v in zip(valid_actions, values) if v == max_value]
        return random.choice(best_actions)

    def run_episode(self, max_steps=1000):
        """
        Runs one episode until reaching goal or max_steps.
        Returns number of steps taken.
        """
        state = self.maze.reset()
        steps = 0
        while steps < max_steps:
            action = self.choose_action(state)
            next_state, reward, done = self.maze.step(state, action)
            x, y = state
            x2, y2 = next_state
            # TD(0) update
            td_target = reward + self.gamma * self.V[x2, y2]
            self.V[x, y] += self.alpha * (td_target - self.V[x, y])
            state = next_state
            steps += 1
            if done:
                break
        return steps

# Example usage / simple test
if __name__ == "__main__":
    from maze import Maze
    grid = [
        [0,1,0],
        [0,0,0],
        [1,0,0],
    ]
    maze = Maze(grid, start=(1,0), goal=(2,2))
    agent = TD0Agent(maze)
    print("Test episode steps:", agent.run_episode())
