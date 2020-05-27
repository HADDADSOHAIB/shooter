/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';
import { getScores, createNewScore } from '../services/scoreService';

export default class Over extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  async preload() {
    this.name = this.sys.game.globals.name;
    this.score = this.sys.game.globals.score;
  }

  async create() {
    await createNewScore(this.name, this.score);
    this.scores = (await getScores()).data.result;
    this.scores = this.scores.sort((a, b) => b.score - a.score);

    this.add.image(400, 300, 'ground');
    const playButton = this.add.image(650, 100, 'play').setScale(0.4);

    playButton.setInteractive();
    playButton.setTint(0xf3ff33);
    playButton.on('pointerover', () => {
      playButton.setTint(0xff0000);
    });

    playButton.on('pointerout', () => {
      playButton.setTint(0xf3ff33);
    });

    playButton.on('pointerup', () => {
      window.location.assign('/dist');
    });

    this.add.text(120, 50, `Good job ${this.name}`, {
      fontSize: '25px',
      fill: '#000',
    });

    this.add.text(120, 80, `Score of ${this.score} points`, {
      fontSize: '25px',
      fill: '#000',
    });

    this.add.text(120, 200, 'The leader board:', {
      fontSize: '25px',
      fill: '#000',
    });

    for (let i = 0; i < Math.min(10, this.scores.length); i += 1) {
      this.add.text(
        120,
        250 + i * 30,
        `${this.scores[i].user}: ${this.scores[i].score}`,
        {
          fontSize: '25px',
          fill: '#000',
        },
      );
    }
  }
}
