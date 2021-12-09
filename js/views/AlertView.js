import { CODE_LENGTH, MAX_TRIES } from "../config.js";
class AlertView {
  #element = document.querySelector(".alert-view");
  #overlay = document.querySelector(".overlay");

  // show alert for winning case
  showAlertForWinningCondition() {
    this.#element.innerHTML = "";

    // render HTML
    const html = `
      <p class="message">You broke the secret code!</p>
      <label for="name">Input your name:</label>
      <input type="text" id="playerName" />
      <button class="btn-submit-highscore">Submit</button>
    `;
    this.#element.insertAdjacentHTML("afterbegin", html);

    this.toggleAlert();
  }

  showAlertForLosingCondition(secretCode) {
    this.#element.innerHTML = "";
    let html = `
      <button class="btn-close-alert">X</button>
      <p class="message">Sorry! You didn't break the code!</p>
      <p class="message">Secret code was:</p>
      <div class="secret-container">`;

    for (let i = 0; i < CODE_LENGTH; i++) {
      html += `<div class="choice choice-number"><span class="number">${secretCode[i]}</span></div>`;
    }

    html += "</div>";
    this.#element.insertAdjacentHTML("afterbegin", html);

    this.toggleAlert();
  }

  showAlertOnInvalidInput() {
    this.#element.innerHTML = "";

    // render HTML
    const html = `<button class="btn-close-alert">X</button><p class="message">Code length needs to be ${CODE_LENGTH}!</p>`;
    this.#element.insertAdjacentHTML("afterbegin", html);

    this.toggleAlert();
  }

  // toggle (show/hide alert)
  toggleAlert() {
    this.#element.classList.toggle("hidden");
    this.#overlay.classList.toggle("hidden");
  }
}

export default new AlertView();
