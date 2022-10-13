import './style.css';
import { addScore, retrieveScores } from '../modules/api.js';

const refresh = document.querySelector('#refresh');
const form = document.querySelector('#form');
// const scoreDisplay = document.querySelector('.score-display');
// scoreDisplay.appendChild('show-score');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameValue = document.querySelector('.user').value;
  const scoreValue = document.querySelector('.score').value;
  addScore(nameValue, scoreValue);
  retrieveScores();
  document.querySelector('.user').value = '';
  document.querySelector('.score').value = '';
});

refresh.addEventListener('click', retrieveScores);
