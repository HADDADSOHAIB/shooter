import 'phaser';

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, image) {
    super(scene, x, y, image);
  }

  fire(x, y, speed) {
    this.body.reset(x, y);

    this.setActive(true);
    this.setVisible(true);

    this.setVelocityY(speed);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (this.y <= 0 || this.y >= 600) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}
