import { checkNewVersion } from "./updater";

async function greet() {
  checkNewVersion()
}

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#greet-button")
    ?.addEventListener("click", () => greet());
});
