class EventListener {

  addEventListenerForNewGame(clickHandler) {
    const button = document.querySelector(`[data-menu-item="new-game"]`);
    button.addEventListener("click", () => {
      const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
      clickHandler(difficulty);
    });
  }

  addEventListenersToMenuButtons(clickHandler) {
    const element = document.querySelector(".game-menu");
    const buttons = element.querySelectorAll("button");

    for (let button of buttons) {
      button.addEventListener("click", clickHandler.bind(this, button));
    }
  }

  addEventListenersToPanelButtons(clickHandler) {
    const element = document.querySelector(".number-picker-view");
    const buttons = element.querySelectorAll("button");

    for (let button of buttons) {
      button.addEventListener("click", clickHandler.bind(this, button));
    }
  }

  addEventListenerToCloseButton(clickHandler) {
    const element = document.querySelector(".alert-view");
    element
      .querySelector(".btn-close-alert")
      .addEventListener("click", clickHandler);
  }

  addEventToSubmitButton(clickHandler) {
    const element = document.querySelector(".alert-view");
    element
      .querySelector(".btn-submit-highscore")
      .addEventListener("click", () => {
        const playerName = document.getElementById("playerName").value;
        clickHandler(playerName);
      });
  }
}

export default new EventListener();
