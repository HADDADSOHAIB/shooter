import 'phaser';
// import AwaitLoaderPlugin from 'phaser3-rex-plugins/plugins/awaitloader-plugin.js';
 
export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  // plugins: {
  //   global: [{
  //     key: 'rexAwaitLoader',
  //     plugin: AwaitLoaderPlugin,
  //     start: true
  //   }],
  // }
};
