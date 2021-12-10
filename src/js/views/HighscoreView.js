import {capitalize, formatTime} from '../helpers.js';
import {MAX_ENTRIES} from '../config.js.js';

class HighscoreView {
  #element = document.querySelector('.alert-view');

  renderHighscores(highscores) {
    this.#element.innerHTML = '';

    let html = `
      <div class="high-score-display">
      <h1>Top ${MAX_ENTRIES} High Scores</h1>
      <button class="btn-close-alert">X</button>
      <ul class="high-score-container">
    `;

    highscores.forEach((item, i) => {
      html += `
        <li class="high-score-item">
          <span>${i + 1}</span>
          <span class="high-score-username">${item.playerName}</span>
          <span class="high-score-moves">${item.numOfTries} tries</span> 
          <span class="high-score-time">${formatTime(+item.duration)}</span>
        </li>
      `;        
    });

    html += '</ul></div>';

    this.#element.insertAdjacentHTML('afterbegin', html);
  }
}

export default new HighscoreView();