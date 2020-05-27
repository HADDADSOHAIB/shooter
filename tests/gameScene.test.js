
const GameScene = require('../src/scenes/GameScene');

describe('GameScene initiated tests', () => {
  const Game = GameScene.default;
  const game = new Game();

  test('When the game just started, the score should be 10', () => {
    expect(game.score).toBe(10);
  });

  test('When the game just started, the lives should be 3', () => {
    expect(game.lives).toBe(3);
  });

  test('When the game just started, the level should be 1', () => {
    expect(game.level).toBe(1);
  });

  test('When the game just started, the enemy eneabled should be []', () => {
    expect(game.enemyEnabled).toEqual([]);
  });

  test('When the game just started, the enemy fire should be []', () => {
    expect(game.enemyFire).toEqual([]);
  });

  test('When the game just started, the enemy bullets should be []', () => {
    expect(game.enemyBullets).toEqual([]);
  });

  test('When the game just started, the last fire should be 0', () => {
    expect(game.lastFire).toBe(0);
  });
});

// describe('GameScene create tests', () => {
//   const Game = GameScene.default;
//   const game = new Game();

//   test('scene should have a user name', () => {
//     expect(game.name).toBeTruthy();
//   });

//   test('scene should have plateforms', () => {
//     expect(game.platforms).toBeTruthy();
//   });
// });