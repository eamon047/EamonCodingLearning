# maze.py

import numpy as np

class Maze:
    """
    Maze environment for grid-based pathfinding with key-door mechanism.
    grid:      2D list or array, 0 = free cell, 1 = wall.
    start:     tuple (row, col) for initial position.
    goal:      tuple (row, col) for goal position.
    key_pos:   tuple (row, col) for key. None if no key.
    door_pos:  tuple (row, col) for door. None if no door.
    State:     (row, col, has_key) where has_key is 0 or 1.
    Actions:   0 = up, 1 = down, 2 = left, 3 = right.
    """
    def __init__(self, grid, start, goal, key_pos=None, door_pos=None):
        self.grid     = np.array(grid)
        self.start    = start
        self.goal     = goal
        self.key_pos  = key_pos
        self.door_pos = door_pos
        self.n_row, self.n_col = self.grid.shape

    def reset(self):
        """Reset environment to start state (no key)."""
        return (self.start[0], self.start[1], 0)

    def step(self, state, action):
        """
        Take an action in the environment.
        Returns: next_state (tuple), reward (0 or 1), done (bool).
        """
        r, c, has_key = state
        deltas = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        if action < 0 or action >= len(deltas):
            raise ValueError(f"Invalid action {action}")
        dr, dc = deltas[action]
        nr, nc = r + dr, c + dc

        # 检查边界和墙
        if not (0 <= nr < self.n_row and 0 <= nc < self.n_col and self.grid[nr, nc] == 0):
            return state, 0, False

        # 门逻辑：无钥匙时不能通过
        if self.door_pos is not None and (nr, nc) == self.door_pos and has_key == 0:
            return state, 0, False

        # 合法移动：更新钥匙状态
        new_has_key = has_key
        if self.key_pos    is not None and (nr, nc) == self.key_pos:
            new_has_key = 1
        if self.door_pos   is not None and (nr, nc) == self.door_pos and has_key == 1:
            new_has_key = 0  # 消耗钥匙

        # 到达终点
        if (nr, nc) == self.goal:
            return (nr, nc, new_has_key), 1, True

        return (nr, nc, new_has_key), 0, False

    def get_valid_actions(self, state):
        """
        返回合法动作列表（0-3），不包括撞墙、出界或无钥匙开门。
        """
        r, c, has_key = state
        deltas = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        valid = []
        for action, (dr, dc) in enumerate(deltas):
            nr, nc = r + dr, c + dc
            if not (0 <= nr < self.n_row and 0 <= nc < self.n_col):
                continue
            if self.grid[nr, nc] == 1:
                continue
            if self.door_pos is not None and (nr, nc) == self.door_pos and has_key == 0:
                continue
            valid.append(action)
        return valid

if __name__ == "__main__":
    # 简单测试
    grid    = [[0,1,0],[0,0,0],[1,0,0]]
    maze    = Maze(grid, start=(1,0), goal=(2,2), key_pos=(0,2), door_pos=(1,2))
    s0      = maze.reset()
    print("Reset state:", s0)
    print("Valid actions:", maze.get_valid_actions(s0))
    for a in range(4):
        ns, r, done = maze.step(s0, a)
        print(f"Action {a} -> Next {ns}, Reward {r}, Done {done}")
