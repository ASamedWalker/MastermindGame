export const gameState = {
    secretCode: [],
    userCode: [],
    currentTurn: 0,
}

export const setSecretCode = function(randomNumbers) {
    gameState.secretCode = randomNumbers;
}

export const incrementTurn = function() {
    gameState.currentTurn++;
}