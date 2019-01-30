var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = document.querySelector("#pickedColor");
    pickedColor.innerHTML = randomColor();

for (var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}


function randomColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}