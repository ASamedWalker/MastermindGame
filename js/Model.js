export let gameState = {
  secretCode: [],
  guessedCode: [],
  currentTurn: 1,
  highscores: [],
  occurrenceStatus: {},
};

export const setSecretCode = (randomNumbers) => {
  gameState.secretCode = randomNumbers;
};

export const incrementTurn = () => {
  gameState.currentTurn++;
};

export const resetGuessedCode = () => {
  gameState.guessedCode = [];
};

export const getHighscores = () => {
  return gameState.highscores;
}

export const setHighscores = (highscores) => {
  gameState.highscores = highscores;
}
