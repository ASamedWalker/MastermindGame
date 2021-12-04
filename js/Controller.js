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
  model.gameState.guessedCode = [];
  model.gameState.currentTurn = 0;

  // set start time

  let secretCode = await codeMaker.fetchRandomNumbers();

  model.setSecretCode(secretCode);

  console.log(secretCode);

  initializeUI();

  // update the high scores
};

startGame();
// ---------------------------------------------------------------------------------------

const initializeUI = () => {
  UI.renderBoard();
  UI.updateTurn(model.gameState.currentTurn);
  UI.renderControls();
  UI.addEventsToControls(clickHandler);
};

const clickHandler = (button) => {
  console.log("LOG HERE");
  const { secretCode, guessedCode } = model.gameState;
  let { control, selectedNumber } = button.dataset;

  if (control === "submit") {
    console.log("submit is pressed");
    let occurrenceStatus = compareCodes(secretCode, guessedCode);
    console.log(occurrenceStatus);

    console.log("UI renders the view, render the occurrence status");
    // delegated to game engine updateGame()
    updateGame(occurrenceStatus);
    // UI update

    return;
  }

  // check if control undo is pressed
  if (control === "undo") {
    console.log("unselect the number which was selected to the row");
    if (guessedCode.length < 1) return;
    guessedCode.pop();
    console.log("UI renders the view");
    return;
  }

  // get the pressed/selected number from dataset selectedNumber
  console.log("Number is pressed");
  selectedNumber = parseInt(selectedNumber);
  console.log(selectedNumber);
  if (guessedCode.length < NUM_OF_NUMBERS) {
    guessedCode.push(selectedNumber);
    console.log(guessedCode);
  } else {
    console.log("Modal alert window (UI)");
  }
  console.log("UI renders the view");
};

// update game
const updateGame = (occurrenceStatus) => {
  const { guessedCode, secretCode } = model.gameState;
  if (guessedCode.toString() === secretCode.toString()) {
    // console.log(
    //   "showing input box for user name, save player data with user name, UI"
    // );
    UI.showAlertForWinningCondition();

    console.log("update highscore table, Logic");
    console.log("show alert window for winning, UI");
  }

  console.log("Check if the player guessed number wrong");
  console.log("Check if the player has lost");
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
