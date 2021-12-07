import { MAX_NUMBER, NUM_OF_NUMBERS } from "../config.js";

class CodeCombinationView {
  renderCodeCombination(currentTurn, guessedCode) {
    const element = document.querySelector(`[data-turn="${currentTurn}"]`);

    for (let i = 0; i < NUM_OF_NUMBERS; i++) {
      const numberElement = element.querySelector(`[data-choice="${i}"] span`);
      if (guessedCode[i] !== undefined) {
        numberElement.innerHTML = guessedCode[i];
      } else {
        numberElement.innerHTML = "";
      }
    }
  }
}

export default new CodeCombinationView();
