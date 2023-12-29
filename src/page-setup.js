import clear from "./clear";
import home from "./home";
import menu from "./menu";
import about from "./about";

export default function pageSetup() {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    const aboutButton = document.createElement("button");
    aboutButton.textContent = "About";

    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(aboutButton);

    body.appendChild(header);

    const content = document.createElement("div");
    content.setAttribute('id', 'content');
    body.appendChild(content);

    homeButton.addEventListener("click", () => {
        clear();
        home();
    })

    aboutButton.addEventListener("click", () => {
        clear();
        about();
    })

    menuButton.addEventListener("click", () => {
        clear();
        menu();
    })

    home();
}