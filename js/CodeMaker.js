import { MIN_NUMBER, MAX_NUMBER, CODE_LENGTH } from "./Config.js";

class CodeMaker {
  async fetchRandomNumbers() {
    const apiUrl = `https://www.random.org/integers/?num=${CODE_LENGTH}&min=${MIN_NUMBER}&max=${MAX_NUMBER}&col=1&base=10&format=plain&rnd=new`;
    const response = await fetch(apiUrl, {
      method: "GET",
    });

    const result = await response.text();
    const randomSequence = result.split("\n").slice(0, CODE_LENGTH);
    const randomNumbers = randomSequence.map((item) => {
      return parseInt(item, 10);
    });

    return randomNumbers;
  }
}
export default new CodeMaker();
