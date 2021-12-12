import { GAME_DIFFICULTY } from "../config.js";
class OccurrenceStatusView {
  #getColorFlags(occurrenceStatus) {
    const { inPlaceCount, changedPlaceCount, wrongCount } = occurrenceStatus;
    const red = "red ".repeat(inPlaceCount);
    const white = "white ".repeat(changedPlaceCount);
    const black = "black ".repeat(wrongCount);
    return (red + white + black).trim().split(" ");
  }

  renderOccurrenceStatus(currentTurn, occurrenceStatus, difficulty) {
    const colorFlags = this.#getColorFlags(occurrenceStatus);
    const element = document.querySelector(
      `.game-try [data-turn="${currentTurn}"]`
    );

    for (let i = 0; i < GAME_DIFFICULTY[difficulty].codeLength; i++) {
      const statusElement = element.querySelector(
        `[data-occurrence-status="${i}"]`
      );

      statusElement.style.backgroundColor = colorFlags[i];
    }
  }
}

export default new OccurrenceStatusView();
