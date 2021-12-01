"use strict";

import { default as codeMaker } from "./CodeMaker.js";
import { NUM_OF_NUMBERS, MAX_TRIES } from "./Config.js";
import * as model from "./Model.js";
import { default as UI } from "./UI.js";
import ControlView from "./views/ControlView.js";

// In game loop (real time)
//    handleUserInput()
//    updateGame()
//    updateAI() is optional
//    render(data)

// Web HTTP Request
//    HTTP POST request comes in from HTML form (GET in case with search query in URL, q=game programming)
//    Routing chooses the controller by the API URL posts/ (routing decides which controller)
//    Service delegates the use case, all the business rules, to decide whichj data need to fetch
//    Fetches from DB the data, maps to model
//    Returned data pass to the template, render the data

// initialize game
const startGame = async () => {
  // initialize guessed code to empty array
  model.gameState.guessedCode = [];

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
  UI.renderControls();

  // add event listener to controls, pass in click handler function
  UI.addEventsToControls(clickHandler);

  // update the high scores ? optional
};

// create new game
startGame();
// ---------------------------------------------------------------------------------------

const clickHandler = (button) => {
  // check if control undo is pressed
  if (button.dataset.control === "undo") {
    console.log("undo the number in row");
    console.log("Pop returns the number from the Model.gameState");
    console.log("The UI gets updated and renders");
    console.log("unselect the number which was selected to the row");
  } else if (button.dataset.control === "submit") {
    console.log("submit is pressed");
    console.log(
      "(Game Engine) Compare the code (1234) (Model) and return status flags"
    );
    console.log("Render the status to the UI, provide visual feedback");
    console.log("Check if the player has won");
    console.log("Check if the player guessed number wrong");
    console.log("Check if the player has lost");
  } else {
    // get the pressed number from dataset selectedNumber
    //const selectedNumber =
    console.log("Number is pressed");
    console.log("Push selected number to guessed code array (Model->gameState)");
    console.log("Check for code length (Model)(Game Engine)");
    console.log("Modal alert window (UI)");
    console.log(
      "OPTIONAL Replace the number in the last position OR no feedback"
    );
    console.log("OR Render the number to be displayed to the UI");
  }
  // check if control submit is pressed
  // fall through to handle numbers

  // insert into turn row
  // OR
  // undo the number in turn row
  // OR
  // submit the combination
};

// compare codes
const compareCodes = (secretCode, guessedCode) => {
  let inPlaceCount = 0;
  let changedPlaceCount = 0;

  for (let i = 0; i < guessedCode.length; i++) {
    // compare digit from guessed code with one from secret code
    const index = secretCode.indexOf(guessedCode[i]);
    if (guessedCode[i] === secretCode[i]) {
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
