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

/*
abstract class BaseHighscoreService implements ExampleInterface {
  // common functionality
}

class HighscoreServiceAPI extends BaseHighscoreService {
  // send it to backend server
  addScore() {
    // send to server
  }
}

class HighscoreServiceInFile extends BaseHighscoreService {
  // save to file
  addScore();
}

class HighscoreServiceLocalStorage extends BaseHighscoreService {
  // save to local storage
  addScore();
}

// DEVELOPER A
class HighscoreService {
  //
  // common functionality
  // sortData
  // printData
  //
  //-----------------------------
  // send/save
  sendToServer(highscoreData);
  saveToFile(highscoreData);
}

// DEVELOPER B
1) Extends HighscoreService
class LocalStorageService extends HighscoreService {
  addScore() {
    // save in local storage
  }
}

DEVELOPER A has code in his project
DEVELOPER B to write extended version of that code
*/