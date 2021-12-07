export let gameState = {
    secretCode: [],
    guessedCode: [],
    currentTurn: 0,
    occurrenceStatus: {}
}

export const setSecretCode = function(randomNumbers) {
    gameState.secretCode = randomNumbers;
}

export const incrementTurn = function() {
    gameState.currentTurn++;
}