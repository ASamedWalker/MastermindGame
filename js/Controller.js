import {default as codeMaker} from "./CodeMaker.js";
import { NUM_OF_NUMBERS, MAX_TRIES } from './config.js';
import * as model from "./Model.js";

codeMaker.fetchRandomNumbers().then(randomNumbers => {

    model.setSecretCode(randomNumbers);
    console.log(model.gameState);

    model.gameState.numOfTries = 0;
    let hasWon = false;
  
    // game loop
    while (hasWon === false && model.gameState.numOfTries < MAX_TRIES) {
      
      let guess = readInput();
      const guessedNumbers = guess.split('').map(item => {
        return parseInt(item, 10);
      });

      const occurrences = compareCodes(model.gameState.secretCode, guessedNumbers);
      console.log(occurrences);

      if (occurrences.inPlaceCount === NUM_OF_NUMBERS) {
        console.log('WON! You guessed it');
        hasWon = true;
      } else if (occurrences.inPlaceCount === 0 && occurrences.changedPlaceCount === 0) {
        console.log("No occurrences");
      } else {
        console.log('In place: ' + occurrences.inPlaceCount);
        console.log('Changed place: ' + occurrences.changedPlaceCount);
      }

      model.incrementNumOfTries();

      console.log(model.gameState.numOfTries, hasWon);
    }

    if (model.gameState.numOfTries === MAX_TRIES) {
      console.log('GAME OVER');
    }
});

const readInput = () => {
  while (true) {
    const guess = prompt("Guess a number combination");
    if (guess !== null) {
      if (guess.length === 4) {
        return guess;
      }

      if (guess.length === 0 || guess.length > 4) {
        alert('Out of range');
      }
    }
  }
}

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
      changedPlaceCount
    };
}