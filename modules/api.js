import Scores from './scores.js';

const display = (gameData) => {
  const gameScore = document.querySelector('.show-score');
  gameScore.innerHTML = '';
  gameData.sort((a, b) => a.score - b.score);
  const displayList = gameData
    .map((list) => `<p class="score-list">${list.user} : ${list.score} </p>`)
    .join('');
  gameScore.innerHTML = displayList;
};

const addScore = async (user, score) => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseUrl}games/`;
  const gameID = 'TxZJWGnmYnPWmpSwkqWN';
  const payloadObject = new Scores(user, score);
  const response = await fetch(`${url}${gameID}/scores/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(payloadObject),
  });
  const gameData = await response.json();
  return gameData;
};

const retrieveScores = async () => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseUrl}games/`;
  const gameID = 'TxZJWGnmYnPWmpSwkqWN';
  const response = await fetch(`${url}${gameID}/scores/`);
  const gameData = await response.json();
  if (response.ok) {
    display(gameData.result);
  }
};

export { addScore, retrieveScores };
