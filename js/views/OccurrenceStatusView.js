import { NUM_OF_NUMBERS } from "../config.js";
class OccurrenceStatusView {
  #getColorFlags(occurrenceStatus) {
    const red = "red ".repeat(occurrenceStatus.inPlaceCount);
    const white = "white ".repeat(occurrenceStatus.changedPlaceCount);
    const black = "black ".repeat(occurrenceStatus.wrongCount);
    return (red + white + black).trim().split(" ");
  }

  renderOccurrenceStatus(currentTurn, occurrenceStatus) {
    const colorFlags = this.#getColorFlags(occurrenceStatus);
    const element = document.querySelector(
      `.game-try [data-turn="${currentTurn - 1}"]`
    );
    console.log(element);
    for (let i = 0; i < NUM_OF_NUMBERS; i++) {
      let statusElement = element.querySelector(
        `[data-occurrence-status="${i}"]`
      );
      console.log(statusElement);
      statusElement.style.backgroundColor = colorFlags[i];
    }
  }
}

export default new OccurrenceStatusView();
