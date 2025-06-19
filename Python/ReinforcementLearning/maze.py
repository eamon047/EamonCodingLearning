import numpy as np

class Maze:
    """
    Maze environment for grid-based pathfinding.
    grid: 2D list or array, 0 = free cell, 1 = wall.
    start: tuple (row, col) for initial position.
    goal:  tuple (row, col) for goal position.
    Actions: 0 = up, 1 = down, 2 = left, 3 = right.
    """
    def __init__(self, grid, start, goal):
        self.grid = np.array(grid)
        self.start = start
        self.goal = goal
        self.n_row, self.n_col = self.grid.shape

    def reset(self):
        """Reset environment to start state."""
        return self.start

    def step(self, state, action):
        """
        Take an action in the environment.
        Returns: next_state (tuple), reward (0 or 1), done (bool).
        """
        x, y = state
        # Define movement deltas
        deltas = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        if action < 0 or action >= len(deltas):
            raise ValueError(f"Invalid action {action}")
        dx, dy = deltas[action]
        x2, y2 = x + dx, y + dy
        # Check boundaries and walls
        if (0 <= x2 < self.n_row and 0 <= y2 < self.n_col and self.grid[x2, y2] == 0):
            next_state = (x2, y2)
        else:
            # invalid move: stay in place
            next_state = (x, y)
        # Reward and done flag
        if next_state == self.goal:
            return next_state, 1, True
        else:
            return next_state, 0, False

    def get_valid_actions(self, state):
        """
        Returns a list of valid actions (0-3) that do not lead into walls or outside grid.
        """
        valid = []
        deltas = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        x, y = state
        for action, (dx, dy) in enumerate(deltas):
            x2, y2 = x + dx, y + dy
            if 0 <= x2 < self.n_row and 0 <= y2 < self.n_col and self.grid[x2, y2] == 0:
                valid.append(action)
        return valid

# Example usage / simple test
if __name__ == "__main__":
    # 小网格测试
    grid = [
        [0, 1, 0],
        [0, 0, 0],
        [1, 0, 0],
    ]
    maze = Maze(grid, start=(1,0), goal=(2,2))
    s = maze.reset()
    print("Start:", s)
    for a in range(4):
        ns, r, done = maze.step(s, a)
        print(f"Action {a} -> Next {ns}, Reward {r}, Done {done}")
    print("Valid actions from start:", maze.get_valid_actions(s))
