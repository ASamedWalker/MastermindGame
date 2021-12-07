import { NUM_OF_NUMBERS, MAX_TRIES } from "../config.js";
import { default as boardView } from "./BoardView.js";
class AlertView {
  #element = document.querySelector(".alert-view");
  #overlay = document.querySelector(".overlay");

  // show alert for winning case
  showAlertForWinningCondition() {
    this.#element.innerHTML = "";

    // render HTML
    const html = `
      <p class="message">You broke the secret code!</p>
      <form>
        <label for="name">Input your name:</label>
        <input type="text" id="name" name="name" />
        <button class="btn-submit-highscore">Submit</button>
      </form>
    `;
    this.#element.insertAdjacentHTML("afterbegin", html);
    this.addEventToSubmitButton(this.toggleAlert);
    this.toggleAlert();
  }

  showAlertForLosingCondition(secretCode) {
    this.#element.innerHTML = "";
    let html = `
      <button class="btn-close-alert">X</button>
      <p class="message">Sorry! You didn't break the code!</p>
      <p class="message">Secret code was:</p>
      <div class="secret-container">`;

    for (let i = 0; i < NUM_OF_NUMBERS; i++) {
      html += `<div class="choice choice-number"><span class="number">${secretCode[i]}</span></div>`;
    }

    html += "</div>";
    this.#element.insertAdjacentHTML("afterbegin", html);
    this.addEventToCloseButton(this.toggleAlert);
    this.toggleAlert();
  }

  addEventToCloseButton(clickHandler) {
    this.#element
      .querySelector(".btn-close-alert")
      .addEventListener("click", clickHandler.bind(this));
  }

  addEventToSubmitButton(clickHandler) {
    this.#element
    .querySelector('.btn-submit-highscore')
    .addEventListener("click", clickHandler.bind(this));
  }

  showAlertOnInvalidInput() {
    this.#element.innerHTML = "";

    // render HTML
    const html = `<button class="btn-close-alert">X</button><p class="message">Code length needs to be ${NUM_OF_NUMBERS}!</p>`;
    this.#element.insertAdjacentHTML("afterbegin", html);
    this.addEventToCloseButton(this.toggleAlert);
    this.toggleAlert();
  }

  // toggle (show/hide alert)
  toggleAlert() {
    this.#element.classList.toggle("hidden");
    this.#overlay.classList.toggle("hidden");
  }
}

export default new AlertView(boardView);
