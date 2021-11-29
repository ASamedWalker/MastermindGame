import { default as boardView } from "./views/BoardView.js";
import { default as turnView } from "./views/TurnView.js";

class UI {
  #boardView = null;
  #turnView = null;

  constructor(boardView, turnView) {
    this.#boardView = boardView;
    this.#turnView = turnView;
  }

  renderBoard() {
    this.#boardView.renderBoard();
  }

  updateTurn(currentTurn, isActive = true) {
    this.#turnView.updateTurn(currentTurn, isActive);
  }
}
export default new UI(boardView, turnView);