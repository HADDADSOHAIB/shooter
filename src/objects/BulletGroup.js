import 'phaser';
import Bullet from './Bullet';

export default class BulletGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene, image) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 100,
      key: image,
      active: false,
      visible: false,
      classType: Bullet,
    });
  }

  fireBullet(x, y, speed) {
    const bullet = this.getFirstDead(false);

    if (bullet) {
      bullet.fire(x, y, speed);
    }
  }
}
