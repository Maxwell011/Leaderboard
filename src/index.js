import './style.css';
import { addScore, retrieveScores } from '../modules/api.js';

const refresh = document.querySelector('#refresh');
const form = document.querySelector('#form');
const message = document.querySelector('.message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameValue = document.querySelector('.user').value;
  const scoreValue = document.querySelector('.score').value;
  addScore(nameValue, scoreValue);
  retrieveScores();

  if (nameValue === '' || scoreValue === '') {
    message.innerText = 'ERROR!! Please add valid user and score';
    message.style.display = 'block';
    message.style.color = 'bisque';
    message.className = 'error';
    setTimeout(() => {
      message.style.display = 'none';
    }, 6000);
  } else {
    message.innerText = 'SUCCESSFULLY ADDED!!, click "Refresh" to show';
    message.style.color = 'bisque';
    message.style.display = 'block';
    message.className = 'success';
    setTimeout(() => {
      message.style.display = 'none';
    }, 6000);
  }

  document.querySelector('.user').value = '';
  document.querySelector('.score').value = '';
});

refresh.addEventListener('click', retrieveScores);
