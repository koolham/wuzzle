// 3x3 word squares (EASY)
export const PUZZLES_3 = [
  ["CAT", "ARE", "TEN"], // C A T / A R E / T E N
  ["DOG", "ONE", "GEN"], // D O G / O N E / G E N
  ["SUN", "URN", "NUN"], // S U N / U R N / N U N
  ["RAM", "APE", "MEN"], // R A M / A P E / M E N
  ["MAP", "APE", "PET"], // M A P / A P E / P E T
  ["ART", "RAN", "TEN"], // A R T / R A N / T E N
  ["TAP", "APE", "PET"], // T A P / A P E / P E T
  ["PAN", "ARE", "NET"], // P A N / A R E / N E T
  ["RAT", "ATE", "TEN"], // R A T / A T E / T E N
  ["BAT", "ATE", "TEN"], // B A T / A T E / T E N
];

// 4x4 word squares (MEDIUM)
export const PUZZLES_4 = [
  ["AREA", "RITE", "EARN", "ANTE"], // A R E A / R I T E / E A R N / A N T E
  ["EAST", "ANTE", "STEM", "TEMP"], // E A S T / A N T E / S T E M / T E M P
  ["LION", "IRON", "ONTO", "NODE"], // L I O N / I R O N / O N T O / N O D E
  ["MEAL", "EARN", "ARCH", "LAND"], // M E A L / E A R N / A R C H / L A N D
  ["STOP", "TONE", "ONCE", "PEST"], // S T O P / T O N E / O N C E / P E S T
  ["WORD", "ORAL", "RAIL", "DIAL"], // W O R D / O R A L / R A I L / D I A L
  ["FIRM", "IRON", "RING", "MING"], // F I R M / I R O N / R I N G / M I N G
  ["BEND", "EARN", "NEAR", "DARN"], // B E N D / E A R N / N E A R / D A R N
  ["TONE", "ONCE", "NEAT", "EARN"], // T O N E / O N C E / N E A T / E A R N
  ["MIST", "ITEM", "STEM", "TEMP"], // M I S T / I T E M / S T E M / T E M P
];

// 5x5 word squares (HARD)
// These are rare; here are some classic English 5x5 word squares:
export const PUZZLES_5 = [
  ["EARTH", "ARENA", "REACT", "TENOR", "HEART"], // E A R T H / A R E N A / R E A C T / T E N O R / H E A R T
  ["RAISE", "AISLE", "ISLET", "SLEET", "ELITE"], // R A I S E / A I S L E / I S L E T / S L E E T / E L I T E
  ["ROBIN", "OCEAN", "BEAST", "INERT", "NESTS"], // R O B I N / O C E A N / B E A S T / I N E R T / N E S T S
  ["SHARE", "HEARD", "ARENA", "REACT", "EDGAR"], // S H A R E / H E A R D / A R E N A / R E A C T / E D G A R
  ["PLANT", "LEARN", "ARISE", "NEARS", "TREND"], // P L A N T / L E A R N / A R I S E / N E A R S / T R E N D
  ["STERN", "TREND", "ENACT", "REACT", "NEARS"], // S T E R N / T R E N D / E N A C T / R E A C T / N E A R S
  ["CRANE", "ROAST", "ALONE", "NEARS", "EARTH"], // C R A N E / R O A S T / A L O N E / N E A R S / E A R T H
  ["TRAIN", "REACT", "ALONE", "INERT", "NEARS"], // T R A I N / R E A C T / A L O N E / I N E R T / N E A R S
  ["PLANE", "LEARN", "ARISE", "NEARS", "EARTH"], // P L A N E / L E A R N / A R I S E / N E A R S / E A R T H
  ["SHINE", "HEART", "ALONE", "NEARS", "EARTH"], // S H I N E / H E A R T / A L O N E / N E A R S / E A R T H
];

// PUZZLES is an object that maps grid size to an array of puzzles (levels).
export const PUZZLES = {
  3: PUZZLES_3,
  4: PUZZLES_4,
  5: PUZZLES_5,
};
