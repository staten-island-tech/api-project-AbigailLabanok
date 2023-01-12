import "../styles/style.css";
import { DOMSelectors } from "./DOM";

const playercardApi = "https://valorant-api.com/v1/playercards";

function thing() {
  async function getPlayerCard(playercardApi) {
    DOMSelectors.display.innerHTML = "";

    try {
      if (DOMSelectors.viperOption.value === "Viper") {
        const response = await fetch(playercardApi);
        const data = await response.json();
        console.log(data);
        data.data
          .filter((element) =>
            element.displayName.includes("One Dark Night Card")
          )
          .forEach((el) => {
            DOMSelectors.display.insertAdjacentHTML(
              "beforeend",
              `<div>
              <img class="player-card" src="${el.largeArt}"/>
              </div>`
            );
          });
      } else {
        console.log("error");
      }
    } catch (err) {
      console.error(err);
    }
  }
}

DOMSelectors.getCardBtn.addEventListener(
  "click",
  thing(getPlayerCard(playercardApi))
);

/* async function getPlayerCard(playercardApi) {
  DOMSelectors.display.innerHTML = "";

  try {
    if (DOMSelectors.viperOption.value === "Viper") {
      const response = await fetch(playercardApi);
      const data = await response.json();
      console.log(data);
      data.data
        .filter((element) =>
          element.displayName.includes("One Dark Night Card")
        )
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
            <img class="player-card" src="${el.largeArt}"/>
            </div>`
          );
        });
    } else {
      console.log("error");
    }
  } catch (err) {
    console.error(err);
  } */

/* 
  if (DOMSelectors.viperOption.value === "Viper") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      console.log(data);
      data.data
        .filter((element) => element.displayName.includes("One Dark Night Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
             <img class="player-card" src="${el.largeArt}"/>
            </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log(`error`)
  } */
/* } */

/* async function fetchData(playercardApi) {
  try {
    const response = await fetch(playercardApi);
    const data = await response.json();
    console.log(data);
    data.data
      .filter((element) => element.displayName.includes("One Dark Night Card"))
      .forEach((el) => {
        DOMSelectors.display.insertAdjacentHTML(
          "beforeend",
          `<div>
          <img class="display-img" src="${el.largeArt}"/>
          </div>`
        );
      });
    return data;
  } catch (err) {
    console.error(err);
  }
}

DOMSelectors.viperbtn.addEventListener("click", fetchData(playercardApi)); */
