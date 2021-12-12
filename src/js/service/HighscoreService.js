import * as model from '../Model.js'
import { LOCAL_STORAGE_KEY, MAX_ENTRIES } from "../config.js";

class HighscoreService {
  constructor() {
    const highscores = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(highscores)
    if (null !== highscores) {
      model.setHighscores(JSON.parse(highscores));
    }
  }

  clearHighscores() {
    localStorage.clear(LOCAL_STORAGE_KEY);
  }

  addScore(highscoreData) {
    model.getHighscores().push(highscoreData);
    this.#sortHighScores();
    model.setHighscores(this.#sliceHighscores());
    this.#storeHighscore();
  }

  #sliceHighscores() {
    return model.getHighscores().slice(0, MAX_ENTRIES);
  }

  #sortHighScores() {
    return model.getHighscores().sort((a, b) => {
      if (a.numOfTries > b.numOfTries) return 1;
      if (a.numOfTries < b.numOfTries) return -1;
      if (a.duration > b.duration) return 1;
      if (a.duration < b.duration) return -1;
    });
  }

  #storeHighscore() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(model.getHighscores()));
  }

}

export default new HighscoreService();
