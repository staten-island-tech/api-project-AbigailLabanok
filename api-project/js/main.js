import "../styles/style.css";
import { DOMSelectors } from "./DOM";

const playercardApi = "https://valorant-api.com/v1/playercards";

async function getPlayerCard() {
  DOMSelectors.display.innerHTML = "";

  try {
    /*     if (DOMSelectors.agent.value === "Viper") { */
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
    /*     } else {
      console.log("error");
    } */
  } catch (err) {
    console.error(err);
  }
}

DOMSelectors.getCardBtn.addEventListener("click", getPlayerCard);
