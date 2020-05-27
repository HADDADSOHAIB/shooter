/* eslint-disable func-names */

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

describe('GameScene create tests', () => {
  const Game = GameScene.default;
  const game = new Game();

  game.fireEnemyBullets = jest.fn();
  game.spawnEnemies = jest.fn(function () {
    this.fireEnemyBullets();
  });

  game.create = jest.fn(function () {
    this.name = 'player';
    this.enemies = [1, 2, 3, 4, 5, 6, 7, 8];
    this.enemyBullets = [1, 2, 3, 4, 5, 6, 7, 8];
    this.enemyEnabled = [1, 2, 3, 4, 5, 6, 7, 8];

    this.spawnEnemies();
  });
  game.create();

  test('When create run, a name should be created', () => {
    expect(game.name).toBeTruthy();
  });

  test('When create run, enemies should be created', () => {
    expect(game.enemies).toBeTruthy();
  });

  test('When create run,8 enemies should be created', () => {
    expect(game.enemies.length).toBe(8);
  });

  test('When create run,8 enemyBullets should be of length 8', () => {
    expect(game.enemyBullets.length).toBe(8);
  });

  test('When create run,8 enemyEnabled should be of length 8', () => {
    expect(game.enemyBullets.length).toBe(8);
  });

  test('When create run,spawn enemies is called', () => {
    expect(game.spawnEnemies.mock.calls.length).toBe(1);
  });

  test('When create run,fire enemies bullets is called', () => {
    expect(game.fireEnemyBullets.mock.calls.length).toBe(1);
  });

  game.resetFiringEnemies = jest.fn(function (i) {
    this.enemyEnabled[i] = false;
  });
  game.hitEnemy = jest.fn(function (i) {
    this.resetFiringEnemies(i);
    this.score += 10;

    if (!this.enemyEnabled.some((item) => item)) {
      this.level += 1;
      this.spawnEnemies();
    }
  });

  game.hitEnemyFire = jest.fn(function () {
    this.lives -= 1;
  });

  test('When the enemy is hit and all of them are disabled, spawn enemies is called', () => {
    game.enemyEnabled = [false, false, true, false, false, false, false, false];
    game.hitEnemy(2);

    expect(game.spawnEnemies.mock.calls.length).toBe(2);
  });

  test('When the enemy is hit, the score is increased by 10', () => {
    const oldScore = game.score;
    game.hitEnemy(2);

    expect(game.score).toBe(oldScore + 10);
  });

  test('When hit enemy run,reset firing enemies is called', () => {
    expect(game.resetFiringEnemies.mock.calls.length).toBe(2);
  });

  test('When the enemy is hit and all of them are disabled, the level is increased by 1', () => {
    const oldlevel = game.level;
    game.enemyEnabled = [false, false, true, false, false, false, false, false];
    game.hitEnemy(2);

    expect(game.level).toBe(oldlevel + 1);
  });

  test('When the enemy hit me, I loose one live', () => {
    const oldLives = game.lives;
    game.hitEnemyFire();
    expect(game.lives).toBe(oldLives - 1);
  });
});
