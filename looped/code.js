let canvas = document.getElementById("c1");
let painter = canvas.getContext("2d");

painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);
painter.fillStyle = "#47d147";


let y = 10
for (let j = 0; j < 13; ++j) {
    let x = 10
    for ( let i = 0; i < 13; ++i) {
        painter.fillRect(x,y,20,20)
        x= x +30
        y = y + 30
        
    }
}
