import { default as boardView } from "./views/BoardView.js";
import { default as turnView } from "./views/TurnView.js";
import { default as buttonPanelView } from "./views/ButtonPanelView.js";
import { default as codeCombinationView } from "./views/CodeCombinationView.js";
import { default as occurrenceStatusView } from "./views/OccurrenceStatusView.js";
import { default as alertView } from "./views/AlertView.js";

class UI {
  #boardView = null;
  #turnView = null;
  #buttonPanelView = null;
  #codeCombinationView = null;
  #occurrenceStatusView = null;
  #alertView = null;

  constructor(
    boardView,
    turnView,
    buttonPanelView,
    codeCombinationView,
    occurrenceStatusView,
    alertView
  ) {
    this.#boardView = boardView;
    this.#turnView = turnView;
    this.#buttonPanelView = buttonPanelView;
    this.#codeCombinationView = codeCombinationView;
    this.#occurrenceStatusView = occurrenceStatusView;
    this.#alertView = alertView;
  }

  renderBoard() {
    this.#boardView.renderBoard();
  }

  updateTurn(currentTurn, isActive = true) {
    this.#turnView.updateTurn(currentTurn, isActive);
  }

  // render controls
  renderButtonPanel() {
    this.#buttonPanelView.renderButtonPanel();
  }

  // add events to controls
  addEventsToButtonPanel(clickHandler) {
    this.#buttonPanelView.addEventsToButtonPanel(clickHandler);
  }

  renderCodeCombination(currentTurn, guessedCode) {
    this.#codeCombinationView.renderCodeCombination(currentTurn, guessedCode);
  }

  renderOccurrenceStatus(currentTurn, occurrenceStatus) {
    this.#occurrenceStatusView.renderOccurrenceStatus(
      currentTurn,
      occurrenceStatus
    );
  }

  // show alert for winning condition
  showAlertForWinningCondition() {
    this.#alertView.showAlertForWinningCondition();
  }
}
export default new UI(
  boardView,
  turnView,
  buttonPanelView,
  codeCombinationView,
  occurrenceStatusView,
  alertView
);
