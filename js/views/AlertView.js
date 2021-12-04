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

    // toggle alert
    this.toggleAlert();
  }

  // toggle (show/hide alert)
  toggleAlert() {
    this.#element.classList.toggle("hidden");
    this.#overlay.classList.toggle("hidden");
  }
}

export default new AlertView();
