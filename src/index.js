import PaceCalculator from "./PaceCalculator";

import "./main.css";

const app = document.getElementById("app");

app.innerHTML = `<div class="input-group">
    <h1>Pace Calculator</h1>
    <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab active"><a href="#">Pace</a></li>
          <li class="tab"><a href="#">Distance</a></li>
          <li class="tab"><a href="#">Time</a></li>
        </ul>
      </div>
      <div id="pacetab" class="tabpane active">
        <label for="time">Time:</label>
        <input id="time" type="text" placeholder="hh:mm:ss" />
        <br /><br />
        <label for="distance">Distance:</label>
        <input id="distance" type="text" placeholder="miles" />
        <br /><br />
        <h3>Pace: xx:xx:xx</h3>
      </div>
      <div id="distancetab" class="tabpane hidden">
        <label for="time">Time:</label>
        <input id="time" type="text" placeholder="hh:mm:ss" />
        <br /><br />
        <label for="pace">Pace:</label>
        <input id="pace" type="text" placeholder="mm:ss" />
        <br /><br />
        <h3>Distance: xx:xx:xx</h3>
      </div>
      <div id="timetab" class="tabpane hidden">
        <label for="pace">Pace:</label>
        <input id="pace" type="text" placeholder="mm:ss" />
        <br /><br />  
        <label for="distance">Distance:</label>
        <input id="distance" type="text" placeholder="miles" />
        <br /><br />
        <h3>Time: xx:xx:xx</h3>
      </div>
    </div>
</div>`;

document.querySelectorAll(".tabs li").forEach(value => {
  value.addEventListener("click", e => {
    e.preventDefault;

    document.querySelector(".tabs li").classList.remove("active");
    e.currentTarget.classList.add("active");

    document.querySelector("#timetab").classList.add("hidden");
    document.querySelector("#pacetab").classList.add("hidden");
    document.querySelector("#distancetab").classList.add("hidden");
    const categoryTab = `${e.currentTarget.childNodes[0].innerHTML.toLowerCase()}tab`;
    document.getElementById(categoryTab).classList.remove("hidden");
  });
});

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
