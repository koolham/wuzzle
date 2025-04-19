import React, { useState, useEffect } from "react";
import "./wuzzle.css";
import { PUZZLES } from "./words";

const DIFFICULTY = {
  EASY: { size: 3 },
  MEDIUM: { size: 4 },
  HARD: { size: 5 },
};
const DEFAULT_DIFFICULTY = "EASY";

// Get puzzles for the current size
const getPuzzles = (size) => {
  return PUZZLES[size] || [];
};

function Wuzzle() {
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
  const [level, setLevel] = useState(0); // 0-based index for levels
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setLevel(0); // Reset to first level on difficulty change
  }, [difficulty]);

  useEffect(() => {
    initializeGame(difficulty, level);
    // eslint-disable-next-line
  }, [difficulty, level]);

  const initializeGame = (difficultyKey, levelIndex) => {
    const size = DIFFICULTY[difficultyKey].size;
    const puzzles = getPuzzles(size);
    const puzzle = puzzles[levelIndex] || [];
    // Convert each word to an array of letters for rendering
    const filledGrid = puzzle.map((word) => word.split(""));
    setGrid(filledGrid);
  };

  const size = DIFFICULTY[difficulty].size;
  const puzzles = getPuzzles(size);

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
          <button
            onClick={() => setLevel((prev) => Math.max(prev - 1, 0))}
            disabled={level === 0}
          >
            Previous
          </button>
          <span style={{ margin: "0 12px" }}>
            Level {level + 1} / {puzzles.length}
          </span>
          <button
            onClick={() =>
              setLevel((prev) => Math.min(prev + 1, puzzles.length - 1))
            }
            disabled={level === puzzles.length - 1}
          >
            Next
          </button>
        </div>
        <div className="grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((letter, colIndex) => (
                <div key={colIndex} className="cell">
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Add your word-finding UI here */}
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://www.landex.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Landex Development
        </a>
      </footer>
    </div>
  );
}

export default Wuzzle;
