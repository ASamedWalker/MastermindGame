import { CODE_LENGTH } from "../config.js";
class OccurrenceStatusView {
  #getColorFlags(occurrenceStatus) {
    /*
    {inPlaceCount: 1, changedPlaceCount: 2, wrongCount: 1}
    "red white white black "
    "red white white black".split(" ");
    [0] = red
    [1] = white
    [2] = white
    [3] = black
    */
    const red = "red ".repeat(occurrenceStatus.inPlaceCount);
    const white = "white ".repeat(occurrenceStatus.changedPlaceCount);
    const black = "black ".repeat(occurrenceStatus.wrongCount);
    return (red + white + black).trim().split(" ");
  }

  renderOccurrenceStatus(currentTurn, occurrenceStatus) {
    console.log(occurrenceStatus);
    const colorFlags = this.#getColorFlags(occurrenceStatus);
    const element = document.querySelector(
      `.game-try [data-turn="${currentTurn}"]`
    );

    for (let i = 0; i < CODE_LENGTH; i++) {
      const statusElement = element.querySelector(
        `[data-occurrence-status="${i}"]`
      );

      statusElement.style.backgroundColor = colorFlags[i];
    }
  }
}

export default new OccurrenceStatusView();
