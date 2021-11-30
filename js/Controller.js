"use strict";

import { default as codeMaker } from "./CodeMaker.js";
import { NUM_OF_NUMBERS, MAX_TRIES } from "./Config.js";
import * as model from "./Model.js";
import { default as UI } from "./UI.js";

// initialize game
const startGame = async () => {
  // initialize user code to empty array
  model.gameState.userCode = [];

  // set first try to 0
  model.gameState.currentTurn = 0;

  // set start time ? optional
  // get secret code, need to store into variable
  let secretCode = await codeMaker.fetchRandomNumbers();

  // set secret code in model
  model.setSecretCode(secretCode);

  // delegate to view to create a board
  UI.renderBoard();

  // delegate to view to update the existing turn/try
  UI.updateTurn(model.gameState.currentTurn);

  // delegate to controls view to create undo/submit controls
  

  // add event listener to controls
  // update the high scores ? optional
};

// create new game
startGame();

const compareCodes = (secretCode, guessedNumbers) => {
  let inPlaceCount = 0;
  let changedPlaceCount = 0;

  for (let i = 0; i < guessedNumbers.length; i++) {
    // compare digit from guessed code with one from secret code
    const index = secretCode.indexOf(guessedNumbers[i]);
    if (guessedNumbers[i] === secretCode[i]) {
      inPlaceCount++;
    } else if (index !== -1 && i !== index) {
      changedPlaceCount++;
    }
  }

  return {
    inPlaceCount,
    changedPlaceCount,
  };
};

// const randomNumbers = await codeMaker.fetchRandomNumbers();
// console.log(randomNumbers);

// model.setSecretCode(randomNumbers);
// console.log(model.gameState);

// model.gameState.numOfTries = 0;
// let hasWon = false;

// // game loop
// while (hasWon === false && model.gameState.numOfTries < MAX_TRIES) {

//   //let guess = readInput();
//   let guess = 1234;
//   const guessedNumbers = guess.split('').map(item => {
//     return parseInt(item, 10);
//   });

//   const occurrences = compareCodes(model.gameState.secretCode, guessedNumbers);
//   console.log(occurrences);

//   if (occurrences.inPlaceCount === NUM_OF_NUMBERS) {
//     console.log('WON! You guessed it');
//     hasWon = true;
//   } else if (occurrences.inPlaceCount === 0 && occurrences.changedPlaceCount === 0) {
//     console.log("No occurrences");
//   } else {
//     console.log('In place: ' + occurrences.inPlaceCount);
//     console.log('Changed place: ' + occurrences.changedPlaceCount);
//   }

//   model.incrementNumOfTries();
//   console.log(model.gameState.numOfTries, hasWon);
// }

// if (model.gameState.numOfTries === MAX_TRIES) {
//   console.log('GAME OVER');
// }
