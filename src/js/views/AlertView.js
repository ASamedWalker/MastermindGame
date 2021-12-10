import { MAX_TRIES, GAME_DIFFICULTY } from "../config.js.js";
import { default as highscoreView } from "./HighscoreView.js";

class AlertView {
  #element = document.querySelector(".alert-view");
  #overlay = document.querySelector(".overlay");
  #highscoreView = null;

  constructor(highscoreView) {
    this.#highscoreView = highscoreView;
  }

  showModalForGameRules() {
    this.#element.innerHTML = "";

    const html = `
      <div class="game-rules">
        <button class="btn-close-alert">X</button>
        <h1>Game Rules</h1>
        <p>
          Mastermind is a two-sided code-solving game played by a computer(codemaker) and a user/player(codebreaker). 
          Using a series of randomly generated numbers ranging from (0 - 7), the codemaker chooses a pattern code and conceals it in their gameplay area. 
          The codebreaker then begins trying to break the code by inserting various number combinations for each turn, hoping to break it within 10 chances. 
          In turn, the codemaker responds with feedback telling the codebreaker how close they are to winning. 
          At the start of the game, the player chooses the level of difficulty he/she prefers.
        </p>
        <p>
          Then the player clicks the new game button. 
          Once the game pops up, the player now has the opportunity to interact with the game by attempting to input a code to break the code set by the codemaker. 
          The codemaker then gives feedback at the end of each attempt made by the codebreaker. The feedback provided by the codemaker would be responses like
          The player had to guess a correct number
          The player had guessed a correct number and its correct location
          The player’s guess was incorrect.
        </p>
        <p>
          This response would be substituted with two flag which represent the color red, white, and flags in the game. 
          Each red flag would correspond to the feedback the player had guess a correct number and it’s correct location. 
          Each white flag corresponds to the feedback the player had guessed a correct number. 
          Each black flag would correspond to feedback that the player’s guess was incorrect.
        </p>
      </div>
    `;

    this.#element.insertAdjacentHTML("afterbegin", html);
    this.toggleAlert();
  }

  showModalForCredits() {
    this.#element.innerHTML = "";

    const html = `
      <div class="credits">
        <button class="btn-close-alert">X</button>
        <h1>Credits</h1>
        <p>
         About Abdul Samed Walker
        </p>
      </div>
    `;

    this.#element.insertAdjacentHTML("afterbegin", html);
    this.toggleAlert();
  }

  showModalForHighscores(highscores) {
    this.#element.innerHTML = "";

    this.#highscoreView.renderHighscores(highscores);

    this.toggleAlert();
  }

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

  showAlertForLosingCondition(secretCode, difficulty) {
    this.#element.innerHTML = "";
    let html = `
      <button class="btn-close-alert">X</button>
      <p class="message">Sorry! You didn't break the code!</p>
      <p class="message">Secret code was:</p>
      <div class="secret-container">`;

    for (let i = 0; i < GAME_DIFFICULTY[difficulty].codeLength; i++) {
      html += `<div class="choice choice-number"><span class="number">${secretCode[i]}</span></div>`;
    }

    html += "</div>";
    this.#element.insertAdjacentHTML("afterbegin", html);

    this.toggleAlert();
  }

  showAlertOnInvalidInput(difficulty) {
    this.#element.innerHTML = "";

    // render HTML
    const html = `<button class="btn-close-alert">X</button><p class="message">Code length needs to be ${GAME_DIFFICULTY[difficulty].codeLength}!</p>`;
    this.#element.insertAdjacentHTML("afterbegin", html);

    this.toggleAlert();
  }

  // toggle (show/hide alert)
  toggleAlert() {
    this.#element.classList.toggle("hidden");
    this.#overlay.classList.toggle("hidden");
  }
}

export default new AlertView(highscoreView);
