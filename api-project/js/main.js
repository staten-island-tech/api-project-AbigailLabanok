import "../styles/style.css";

const playercardApi = "https://valorant-api.com/v1/playercards";

/* async function getPlayerCard(playercardApi) {
  if (DOMSelectors.playerCard.value === viper) {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data
        .filter((card) => card.displayName.includes("One Dark Night Card"))
        .forEach(() => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
             <img class="display-img" src="https://media.valorant-api.com/playercards/69265fa9-4c85-e728-d332-4a84857fd84e/largeart.png"/>
            </div>`
          );
        });
    } catch (error) {
      console.log(error);
    }
  }
}

getPlayerCard(playercardApi);
 */
