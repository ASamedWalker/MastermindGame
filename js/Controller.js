"use strict";

import { default as codeMaker } from "./CodeMaker.js";
import { CODE_LENGTH, MAX_TRIES } from "./config.js";
import * as model from "./Model.js";
import { default as UI } from "./UI.js";
import { default as eventListener } from "./EventListener.js";
import { default as sound } from "./Sound.js";
import { default as highscoreService } from "./service/HighscoreService.js";

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

// ---------------------------------------------------------------------------------------
const initModel = async () => {
  model.resetGuessedCode();
  model.initializeTime();

  let secretCode = await codeMaker.fetchRandomNumbers();
  model.setSecretCode(secretCode);
};

const initUI = () => {
  UI.renderBoard();
  UI.updateTurn(model.getCurrentTurn());
  UI.renderButtonPanel();
  UI.renderHighscores(model.getHighscores());
};

// Handlers/Callbacks for events
//-----------------------------------------------------
const submitScoreHandler = (playerName) => {
  UI.toggleAlert();

  highscoreService.addScore({
    playerName: playerName,
    numOfTries: model.getCurrentTurn(),
    duration: model.calcDuration(),
  });

  UI.renderHighscores(model.getHighscores());
};

const clickHandler = (button) => {
  const { secretCode, guessedCode, currentTurn } = model.gameState;
  let { control, selectedNumber } = button.dataset;

  if (control === "submit") {
    handleSubmit();
  } else if (control === "undo") {
    handleUndo();
  } else {
    handleSelectedNumber(selectedNumber);
  }
};

const closeButtonHandler = () => {
  UI.toggleAlert();
};

const handleSubmit = () => {
  if (model.getGuessedCode().length !== CODE_LENGTH) {
    UI.showAlertOnInvalidInput();
    eventListener.addEventListenerToCloseButton(closeButtonHandler);
    return;
  }

  updateGameLogic();

  UI.renderOccurrenceStatus(
    model.getCurrentTurn(),
    model.getOccurrenceStatus()
  );
  UI.updateTurn(model.getCurrentTurn());
};

const handleUndo = () => {
  if (model.getGuessedCode().length < 1) return;

  const newCode = model.getGuessedCode().pop();
  UI.renderCodeCombination(model.getCurrentTurn(), newCode);
};

const handleSelectedNumber = (selectedNumber) => {
  selectedNumber = parseInt(selectedNumber);
  if (model.getGuessedCode().length < CODE_LENGTH) {
    model.getGuessedCode().push(selectedNumber);
  }

  UI.renderCodeCombination(model.getCurrentTurn(), model.getGuessedCode());
};
//-----------------------------------------------------

// initialize game
const startGame = () => {
  initModel();
  initUI();
  eventListener.addEventListenersToPanelButtons(clickHandler);
};

startGame();

const updateGameLogic = () => {
  const { guessedCode, secretCode } = model.gameState;

  const occurrenceStatus = compareCodes(secretCode, guessedCode);
  model.setOccurrenceStatus(occurrenceStatus);

  if (hasGuessedSecretCode()) {
    UI.showAlertForWinningCondition();
    eventListener.addEventToSubmitButton(submitScoreHandler);

  } else if (hasLost()) {
    UI.showAlertForLosingCondition(secretCode);
    eventListener.addEventListenerToCloseButton(closeButtonHandler);
  
  } else {
    model.incrementTurn();
    model.resetGuessedCode();
  }
};

const hasGuessedSecretCode = () => {
  return model.getGuessedCode().join("") === model.getSecretCode().join("");
};

const hasLost = () => {
  return model.getCurrentTurn() === MAX_TRIES;
};

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
