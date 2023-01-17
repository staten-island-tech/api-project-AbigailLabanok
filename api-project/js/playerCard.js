const playercardApi = "https://valorant-api.com/v1/playercards";
import { DOMSelectors } from "./DOM";

async function getPlayerCard() {
  DOMSelectors.display.innerHTML = "";

  if (DOMSelectors.select.value === "Viper") {
    try {
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
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.select.value === "Killjoy") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Nächtelang Card"))
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
    console.log("error");
  }
}

export { getPlayerCard };
