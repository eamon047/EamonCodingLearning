# run_td.py

import os
import numpy as np
import matplotlib.pyplot as plt
import argparse
from maze import Maze
from agent_td import TD0Agent

def parse_ascii(ascii_maze):
    """
    Parse ASCII representation of maze:
    # = wall, . = free, S = start, G = goal, K = key, D = door.
    返回 grid, start, goal, key_pos, door_pos.
    """
    grid      = []
    start = goal = key_pos = door_pos = None

    for i, row in enumerate(ascii_maze):
        grid_row = []
        for j, ch in enumerate(row):
            if ch == '#':
                grid_row.append(1)
            elif ch in ('.', 'S', 'G', 'K', 'D'):
                grid_row.append(0)
            else:
                raise ValueError(f"Unknown char {ch}")
            if ch == 'S':
                start = (i, j)
            elif ch == 'G':
                goal = (i, j)
            elif ch == 'K':
                key_pos = (i, j)
            elif ch == 'D':
                door_pos = (i, j)
        grid.append(grid_row)

    if start is None or goal is None:
        raise ValueError("Maze must have start 'S' and goal 'G'")
    return grid, start, goal, key_pos, door_pos

def main():
    parser = argparse.ArgumentParser(
        description="Run TD(0) ε-greedy on a maze with key-door mechanism")
    parser.add_argument("--episodes", type=int,   default=500, help="turn")
    parser.add_argument("--alpha",    type=float, default=0.1, help="α")
    parser.add_argument("--gamma",    type=float, default=0.9, help="γ")
    parser.add_argument("--epsilon",  type=float, default=0.1, help="ε")
    args = parser.parse_args()

    ascii_maze = [
        "############",
        "#S.#.......#",
        "#..#K#..##.#",
        "##.#.####..#",
        "#.....#...##",
        "#.....D....#",
        "#####.#.#..#",
        "#.....#.#..#",
        "#.#####.#..#",
        "#....#..#..#",
        "#..#....#.G#",
        "############",
    ]

    grid, start, goal, key_pos, door_pos = parse_ascii(ascii_maze)
    maze  = Maze(grid, start, goal, key_pos=key_pos, door_pos=door_pos)
    agent = TD0Agent(maze, alpha=args.alpha, gamma=args.gamma, epsilon=args.epsilon)

    os.makedirs("plots", exist_ok=True)
    steps_list = []
    for ep in range(1, args.episodes + 1):
        steps = agent.run_episode()
        steps_list.append(steps)
        if ep % max(1, args.episodes // 10) == 0:
            print(f"Episode {ep}/{args.episodes}: {steps} steps")

    # Plot the learning curve
    plt.figure()
    plt.plot(range(1, args.episodes + 1), steps_list)
    plt.xlabel("Episode")
    plt.ylabel("Steps to Goal")
    plt.title("TD(0) Learning Curve")
    plt.grid(True)
    plt.tight_layout()
    plt.savefig("plots/td_learning_curve.png")
    plt.show()

if __name__ == "__main__":
    main()
