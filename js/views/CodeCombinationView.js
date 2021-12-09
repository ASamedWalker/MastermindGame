import { MAX_NUMBER, CODE_LENGTH } from "../config.js";

class CodeCombinationView {
  renderCodeCombination(currentTurn, guessedCode) {
    const element = document.querySelector(`[data-turn="${currentTurn}"]`);

    for (let i = 0; i < CODE_LENGTH; i++) {
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
