import os
import numpy as np
import matplotlib.pyplot as plt
import argparse
from maze import Maze
from agent_q import QLearningAgent

def parse_ascii(ascii_maze):
    """
    Parse ASCII representation of maze into grid, start, and goal.
    # = wall, . = free, S = start, G = goal
    """
    grid = []
    start = goal = None
    for i, row in enumerate(ascii_maze):
        grid_row = []
        for j, ch in enumerate(row):
            if ch == '#':
                grid_row.append(1)
            elif ch == '.' or ch.upper() in ('S', 'G'):
                grid_row.append(0)
                if ch.upper() == 'S':
                    start = (i, j)
                elif ch.upper() == 'G':
                    goal = (i, j)
            else:
                raise ValueError(f"只能用 # . S G : 发现 {ch}")
        grid.append(grid_row)
    return grid, start, goal

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Run Q-Learning on the maze environment")
    parser.add_argument("--episodes", type=int, default=500, help="Number of episodes to train")
    parser.add_argument("--alpha", type=float, default=0.1, help="Learning rate α")
    parser.add_argument("--gamma", type=float, default=0.9, help="Discount factor γ")
    parser.add_argument("--epsilon", type=float, default=0.1, help="Exploration rate ε")
    args = parser.parse_args()

    # Use the same ASCII maze as before
    ascii_maze = [
        "############",
        "#S.#.......#",
        "#..#.#..##.#",
        "##.#.####..#",
        "#.....#....#",
        "#.....#....#",
        "#####.#.#..#",
        "#.....#.#..#",
        "#.#####.#..#",
        "#....#..#..#",
        "#..#....#.G#",
        "############",
    ]
    grid, start, goal = parse_ascii(ascii_maze)
    maze = Maze(grid, start, goal)
    agent = QLearningAgent(maze, alpha=args.alpha, gamma=args.gamma, epsilon=args.epsilon)

    os.makedirs("plots", exist_ok=True)
    steps_list = []
    for ep in range(1, args.episodes + 1):
        steps = agent.run_episode()
        steps_list.append(steps)
        if ep % max(1, args.episodes // 10) == 0:
            print(f"Episode {ep}/{args.episodes}: {steps} steps")

    # Plot and save learning curve
    plt.figure()
    plt.plot(range(1, args.episodes + 1), steps_list)
    plt.xlabel("Episode")
    plt.ylabel("Steps to Goal")
    plt.title("Q-Learning: Learning Curve")
    plt.grid(True)
    plt.tight_layout()
    plt.savefig("plots/q_learning_curve.png")
    plt.show()
