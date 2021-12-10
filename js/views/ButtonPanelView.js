import { GAME_DIFFICULTY } from "../Config.js";

class ButtonPanelView {
  #element = document.querySelector(".number-picker-view");

  renderButtonPanel(difficulty) {
    this.#element.innerHTML = "";

    let html = "";

    html += this.getHTMLForNumberPickerButtons(difficulty);
    html += this.getHTMLForControlButtons();

    // result HTML insert in DOM
    this.#element.insertAdjacentHTML("beforeend", html);
  }

  getHTMLForNumberPickerButtons(difficulty) {
    let html = "";
    for (let i = 0; i <= GAME_DIFFICULTY[difficulty].maxNumber; i++) {
      html += `<button class="choice-btn" data-selected-number="${i}">${i}</button>`;
    }

    return html;
  }

  getHTMLForControlButtons() {
    // Undo Button | Submit Button for guessed code (4 numbers)
    let html = `
      <button class="control-btn" data-control="undo">Undo</button>
      <button class="control-btn" data-control="submit">Submit</button>
    `;

    return html;
  }
}

export default new ButtonPanelView();
