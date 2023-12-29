export default function clear() {
    const content = document.querySelector("div#content");
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
}