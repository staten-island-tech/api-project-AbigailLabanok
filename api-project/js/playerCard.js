import { DOMSelectors } from "./DOM";

const playercardApi = "https://valorant-api.com/v1/playercards";

async function getPlayerCard() {
  DOMSelectors.display.innerHTML = "";

  if (DOMSelectors.select.value === "Brimstone") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("No One Left Behind Card")
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

  if (DOMSelectors.select.value === "Phoenix") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Firestarter Card"))
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

  if (DOMSelectors.select.value === "Sage") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("Journey of Trials Card")
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

  if (DOMSelectors.select.value === "Sova") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("Through The Looking Glass Card")
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

  if (DOMSelectors.select.value === "Cypher") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("Redeemer's Folly Card")
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

  if (DOMSelectors.select.value === "Reyna") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("Revenge for Life Card")
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

  if (DOMSelectors.select.value === "Breach") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Big PayDay Card"))
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

  if (DOMSelectors.select.value === "Omen") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("What's Another Death Card")
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

  if (DOMSelectors.select.value === "Jett") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Mirrored Edge Card"))
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

  if (DOMSelectors.select.value === "Raze") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Rising up Card"))
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

  if (DOMSelectors.select.value === "Skye") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("The Great Reclaimer Card")
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

  if (DOMSelectors.select.value === "Yoru") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("Unmasked Lineage Card")
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

  if (DOMSelectors.select.value === "Astra") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Cosmic Origin Card"))
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

  if (DOMSelectors.select.value === "Kay/o") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Memory Log Card"))
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

  if (DOMSelectors.select.value === "Chamber") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Joint Venture Card"))
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

  if (DOMSelectors.select.value === "Neon") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("Eye of the Storm Card")
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

  if (DOMSelectors.select.value === "Fade") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Dark Tide Card"))
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

  if (DOMSelectors.select.value === "Harbor") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("Wake of Betrayal Card")
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
}

export { getPlayerCard };
