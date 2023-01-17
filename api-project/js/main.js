import "../styles/style.css";
import { DOMSelectors } from "./DOM";
import { getPlayerCard } from "./playerCard";

DOMSelectors.getCardBtn.addEventListener("click", getPlayerCard);
