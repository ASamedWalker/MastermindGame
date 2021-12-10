import { default as boardView } from "./views/BoardView.js";
import { default as turnView } from "./views/TurnView.js";
import { default as buttonPanelView } from "./views/ButtonPanelView.js";
import { default as codeCombinationView } from "./views/CodeCombinationView.js";
import { default as occurrenceStatusView } from "./views/OccurrenceStatusView.js";
import { default as highscoreView } from "./views/HighscoreView.js";
import { default as alertView } from "./views/AlertView.js";

class UI {
  #boardView = null;
  #turnView = null;
  #buttonPanelView = null;
  #codeCombinationView = null;
  #occurrenceStatusView = null;
  #highscoreView = null;
  #alertView = null;

  constructor(
    boardView,
    turnView,
    buttonPanelView,
    codeCombinationView,
    occurrenceStatusView,
    highscoreView,
    alertView
  ) {
    this.#boardView = boardView;
    this.#turnView = turnView;
    this.#buttonPanelView = buttonPanelView;
    this.#codeCombinationView = codeCombinationView;
    this.#occurrenceStatusView = occurrenceStatusView;
    this.#highscoreView = highscoreView;
    this.#alertView = alertView;
  }

  displayGame() {
    const wrapper = document.querySelector('.game-wrapper');
    const menu = document.querySelector('.game-menu');
    wrapper.style.display = "block";
    menu.style.display = "none"; 
  }

  renderBoard(difficulty) {
    this.#boardView.renderBoard(difficulty);
  }

  updateTurn(currentTurn, isActive = true) {
    this.#turnView.updateTurn(currentTurn, isActive);
  }

  // render controls
  renderButtonPanel(difficulty) {
    this.#buttonPanelView.renderButtonPanel(difficulty);
  }

  renderCodeCombination(currentTurn, guessedCode, difficulty) {
    this.#codeCombinationView.renderCodeCombination(currentTurn, guessedCode, difficulty);
  }

  renderOccurrenceStatus(currentTurn, occurrenceStatus, difficulty) {
    this.#occurrenceStatusView.renderOccurrenceStatus(
      currentTurn,
      occurrenceStatus,
      difficulty
    );
  }

  renderHighscores(highscores) {
    this.#highscoreView.renderHighscores(highscores);
  }

  showAlertOnInvalidInput(difficulty) {
    this.#alertView.showAlertOnInvalidInput(difficulty);
  }

  // show alert for winning condition
  showAlertForWinningCondition() {
    this.#alertView.showAlertForWinningCondition();
  }

  showAlertForLosingCondition(secretCode, difficulty) {
    this.#alertView.showAlertForLosingCondition(secretCode, difficulty);
  }
  
  showModalForGameRules() {
    this.#alertView.showModalForGameRules();
  }

  showModalForCredits() {
    this.#alertView.showModalForCredits();
  }

  showModalForHighscores(highscores) {
    this.#alertView.showModalForHighscores(highscores);
  }

  toggleAlert() {
    this.#alertView.toggleAlert();
  }
}
export default new UI(
  boardView,
  turnView,
  buttonPanelView,
  codeCombinationView,
  occurrenceStatusView,
  highscoreView,
  alertView
);
