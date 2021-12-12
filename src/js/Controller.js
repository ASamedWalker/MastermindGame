"use strict";

import { default as codeMaker } from "./CodeMaker.js";
import { MAX_TRIES, GAME_DIFFICULTY } from "./config.js";
import * as model from "./Model.js";
import { default as UI } from "./UI.js";
import { default as eventListener } from "./EventListener.js";;
import { default as highscoreService } from "./service/HighscoreService.js";

// ---------------------------------------------------------------------------------------
const initModel = async (difficulty) => {
  model.setDifficulty(difficulty);
  model.resetGuessedCode();
  model.setCurrentTurn(1);
  model.initializeTime();

  let secretCode = await codeMaker.fetchRandomNumbers(difficulty);
  model.setSecretCode(secretCode);
};

const initUI = () => {
  UI.renderBoard(model.getDifficulty());
  UI.updateTurn(model.getCurrentTurn());
  UI.renderButtonPanel(model.getDifficulty());
  UI.displayGame();
};

// Handlers/Callbacks for events
//-----------------------------------------------------
const onClose = () => {
  UI.toggleAlert();
};

const onViewHighscores = () => {
  UI.toggleAlert();
  startGame(model.getDifficulty());
}

const onGameOver = () => {
  UI.toggleAlert();
  startGame(model.getDifficulty());
}

const onSubmitScore = (playerName) => {
  highscoreService.addScore({
    playerName: playerName,
    numOfTries: model.getCurrentTurn(),
    duration: model.calcDuration(),
  });

  UI.renderHighscores(model.getHighscores());
  eventListener.addEventListenerToCloseButton(onViewHighscores);
};

const onInput = (button) => {
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

const onNewGame = (difficulty) => {
  startGame(difficulty);
}

const onMenuInput = (button) => {  
  let { menuItem } = button.dataset;

  if (menuItem === "display-rules") {
    UI.showModalForGameRules();
    eventListener.addEventListenerToCloseButton(onClose)

  } else if (menuItem === "display-about") {
    UI.showModalForCredits();
    eventListener.addEventListenerToCloseButton(onClose)

  } else if (menuItem === "display-highscores") {
    UI.showModalForHighscores(model.getHighscores());
    eventListener.addEventListenerToCloseButton(onClose)
  }
}

const handleSubmit = () => {
  if (model.getGuessedCode().length !== GAME_DIFFICULTY[model.getDifficulty()].codeLength) {
    UI.showAlertOnInvalidInput(model.getDifficulty());
    eventListener.addEventListenerToCloseButton(onClose);
    return;
  }

  const occurrenceStatus = compareCodes(model.getSecretCode(), model.getGuessedCode());
  model.setOccurrenceStatus(occurrenceStatus);

  UI.renderOccurrenceStatus(
    model.getCurrentTurn(),
    model.getOccurrenceStatus(),
    model.getDifficulty()
  );

  updateGameLogic();
  
  UI.updateTurn(model.getCurrentTurn());
};

const handleUndo = () => {
  if (model.getGuessedCode().length < 1) return;

  model.getGuessedCode().pop();
  UI.renderCodeCombination(model.getCurrentTurn(), model.getGuessedCode(), model.getDifficulty());
};

const handleSelectedNumber = (selectedNumber) => {
  if (model.getGuessedCode().length < GAME_DIFFICULTY[model.getDifficulty()].codeLength) {
    model.getGuessedCode().push(selectedNumber);
  }

  UI.renderCodeCombination(model.getCurrentTurn(), model.getGuessedCode(), model.getDifficulty());
};
//-----------------------------------------------------

// initialize game
const startGame = (difficulty) => {
  initModel(difficulty);
  initUI();
  eventListener.addEventListenersToPanelButtons(onInput);
};

eventListener.addEventListenerForNewGame(onNewGame);
eventListener.addEventListenersToMenuButtons(onMenuInput);

// won/lost/continue
const updateGameLogic = () => {

  if (hasGuessedSecretCode()) {
    UI.showAlertForWinningCondition();
    eventListener.addEventToSubmitButton(onSubmitScore);

  } else if (hasLost()) {
    UI.showAlertForLosingCondition(model.getSecretCode(), model.getDifficulty());
    eventListener.addEventListenerToCloseButton(onGameOver);
  
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
