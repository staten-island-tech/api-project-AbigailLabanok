import { DOMSelectors } from "./DOM";

const playercardApi = "https://valorant-api.com/v1/playercards";

async function getPlayerCard() {
  DOMSelectors.display.innerHTML = "";

  if (DOMSelectors.selectCard.value === "Brimstone") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      console.log(data);
      data.data
        .filter((element) =>
          element.displayName.includes("No One Left Behind Card")
        )
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div class="player-card-div">
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Phoenix") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Firestarter Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Sage") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Sova") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Viper") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Cypher") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Reyna") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Killjoy") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Nächtelang Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Breach") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Big PayDay Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Omen") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Jett") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Mirrored Edge Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Raze") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Rising up Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Skye") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Yoru") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Astra") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Cosmic Origin Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Kay/o") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Memory Log Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Chamber") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Joint Venture Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Neon") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Fade") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) => element.displayName.includes("Dark Tide Card"))
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Harbor") {
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
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "Undercity") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.displayName.includes("Welcome to the Undercity Card")
        )
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
                </div>`
          );
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.selectCard.value === "#SAVEWIDEJOY") {
    try {
      const response = await fetch(playercardApi);
      const data = await response.json();
      data.data
        .filter((element) =>
          element.uuid.includes("fcceda12-4815-17d0-ffc1-698aac40777a")
        )
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img class="player-card" src="${el.largeArt}" alt="${el.displayName}"/>
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
