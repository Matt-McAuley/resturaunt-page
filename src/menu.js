import Menu from "./menu.jpg";

export default function menu() {
    const content = document.querySelector("div#content");

    const headline = document.createElement("h1");
    headline.textContent = "Menu";
    headline.classList.add("headline");

    const menu = document.createElement("img");
    menu.src = Menu;
    menu.classList.add("image");

    const description = document.createElement("p");
    description.textContent = "This is our awesome menu!";
    description.classList.add("description");

    content.appendChild(headline);
    content.appendChild(menu);
    content.appendChild(description);
}