import "../styles/style.css";
import { DOMSelectors } from "./DOM";
import { getPlayerCard } from "./playerCard";

function getCard() {
  getPlayerCard();
}

DOMSelectors.getCardBtn.addEventListener("click", getCard);
