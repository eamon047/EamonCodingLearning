import numpy as np
import random

class QLearningAgent:
    def __init__(self, maze, alpha=0.1, gamma=0.9, epsilon=0.1):
        self.maze    = maze
        self.alpha   = alpha
        self.gamma   = gamma
        self.epsilon = epsilon
        # Q-table: shape [n_row, n_col, 4]
        self.Q = np.zeros((maze.n_row, maze.n_col, 4))

    def choose_action(self, state):
        valid = self.maze.get_valid_actions(state)
        if random.random() < self.epsilon:
            return random.choice(valid)
        # exploitation: pick max_a Q(s,a)
        qs = [self.Q[state[0], state[1], a] for a in valid]
        max_q = max(qs)
        best = [a for a, q in zip(valid, qs) if q == max_q]
        return random.choice(best)

    def run_episode(self, max_steps=1000):
        """Run one episode, return steps taken to reach goal."""
        state = self.maze.reset()
        steps = 0
        while steps < max_steps:
            action = self.choose_action(state)
            next_state, reward, done = self.maze.step(state, action)
            x, y   = state
            x2, y2 = next_state
            # Q-Learning update
            best_next = np.max(self.Q[x2, y2])
            td_target = reward + self.gamma * best_next
            self.Q[x, y, action] += self.alpha * (td_target - self.Q[x, y, action])

            state = next_state
            steps += 1
            if done:
                break

        return steps
