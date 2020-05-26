/* eslint-disable import/no-unresolved */
export default class Model {
  constructor() {
    this.vsoundOn = true;
    this.vmusicOn = true;
    this.vbgMusicPlaying = false;
  }

  set musicOn(value) {
    this.vmusicOn = value;
  }

  get musicOn() {
    return this.vmusicOn;
  }

  set soundOn(value) {
    this.vsoundOn = value;
  }

  get soundOn() {
    return this.vsoundOn;
  }

  set bgMusicPlaying(value) {
    this.vbgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this.vbgMusicPlaying;
  }
}