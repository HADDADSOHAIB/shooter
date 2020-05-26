/* eslint-disable import/no-unresolved */
import Axios from 'axios';

const apiId = 'UHEy4KH4wg2ikIikvPPZ';
const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const createNewScore = (name, score) => Axios.post(`${apiEndPoint}${apiId}/scores`, {
  user: name,
  score: parseInt(score, 10),
});

const getScores = () => Axios.get(`${apiEndPoint}${apiId}/scores`);

export { createNewScore, getScores };
