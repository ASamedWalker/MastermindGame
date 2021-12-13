import { MIN_NUMBER, GAME_DIFFICULTY } from "./Config.js";

class CodeMaker {
  async fetchRandomNumbers(difficulty) {
    const {codeLength, maxNumber} = GAME_DIFFICULTY[difficulty];
    const apiUrl = `https://www.random.org/integers/?num=${codeLength}&min=${MIN_NUMBER}&max=${maxNumber}&col=1&base=10&format=plain&rnd=new`;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
      });
  
      const result = await response.text();
      const randomNumbers = result.split("\n").slice(0, codeLength);
      if (randomNumbers.length > 0) {
        return randomNumbers;
      }
    } catch (e) {
      console.log("There has been an error at " + e);
    }
    
    return this.#generateRandomNumbers();
  }

  #generateRandomNumbers() {
    return ['0', '1', '2', '3'];
  }
}
export default new CodeMaker();
