import { default as boardView } from "./views/BoardView.js";
import { default as turnView } from "./views/TurnView.js";
import { default as controlView } from "./views/ControlView.js";
import { default as alertView } from "./views/AlertView.js";

class UI {
  #boardView = null;
  #turnView = null;
  #controlView = null;
  #alertView = null;

  constructor(boardView, turnView, controlView, alertView) {
    this.#boardView = boardView;
    this.#turnView = turnView;
    this.#controlView = controlView;
    this.#alertView = alertView;
  }

  renderBoard() {
    this.#boardView.renderBoard();
  }

  updateTurn(currentTurn, isActive = true) {
    this.#turnView.updateTurn(currentTurn, isActive);
  }

  // render controls
  renderControls() {
    this.#controlView.renderControls();
  }

  // add events to controls
  addEventsToControls(clickHandler) {
    this.#controlView.addEventsToControls(clickHandler);
  }

  // show alert for winning condition
  showAlertForWinningCondition() {
    this.#alertView.showAlertForWinningCondition();
  }
}
export default new UI(boardView, turnView, controlView, alertView);
