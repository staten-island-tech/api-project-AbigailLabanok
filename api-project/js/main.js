import "../styles/style.css";
import { DOMSelectors } from "./DOM";
import { getPlayerCard } from "./playerCard";
import { getplayerTitle } from "./playerTitle";
import { getUsername } from "./username";

function getCard() {
  getPlayerCard();
  getplayerTitle();
  getUsername();
}

DOMSelectors.getCardBtn.addEventListener("click", getCard);
