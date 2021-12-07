import { NUM_OF_NUMBERS } from "../config.js";

class OccurrenceStatusView {
  renderOccurrenceStatus(currentTurn, occurrenceStatus) {
    // 2 1 1
    // black black white red
    console.log("Render the status");
    console.log(currentTurn, occurrenceStatus);
    const element = document.querySelector(
      `.game-try div[data-turn="${currentTurn}"]`
    )[0];
    console.log(element);
    for (let i = 0; i < NUM_OF_NUMBERS; i++) {
      let statusElement = element.querySelector(
        `data-occurrence-status="${i}"]`
      );
      statusElement.style.backgroundColor("red");
    }
  }
}

export default new OccurrenceStatusView();
