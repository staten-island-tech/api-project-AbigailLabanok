import { DOMSelectors } from "./DOM";

function usernameStart() {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<h2 class="username">Example Card!</h2>`
  );
}

function getUsername() {
  DOMSelectors.display.innerHTML = "";
  let username = DOMSelectors.usernameInput.value;
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<h2 class="username">${username}</h2>`
  );
}

export { usernameStart };
export { getUsername };
