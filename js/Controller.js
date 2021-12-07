"use strict";

import { default as codeMaker } from "./CodeMaker.js";
import { NUM_OF_NUMBERS, MAX_TRIES } from "./config.js";
import * as model from "./Model.js";
import { default as UI } from "./UI.js";

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
  model.gameState.currentTurn = 1;

  // set start time

  let secretCode = await codeMaker.fetchRandomNumbers();

  model.setSecretCode(secretCode);

  initializeUI();

  // update the high scores
};

startGame();
// ---------------------------------------------------------------------------------------

const initializeUI = () => {
  UI.renderBoard();
  UI.updateTurn(model.gameState.currentTurn);
  UI.renderButtonPanel();
  UI.addEventsToButtonPanel(clickHandler);
};

const clickHandler = (button) => {
  const { secretCode, guessedCode, currentTurn } = model.gameState;
  let { control, selectedNumber } = button.dataset;

  if (control === "submit") {
    if (guessedCode.length !== NUM_OF_NUMBERS) {
      UI.showAlertOnInvalidInput();
      return;
    }

    updateGame();

    // UI update
    UI.renderOccurrenceStatus(
      model.gameState.currentTurn,
      model.gameState.occurrenceStatus
    );

    UI.updateTurn(model.gameState.currentTurn);

    return;
  }

  // check if control undo is pressed
  if (control === "undo") {
    if (guessedCode.length < 1) return;
    guessedCode.pop();
    UI.renderCodeCombination(currentTurn, guessedCode);

    return;
  }

  // get the pressed/selected number from dataset selectedNumber
  selectedNumber = parseInt(selectedNumber);
  if (guessedCode.length < NUM_OF_NUMBERS) {
    guessedCode.push(selectedNumber);
  }

  UI.renderCodeCombination(currentTurn, guessedCode);
};

// update game
const updateGame = () => {
  const { guessedCode, secretCode } = model.gameState;

  const occurrenceStatus = compareCodes(secretCode, guessedCode);
  model.gameState.occurrenceStatus = occurrenceStatus;

  if (hasGuessedSecretCode(guessedCode, secretCode)) {
    UI.showAlertForWinningCondition();

    console.log("update highscore table, Logic");
  } else if (model.gameState.currentTurn === MAX_TRIES) {
    console.log("Check if the player has lost");
    UI.showAlertForLosingCondition(secretCode);

  } else {
    model.incrementTurn();
    model.resetGuessedCode();
    console.log("Check if the player guessed number wrong");
  }
};

const hasGuessedSecretCode = (guessedCode, secretCode) => {
  guessedCode.toString() === secretCode.toString();
};

// compare codes
const compareCodes = (secretCode, guessedCode) => {
  let inPlaceCount = 0;
  let changedPlaceCount = 0;
  let wrongCount = 0;

  for (let i = 0; i < guessedCode.length; i++) {
    // compare digit from guessed code with one from secret code
    const index = secretCode.indexOf(guessedCode[i]);
    if (guessedCode[i] === secretCode[i]) {
      inPlaceCount++;
    } else if (index !== -1 && i !== index) {
      changedPlaceCount++;
    } else {
      wrongCount++;
    }
  }

  return { inPlaceCount, changedPlaceCount, wrongCount };
};
