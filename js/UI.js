import { default as boardView } from "./views/BoardView.js";
import { default as turnView } from "./views/TurnView.js";
import { default as controlView } from "./views/ControlView.js";

class UI {
  #boardView = null;
  #turnView = null;
  #controlView = null;

  constructor(boardView, turnView, controlView) {
    this.#boardView = boardView;
    this.#turnView = turnView;
    this.#controlView = controlView;
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
}
export default new UI(boardView, turnView, controlView);