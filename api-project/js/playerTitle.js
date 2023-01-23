import { DOMSelectors } from "./DOM";

const playertitleApi = "https://valorant-api.com/v1/playertitles";

async function getplayerTitle() {
  DOMSelectors.display.innerHTML = "";

  try {
    const response = await fetch(playertitleApi);
    const data = await response.json();
    console.log(data);
    let title = DOMSelectors.selectTitle.value;
    data.data
      .filter((element) => element.displayName.includes(`${title} Title`))
      .forEach((el) => {
        DOMSelectors.display.insertAdjacentHTML(
          "beforeend",
          `<div>
                <h3 class="player-title>${el.displayName}</h3>
                </div>`
        );
      });
  } catch (err) {
    console.error(err);
  }
}

export { getplayerTitle };
