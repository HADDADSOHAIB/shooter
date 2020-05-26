import 'phaser';
import config from '../config/config';
import Button from '../objects/Button';

export default class WelcomeManu extends Phaser.Scene {
  constructor() {
    super('Name');
    this.name = '';
  }

  create() {
    this.add.image(400, 300, 'ground');
    this.playButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Play', 'Game');

    this.nameText = this.add.text(120, 180, 'Enter your name: (player)', {
      fontSize: '25px',
      fill: '#000',
    });

    this.input.keyboard.on('keydown', (e) => {
      if (e.key === 'Backspace' && this.name.length !== 0) {
        this.name = this.name.slice(0, this.name.length - 1);
        this.nameText.setText(`Enter your name: ${this.name}`);
        this.updateGlobalName(this.name);
      } else if (
        e.key !== 'Backspace'
        && e.key !== 'Enter'
        && e.key !== 'Shift'
      ) {
        this.name += e.key;
        this.nameText.setText(`Enter your name: ${this.name}`);
        this.updateGlobalName(this.name);
      }
    });
  }

  updateGlobalName(name) {
    if (name === '') {
      this.sys.game.globals.name = 'player';
    } else {
      this.sys.game.globals.name = name;
    }
  }
}
