import PaceCalculator from "./PaceCalculator";
import "./main.css";

const app = document.getElementById("app");

app.innerHTML = `<div class="input-group">
    <h1>Pace Calculator</h1>
    <label for="time">Time:</label>
    <input id="time" type="text" placeholder="hh:mm:ss" />
    <br /><br />
    <label for="pace">Pace:</label>
    <input id="pace" type="text" placeholder="mm:ss" />
    <br /><br />
    <label for="distance">Distance:</label>
    <input id="distance" type="text" placeholder="miles" />
</div>`;

// All you can take with you is that which you've given away
// No man is failure who has friends
const paceCalc = new PaceCalculator();

const timeInput = document.getElementById("time");
const paceInput = document.getElementById("pace");
const distanceInput = document.getElementById("distance");

timeInput.onblur = e => {
  paceCalc.setTime(e.currentTarget.value);
  updateLastInput("time");
};

paceInput.onblur = e => {
  paceCalc.setPace(e.currentTarget.value);
  updateLastInput("pace");
};

distanceInput.onblur = e => {
  paceCalc.setDistance(e.currentTarget.value);
  updateLastInput("distance");
};

let last;
const updateLastInput = current => {
  if (typeof last !== "undefined" && current !== last) {
    if (current === "time") {
      if (last === "pace") {
        distanceInput.value = paceCalc.calculateDistance();
      } else {
        paceInput.value = paceCalc.calculatePace();
      }
    } else if (current === "distance") {
      if (last === "time") {
        paceInput.value = paceCalc.calculatePace();
      } else {
        timeInput.value = paceCalc.calculateTime();
      }
    } else {
      if (last === "distance") {
        timeInput.value = paceCalc.calculateTime();
      } else {
        paceInput.value = paceCalc.calculatePace();
      }
    }
  }
  last = current;
};
