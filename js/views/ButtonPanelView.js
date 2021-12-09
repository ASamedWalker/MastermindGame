import { MAX_NUMBER, MIN_NUMBER } from "../Config.js";

class ButtonPanelView {
  #element = document.querySelector(".number-picker-view");


  renderButtonPanel() {
    this.#element.innerHTML = "";

    let html = "";

    html += this.getHTMLForNumberPickerButtons();
    html += this.getHTMLForControlButtons();

    // result HTML insert in DOM
    this.#element.insertAdjacentHTML("beforeend", html);
  }

  getHTMLForNumberPickerButtons() {
    let html = "";
    for (let i = 0; i <= MAX_NUMBER; i++) {
      html += `<button class="choice-btn" data-selected-number="${i}">${i}</button>`;
    }

    return html;
  }

  getHTMLForControlButtons() {
    // Undo Button | Submit Button for guessed code (4 numbers)
    let html =
      '<button class="control-btn" data-control="undo">&#9100; Undo</button>';
    html +=
      '<button class="control-btn" data-control="submit">&#9094; Submit</button>';

    return html;
  }
}

export default new ButtonPanelView();
