import "../styles/style.css";
import { DOMSelectors } from "./DOM";
import { getPlayerCard } from "./playerCard";
import { getplayerTitle} from "./playerTitle";

function getCard() {
  getPlayerCard();
  getplayerTitle();
}

DOMSelectors.getCardBtn.addEventListener("click", getCard);
