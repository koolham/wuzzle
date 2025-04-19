// 3x3 puzzles (EASY): Each puzzle is an array of 3 words, all rows and columns are valid words.
export const PUZZLES_3 = [
  ["CAT", "ATE", "TEN"], // Puzzle 1
  ["DOG", "ONE", "END"], // Puzzle 2
  ["SUN", "URN", "NUN"], // Puzzle 3
  ["CAR", "ARC", "RAN"], // Puzzle 4
  ["MAP", "APE", "PET"], // Puzzle 5
  ["PEN", "END", "NOD"], // Puzzle 6
  ["BEE", "EEL", "ELK"], // Puzzle 7
  ["HAT", "ATE", "TEN"], // Puzzle 8
  ["RAT", "ATE", "TEN"], // Puzzle 9
  ["BAT", "ATE", "TEN"], // Puzzle 10
];

// 4x4 puzzles (MEDIUM): Each puzzle is an array of 4 words, all rows and columns are valid words.
export const PUZZLES_4 = [
  ["EAST", "ANTE", "STEM", "TEMP"], // Puzzle 1
  ["LION", "IRON", "ONTO", "NODE"], // Puzzle 2
  ["MIST", "ITEM", "STEM", "TEMP"], // Puzzle 3
  ["COLD", "OLDE", "LEND", "DEAL"], // Puzzle 4
  ["BARN", "ARCH", "RICH", "CHAT"], // Puzzle 5
  ["FIRM", "IRON", "RING", "MING"], // Puzzle 6
  ["WORD", "ORAL", "RAIL", "DIAL"], // Puzzle 7
  ["FISH", "INCH", "SHIP", "HIPS"], // Puzzle 8
  ["BEND", "EARN", "NEAR", "DARN"], // Puzzle 9
  ["TONE", "ONCE", "NEAT", "EARN"], // Puzzle 10
];

// 5x5 puzzles (HARD): Each puzzle is an array of 5 words, all rows and columns are valid words.
export const PUZZLES_5 = [
  ["EARTH", "ALONE", "ROBIN", "THINK", "HENRY"], // Puzzle 1
  ["PLANT", "LEARN", "ARISE", "NEARS", "TREND"], // Puzzle 2
  ["SHARE", "HEART", "ALONE", "REACT", "ENTER"], // Puzzle 3
  ["STERN", "TREND", "ENACT", "REACT", "NEARS"], // Puzzle 4
  ["CRANE", "ROAST", "ALONE", "NEARS", "EARTH"], // Puzzle 5
  ["TRAIN", "REACT", "ALONE", "INERT", "NEARS"], // Puzzle 6
  ["PLANE", "LEARN", "ARISE", "NEARS", "EARTH"], // Puzzle 7
  ["SHINE", "HEART", "ALONE", "NEARS", "EARTH"], // Puzzle 8
  ["STONE", "TREND", "ONSET", "NEARS", "EARTH"], // Puzzle 9
  ["CRATE", "REACT", "ALONE", "NEARS", "EARTH"], // Puzzle 10
];

// PUZZLES is an object that maps grid size to an array of puzzles (levels).
export const PUZZLES = {
  3: PUZZLES_3,
  4: PUZZLES_4,
  5: PUZZLES_5,
};
