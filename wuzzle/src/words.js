// 6x6 word squares (ALL LEVELS)
export const PUZZLES_6 = [
  ["HAMATE", "ISABEL", "SPORED", "PIRATE", "IRIDES", "DESERT"],
  ["HEGIRA", "EVADER", "RESENT", "ENSATE", "TEETER", "ORRERY"],
  ["HOTTER", "UREIDE", "MISSIS", "POTATO", "ELINOR", "DESERT"],
  ["JIGSAW", "UNLACE", "STANCE", "TEDDED", "UNLADE", "STYLER"],
  ["KIRSCH", "INHERE", "SHINER", "MANNED", "ELOISE", "TESTER"],
  ["LEAVES", "EXTERN", "DHARMA", "GAMBIR", "ELAINE", "RENDER"],
  ["LEPTUS", "ESSENE", "SCOTIA", "SACRAL", "OPIATE", "REDDER"],
  ["MISSUS", "ORPINE", "REIVER", "UNLIVE", "LITTEN", "ACHENE"],
  ["NEWISH", "URANIA", "TRIVET", "LATENT", "ETERNE", "TARTAR"],
  ["OMAHAS", "MILIEU", "ASTERN", "SHAMAN", "UNIATE", "MACLED"],
  ["PARAPH", "ACACIA", "SCIENT", "SESTET", "IDEATE", "MEDLAR"],
  ["PARAPH", "AVULSE", "REDDER", "INDIUM", "AGENDA", "HEREON"],
  ["PASSIM", "ORIOLE", "TEASER", "AORTAL", "SLEETY", "HERREN"],
  ["PATTER", "EQUATE", "TUSCHE", "RICTAL", "ELAINE", "LANCER"],
  ["PELOPS", "ORACLE", "TARTAN", "ASKANT", "TEENER", "ORRERY"],
  ["PHASIC", "LACUNA", "AMENDS", "NUTLET", "ELAINE", "TILTER"],
  ["PSALMS", "TROGON", "OOLONG", "SIGNAL", "IDEATE", "SELLER"],
  ["PRIMAL", "RECIPE", "OTITIS", "SECRET", "ENLACE", "REELER"],
  ["RABATO", "ELOPER", "SULLEN", "OLEINE", "RATTER", "BRIERY"],
  ["RACISM", "APOGEE", "PENNIA", "IRVING", "SCOTER", "TUYERE"],
  ["RACISM", "EVINCE", "PERSON", "ASCENT", "STUCCO", "TASTER"],
  ["RADULA", "OSIRIS", "ASSESS", "MUTATE", "ERASER", "RELENT"],
  ["RAFTER", "ILLITE", "CLOTHE", "HERBAL", "ELAINE", "NESTER"],
  ["RAGMAN", "EMEUTE", "CENTRA", "ALTAIR", "LIENAL", "LASTLY"],
  ["RAGMAN", "ABLATE", "ALOTHS", "SESTET", "ESSENE", "REELER"],
  ["RESORB", "ELATER", "VIRTUE", "INDABA", "LOAVES", "ERRANT"],
  ["SACHEM", "TYRONE", "AMANDA", "CASEIN", "TRISTE", "EASTER"],
  ["SARDAR", "CLEAVE", "ALDRED", "REBIND", "PLUNGE", "HEDGER"],
  ["SCAREY", "ORNATE", "CONCHA", "ISAIAH", "ASLANT", "LESLEY"],
];

// Divide puzzles evenly among difficulties
const total = PUZZLES_6.length;
const perDifficulty = Math.floor(total / 3);

export const PUZZLES = {
  6: PUZZLES_6,
  EASY: PUZZLES_6.slice(0, perDifficulty),
  MEDIUM: PUZZLES_6.slice(perDifficulty, perDifficulty * 2),
  HARD: PUZZLES_6.slice(perDifficulty * 2),
};
