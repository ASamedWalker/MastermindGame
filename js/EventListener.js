class EventListener {
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
