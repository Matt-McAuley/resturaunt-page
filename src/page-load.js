import Pasta from "./pasta.jpg";

export default function pageLoad() {
    const content = document.querySelector("div#content");

    const headline = document.createElement("h1");
    headline.textContent = "Pasta Emporium!";
    headline.classList.add("headline");

    const pasta = document.createElement("img");
    pasta.src = Pasta;
    pasta.classList.add("image");

    const description = document.createElement("p");
    description.textContent = "This is the best pasta place ever! It tastes so good and has so many options for sauces and shapes!";
    description.classList.add("description");

    content.appendChild(headline);
    content.appendChild(pasta);
    content.appendChild(description);
}