import { GAME_DIFFICULTY } from "../config.js.js";
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

    const {inPlaceCount, changedPlaceCount, wrongCount} = occurrenceStatus;
    const red = "red ".repeat(inPlaceCount);
    const white = "white ".repeat(changedPlaceCount);
    const black = "black ".repeat(wrongCount);
    return (red + white + black).trim().split(" ");
  }

  renderOccurrenceStatus(currentTurn, occurrenceStatus, difficulty) {
    console.log(occurrenceStatus);
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
