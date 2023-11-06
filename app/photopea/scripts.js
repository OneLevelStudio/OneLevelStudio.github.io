const div = document.getElementById("photopea-embed");
const button = document.getElementById("toggleButton");

let isExpanded = false;

button.addEventListener("click", () => {
    if (isExpanded) {
        div.style.width = "100vw";
        isExpanded = false;
    } else {
        div.style.width = "calc(100vw + 320px)";
        isExpanded = true;
    }
});
