import "../styles/style.css";
import { DOMSelectors } from "./DOM";

const playercardApi = "https://valorant-api.com/v1/playercards";

async function fetchData(playercardApi) {
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

DOMSelectors.viperbtn.addEventListener("click", fetchData(playercardApi));
