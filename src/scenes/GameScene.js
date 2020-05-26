/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';
import BulletGroup from '../objects/BulletGroup';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.lastFire = 0;
    this.enemyBullets = [];
    this.enemyFire = [];
    this.enemyEnabled = [];
    this.score = 10;
    this.level = 1;
    this.lives = 3;
  }

  create() {
    this.name = this.sys.game.globals.name;

    this.add.image(400, 300, 'ground');
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(100, 500, 'shield');
    this.platforms.create(800, 400, 'shield');

    this.player = this.physics.add.sprite(400, 550, 'player');
    this.physics.add.collider(this.player, this.platforms);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.bulletGroup = new BulletGroup(this, 'bullet');

    this.physics.add.collider(this.player, this.bulletGroup);

    this.physics.add.collider(
      this.platforms,
      this.bulletGroup,
      this.bulletHitPlatform,
      null,
      this,
    );

    this.enemies = this.physics.add.group({
      key: 'enemy',
      repeat: 7,
      setXY: { x: 100, y: 60, stepX: 100 },
    });

    this.enemies = this.enemies.children.getArray();

    this.enemies.forEach((enemy, i) => {
      enemy.setData('index', i);
      this.enemyBullets.push(new BulletGroup(this, 'bomb'));
      enemy.disableBody(true, true);
      this.enemyEnabled.push(false);
    });

    this.spawnEnemies();

    this.enemyBullets.forEach((enemyBullet) => {
      this.physics.add.collider(
        this.platforms,
        enemyBullet,
        this.bulletHitPlatform,
        null,
        this,
      );
    });

    this.enemies.forEach((enemy) => {
      this.physics.add.collider(
        enemy,
        this.bulletGroup,
        this.hitEnemy,
        null,
        this,
      );
    });

    this.enemyBullets.forEach((enemyBullet) => {
      this.physics.add.collider(
        this.player,
        enemyBullet,
        this.hitEnemyFire,
        null,
        this,
      );
    });

    this.scoreText = this.add.text(5, 10, 'score: 10', {
      fontSize: '25px',
      fill: '#000',
    });

    this.add.text(200, 10, `${this.name}`, {
      fontSize: '25px',
      fill: '#000',
    });

    this.livesText = this.add.text(500, 10, 'lives: 3', {
      fontSize: '25px',
      fill: '#000',
    });

    this.levelText = this.add.text(650, 10, 'level: 1', {
      fontSize: '25px',
      fill: '#000',
    });
  }

  update(time) {
    if (this.cursors.left.isDown && this.player.x > 15) {
      this.player.setVelocityX(-360);
    } else if (this.cursors.right.isDown && this.player.x < 785) {
      this.player.setVelocityX(360);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown && this.player.y > 15) {
      this.player.setVelocityY(-160);
    } else if (this.cursors.down.isDown && this.player.y < 585) {
      this.player.setVelocityY(+160);
    } else {
      this.player.setVelocityY(0);
    }

    if (this.cursors.space.isDown && time > this.lastFire) {
      this.lastFire = time + 100;
      this.bulletGroup.fireBullet(this.player.x, this.player.y - 20, -800);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  bulletHitPlatform(pl, bl) {
    bl.setActive(false);
    bl.setVisible(false);
  }

  hitEnemy(enemy, bl) {
    enemy.disableBody(true, true);

    bl.setActive(false);
    bl.setVisible(false);

    const i = enemy.getData('index');
    this.resetFiringEnemies(i);

    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);

    if (!this.enemyEnabled.some((item) => item)) {
      this.level += 1;
      this.spawnEnemies();
      this.levelText.setText(`level: ${this.level}`);
    }
  }

  fireEnemyBullets() {
    this.enemyFire = [];
    this.enemyBullets.forEach((enemyBullet, i) => {
      if (this.enemyEnabled[i]) {
        const timer = window.setInterval(() => {
          enemyBullet.fireBullet(
            this.enemies[i].x,
            this.enemies[i].y + 20,
            300 + 100 * Math.floor(this.level / 10),
          );
        }, 3000 - 50 * Math.floor(this.level / 5) + 30 * (i + 2));
        this.enemyFire.push(timer);
      } else {
        this.enemyFire.push({});
      }
    });
  }

  resetFiringEnemies(i) {
    this.enemyEnabled[i] = false;
    clearInterval(this.enemyFire[i]);
  }

  hitEnemyFire(player, bomb) {
    if (bomb.active && this.lives === 0) {
      this.physics.pause();
      player.setTint(0xff0000);
      this.sys.game.globals.score = this.score;
      this.scene.start('Score');
    } else if (bomb.active) {
      bomb.setActive(false);
      bomb.setVisible(false);
      this.lives -= 1;
      this.livesText.setText(`lives: ${this.lives}`);
    }
  }

  spawnEnemies() {
    for (let i = 0; i < Math.max(2, Math.min(this.level, 7)); i += 1) {
      this.enemyEnabled[i] = true;
    }

    this.enemies.forEach((enemy, i) => {
      if (this.enemyEnabled[i]) {
        enemy.enableBody(true, enemy.x, enemy.y, true, true);
      }
    });

    this.fireEnemyBullets();
  }
}