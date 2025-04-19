import React, { useState, useEffect } from "react";
import "./wuzzle.css";
import { PUZZLES } from "./words";

const DIFFICULTY = {
  EASY: { key: "EASY", size: 6, reveal: 18 }, // Reveal 18/36 cells (50%)
  MEDIUM: { key: "MEDIUM", size: 6, reveal: 12 }, // Reveal 12/36 cells (33%)
  HARD: { key: "HARD", size: 6, reveal: 6 }, // Reveal 6/36 cells (16%)
};
const DEFAULT_DIFFICULTY = "EASY";

// Get puzzles for the current difficulty
const getPuzzles = (difficultyKey) => {
  return PUZZLES[difficultyKey] || [];
};

// Helper to generate a mask for revealed cells
function generateRevealMask(size, revealCount) {
  const total = size * size;
  const indices = Array.from({ length: total }, (_, i) => i);
  // Shuffle indices
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  // Reveal the first revealCount cells
  const revealed = new Set(indices.slice(0, revealCount));
  // Build mask
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => revealed.has(row * size + col))
  );
}

function getHintColor(guess, answer) {
  if (!guess || guess.length !== 1 || !/^[A-Z]$/i.test(guess)) return "";
  const g = guess.toUpperCase().charCodeAt(0);
  const a = answer.toUpperCase().charCodeAt(0);
  if (g === a) return "cell-correct";
  const diff = Math.abs(g - a);
  // 1 away: yellow, 2-3 away: orange, 4-6 away: red, else no color
  if (diff === 1) return "cell-hint-red";
  if (diff <= 3) return "cell-hint-orange";
  if (diff <= 6) return "cell-hint-yellow";
  return "";
}

function Wuzzle() {
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
  const [level, setLevel] = useState(0); // 0-based index for levels
  const [grid, setGrid] = useState([]);
  const [mask, setMask] = useState([]); // true = revealed, false = hidden
  const [guesses, setGuesses] = useState([]); // user's guesses
  const [completed, setCompleted] = useState(false);

  // Refs for all input cells
  const inputRefs = React.useRef([]);

  useEffect(() => {
    setLevel(0); // Reset to first level on difficulty change
  }, [difficulty]);

  useEffect(() => {
    initializeGame(difficulty, level);
    // eslint-disable-next-line
  }, [difficulty, level]);

  const initializeGame = (difficultyKey, levelIndex) => {
    setCompleted(false);
    const { size, reveal } = DIFFICULTY[difficultyKey];
    const puzzles = getPuzzles(difficultyKey);
    const puzzle = puzzles[levelIndex] || [];
    const filledGrid = puzzle.map((word) => word.split(""));
    setGrid(filledGrid);

    // Generate mask and guesses
    const revealMask = generateRevealMask(size, reveal);
    setMask(revealMask);
    setGuesses(
      filledGrid.map((row, r) =>
        row.map((cell, c) => (revealMask[r][c] ? cell : ""))
      )
    );
    // Reset refs
    inputRefs.current = [];
  };

  // Helper to move focus to the next input cell
  const focusNextInput = (row, col) => {
    const size = grid.length;
    for (let r = row; r < size; r++) {
      for (let c = r === row ? col + 1 : 0; c < size; c++) {
        if (!mask[r][c]) {
          const ref = inputRefs.current[r * size + c];
          if (ref) {
            ref.focus();
            return;
          }
        }
      }
    }
    // If not found, try from the beginning
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!mask[r][c]) {
          const ref = inputRefs.current[r * size + c];
          if (ref) {
            ref.focus();
            return;
          }
        }
      }
    }
  };

  // Handle input change
  const handleInput = (row, col, value) => {
    if (completed || mask[row][col]) return;
    if (!/^[A-Za-z]?$/.test(value)) return;
    const upper = value.toUpperCase();
    setGuesses((prev) => {
      const next = prev.map((r) => [...r]);
      next[row][col] = upper;
      // Check for completion
      const solved = next.every((r, ri) =>
        r.every((cell, ci) => cell === grid[ri][ci])
      );
      if (upper === grid[row][col]) {
        setTimeout(() => focusNextInput(row, col), 0);
      }
      if (solved) setCompleted(true);
      return next;
    });
  };

  const puzzles = getPuzzles(difficulty);

  return (
    <div className="game-container">
      <div className="wuzzle">
        <div className="logo-divider" style={{ flexDirection: "column" }}>
          <img
            src="/logo192.png"
            alt="Wuzzle Logo"
            className="game-logo"
            width="120"
            height="120"
          />
          <h1 style={{ margin: "16px 0 0 0" }}>Wuzzle</h1>
        </div>
        <div className="difficulty-controls">
          {Object.keys(DIFFICULTY).map((diff) => (
            <button
              key={diff}
              className={`difficulty-button ${
                difficulty === diff ? "active" : ""
              }`}
              onClick={() => setDifficulty(diff)}
            >
              {diff.toLowerCase()}
            </button>
          ))}
        </div>
        <div className="level-controls" style={{ margin: "12px 0" }}>
          <span style={{ margin: "0 12px" }}>
            Level {level + 1} / {puzzles.length}
          </span>
          <button
            onClick={() =>
              setLevel((prev) => Math.min(prev + 1, puzzles.length - 1))
            }
            disabled={level === puzzles.length - 1 || !completed}
          >
            Next
          </button>
        </div>
        <div className="grid">
          {guesses.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => {
                if (mask[rowIndex]?.[colIndex]) {
                  return (
                    <div key={colIndex} className="cell revealed">
                      {grid[rowIndex][colIndex]}
                    </div>
                  );
                } else {
                  const hintClass = getHintColor(
                    cell,
                    grid[rowIndex][colIndex]
                  );
                  return (
                    <input
                      key={colIndex}
                      ref={(el) => {
                        inputRefs.current[rowIndex * grid.length + colIndex] =
                          el;
                      }}
                      className={`cell input-cell ${hintClass}`}
                      type="text"
                      maxLength={1}
                      value={cell}
                      disabled={completed}
                      onChange={(e) =>
                        handleInput(rowIndex, colIndex, e.target.value)
                      }
                    />
                  );
                }
              })}
            </div>
          ))}
        </div>
        {completed && (
          <div className="puzzle-complete">
            <strong>Puzzle Complete!</strong>
            {level < puzzles.length - 1 && (
              <button
                style={{ marginLeft: 12 }}
                onClick={() => setLevel((prev) => prev + 1)}
              >
                Next Puzzle
              </button>
            )}
          </div>
        )}
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://www.landex.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Landex Development
        </a>{" "}
        {" | "}
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_left"
          style={{
            display: "inline-block",
            marginLeft: "8px",
          }}
        >
          <input type="hidden" name="business" value="WHEJBZ4SV3HB4" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="currency_code" value="USD" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </footer>
    </div>
  );
}

export default Wuzzle;
