export default class PaceCalculator {
  constructor() {
    this.time = 0; // mins
    this.pace = 0; // mins
    this.distance = 0; // miles
  }

  getTime() {
    return this.time;
  }

  setTime(newTime) {
    this.time = newTime;
  }

  getPace() {
    return this.pace;
  }

  setPace(newPace) {
    this.pace = newPace;
  }

  getDistance() {
    return this.distance;
  }

  setDistance(newDistance) {
    this.distance = newDistance;
  }

  calculateTime() {
    return this.pace * this.distance;
  }

  calculatePace() {
    return this.time / this.distance;
  }

  calculateDistance() {
    return this.time / this.pace;
  }
}
