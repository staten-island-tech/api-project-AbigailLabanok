import { DOMSelectors } from "./DOM";

function getUsername() {
  DOMSelectors.display.innerHTML = "";
  let username = DOMSelectors.usernameInput.value;
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<h3 class="username">${username}</h3>`
  );
}

export { getUsername };
