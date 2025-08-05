# Maze Reinforcement Learning Assignment

## Overview

This project solves a grid‑world maze with reinforcement learning. Two value‑based algorithms are provided:

* **TD(0) with ε‑greedy policy** – learns a state‑value function V(s).
* **Q‑Learning with ε‑greedy policy** – learns an action‑value function Q(s,a).

Both agents are trained to move from a fixed start **S** to the goal **G** while avoiding walls `#`. Learning curves (episode length vs. episode index) are plotted automatically.

## Repository Structure

```
assignment_summary.md   – Homework specification/notes
maze.py                 – Maze environment (grid, physics, rewards)
agent_td.py             – TD(0) agent implementation
agent_q.py              – Q‑Learning agent implementation
run_td.py               – Train a TD(0) agent on the default maze
run_q.py                – Train a Q‑Learning agent on the default maze
run_td_compare.py       – TD(0) with three preset ε values (0.01, 0.1, 0.5)
run_q_compare.py        – Q‑Learning with three preset ε values (0.01, 0.1, 0.5)
plots/                  – Output directory for learning‑curve PNGs
```

## Requirements

```bash
Python ≥3.8
numpy
matplotlib
```

Install with

```bash
pip install -r requirements.txt   # or install the three libraries manually
```

## Quick Start

Train a TD(0) agent for 500 episodes (default hyper‑parameters):

```bash
python run_td.py --episodes 500 --alpha 0.1 --gamma 0.9 --epsilon 0.1
```

Train a Q‑Learning agent:

```bash
python run_q.py --episodes 500 --alpha 0.001 --gamma 0.9 --epsilon 0.1   
```

Plots are saved to `plots/` and displayed interactively.

## Comparing Different ε Values

Scripts `run_td_compare.py` and `run_q_compare.py` fix three exploration rates (0.01, 0.1, 0.5) and produce a separate learning‑curve PNG for each rate.

```bash
python run_td_compare.py --episodes 500 --alpha 0.1 --gamma 0.9
python run_q_compare.py --episodes 500 --alpha 0.1 --gamma 0.9
```

## Customising the Maze

Edit the `ascii_maze` list in any `run_*.py` script to try new layouts. Characters:

* `#` – wall (impassable)
* `.` – free space
* `S` – agent start
* `G` – goal (reward 1, episode terminates)

## Extending the Assignment

* **Key–door mechanism**: add cells `K` (key) and `D` (door) in `maze.py` and update agents to handle the extra state flag (`has_key`).
* **Larger mazes / different reward schemes**: experiment by modifying the environment grid.

## Folder Cleanup

Call `rm -rf plots/*` to clear previous results before a new experiment.