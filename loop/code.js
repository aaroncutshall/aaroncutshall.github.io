let canvas = document.getElementById("c1");
let painter = canvas.getContext("2d");

painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);
painter.fillStyle = "#47d147";

let numRows = 13;
let numCols = 13;
let squareSize = (canvas.width - (10 * (numCols - 1))) / numCols;
let spacing = 10;

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        let x = col * (squareSize + spacing);
        let y = row * (squareSize + spacing);
        painter.fillRect(x, y, squareSize, squareSize);
    }
}




   