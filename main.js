import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

document.querySelector("#app");
console.log(window.document);
const dom = document.getElementById("dom");
const agencyA = document.getElementById("agency-a");
const agencyB = document.getElementById("agency-b");

const agencyACalendar = document.querySelector(".agency-a-calendar");
const agencyBCalendar = document.querySelector(".agency-b-calendar");
const agencies = document.getElementById("agencies");

function toggleAgencyA() {
  agencyACalendar.style.display = "block";
  if (agencyACalendar) {
    agencyBCalendar.style.display = "none";
  }
}

function toggleAgencyB() {
  agencyBCalendar.style.display = "block";
  if (agencyBCalendar) {
    agencyACalendar.style.display = "none";
  }
}

window.addEventListener("click", function (event) {
  // const agencyA = document.getElementById("agency-a");
  // const agencyB = document.getElementById("agency-b");
  if (!dom.contains(event.target)) {
    agencyACalendar.style.display = "none";
    agencyBCalendar.style.display = "none";
  }
});

agencyA.addEventListener("click", toggleAgencyA);
agencyB.addEventListener("click", toggleAgencyB);

setupCounter(document.querySelector("#counter"));
