export const gameState = {
    secretCode: [],
    userCode: [],
    numOfTries: 0,
}

export const setSecretCode = function(randomNumbers) {
    gameState.secretCode = randomNumbers;
}

export const incrementNumOfTries = function() {
    gameState.numOfTries++;
}