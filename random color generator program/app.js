const main = document.querySelector(".main");
const colorView = document.querySelector(".color-view");
function generateNewColor() {
    let randomColor = "#" +Math.floor(Math.random()*16777215).toString(16);
    main.style.backgroundColor = randomColor;
    colorView.innerHTML = randomColor;
}