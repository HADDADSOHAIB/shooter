const axios = require('axios');
const scoreService = require('../src/services/scoreService')


test('should fetch users', () => {
  const users = [{name: 'Bobo', score: 10 }, {name: 'Boba', score: 20 }];
  const resp = {data: users};
  return scoreService.getScores().then(data => expect(data).toEqual(resp));
});

test('should create new score', () => {
  const newScore = {user: 'Bobo', score: 10 };
  return scoreService.createNewScore('Bobo', 10).then(data => expect(data).toEqual({data: newScore}));
});