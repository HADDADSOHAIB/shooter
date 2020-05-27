/* eslint-disable prefer-promise-reject-errors */
const scoreService = require('../src/services/scoreService');

jest.mock('../src/services/scoreService');

describe('Score Service tests', () => {
  scoreService.getScores.mockResolvedValue({
    data: {
      result: [{ name: 'Bobo', score: 10 }, { name: 'Boba', score: 20 }],
    },
  });

  scoreService.createNewScore.mockImplementation((name, score) => new Promise((resolve, reject) => {
    if (!name) {
      reject({
        message: 'You need to provide a valid user for the score',
      });
    } else if (!score) {
      reject({
        message: 'You need to provide a valid score for the leaderboard',
      });
    } else {
      resolve({
        message: 'Leaderboard score created correctly.',
      });
    }
  }));

  test('should fetch users', () => {
    scoreService.getScores().then(res => expect(res).toEqual({
      data: {
        result: [{ name: 'Bobo', score: 10 }, { name: 'Boba', score: 20 }],
      },
    }));
  });

  test('should create new score', () => {
    scoreService.createNewScore('Bobo', 10).then(data => expect(data).toEqual(
      {
        message: 'Leaderboard score created correctly.',
      },
    ));
  });

  test('When a name is not giving, it should reject', () => {
    scoreService.createNewScore().catch(err => expect(err).toEqual(
      {
        message: 'You need to provide a valid user for the score',
      },
    ));
  });

  test('When a score is not giving, it should reject', () => {
    scoreService.createNewScore('bob').catch(err => expect(err).toEqual(
      {
        message: 'You need to provide a valid score for the leaderboard',
      },
    ));
  });
});
