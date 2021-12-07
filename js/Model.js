export let gameState = {
  secretCode: [],
  guessedCode: [],
  currentTurn: 1,
  occurrenceStatus: {},
};

export const setSecretCode = function (randomNumbers) {
  gameState.secretCode = randomNumbers;
};

export const incrementTurn = function () {
  gameState.currentTurn++;
};

export const resetGuessedCode = function () {
  gameState.guessedCode = [];
};
