import { MAX_TRIES, NUM_OF_NUMBERS } from "../Config.js";

class BoardView {
  #element = document.querySelector(".game-board-view");

  // render a board
  renderBoard() {
    //-----------------------------------------
    //loop through max number of tries
    //  html for number sequence
    //  html for occurrence flags
    //  add HTML to the DOM
    //endloop
    for (let i = 0; i < MAX_TRIES; i++) {
      const html = `
            <div class="game-try" data-turn="${i + 1}">
                <div class="choice-row">
                    ${this.getHTMLForChoices()}
                </div>

                <div class="occurrence-status-row" data-turn="${i + 1}">
                    ${this.getHTMLForOccurrenceStatusFlags()}
                </div>
            </div>
            `;
      this.#element.insertAdjacentHTML("afterbegin", html);
    }
  }

  //create and return html for textual or graphic representation of number sequence
  //-------------------------------------------------------------
  getHTMLForChoices() {
    let html = "";
    for (let i = 0; i < NUM_OF_NUMBERS; i++) {
      html += `<div class="choice choice-number" data-choice="${i}"><span class="number"></span></div>`;
    }
    return html;
  }

  //create and return html for occurrence flags (renders only once the HTML)
  //-------------------------------------------------------------
  getHTMLForOccurrenceStatusFlags() {
    let html = "";
    for (let i = 0; i < NUM_OF_NUMBERS; i++) {
      html += `<div class="choice occurrence-status-flag" data-occurrence-status="${i}"></div>`;
    }
    return html;
  }
}

export default new BoardView();
