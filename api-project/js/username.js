import { DOMSelectors } from "./DOM";

function getUsername() {
  DOMSelectors.display.innerHTML = "";
  let username = DOMSelectors.usernameInput.value;
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<h2 class="username">${username}</h2>`
  );
}

export { getUsername };
