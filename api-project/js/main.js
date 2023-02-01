import "../styles/style.css";
import { DOMSelectors } from "./DOM";
import { getPlayerCard } from "./playerCard";
import { getplayerTitle } from "./playerTitle";
import { getUsername } from "./username";
import { playerTitleStart } from "./playerTitle";
import { playerCardStart } from "./playerCard";
import { usernameStart } from "./username";

playerTitleStart();
playerCardStart();
usernameStart();

function getCard() {
  getPlayerCard();
  getplayerTitle();
  getUsername();
}

DOMSelectors.getCardBtn.addEventListener("click", getCard);
