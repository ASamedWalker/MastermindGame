import {capitalize, formatTime} from '../helpers.js';
import {MAX_ENTRIES} from '../config.js';

class HighscoreView {
  #element = document.querySelector('.high-score-display');

  renderHighscores(highscores) {
    this.#element.innerHTML = '';

    let html = `
    <h2>Top ${MAX_ENTRIES} High Scores</h2>
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

    html += '</ul>';

    this.#element.insertAdjacentHTML('afterbegin', html);
  }
}

export default new HighscoreView();