import Map from './map-icon.png';

export default function about() {
    const content = document.querySelector("div#content");

    const headline = document.createElement("h1");
    headline.textContent = "About";
    headline.classList.add("headline");

    const map = document.createElement("img");
    map.src = Map;
    map.classList.add("image");

    const description = document.createElement("p");
    description.textContent = "Created by chef Matt McAuley located in Shanghai, China";
    description.classList.add("description");

    content.appendChild(headline);
    content.appendChild(map);
    content.appendChild(description);
}