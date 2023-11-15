let brush = document.getElementById ("c1").getContext("2d")
let w = 400 // width of canvas
let h = 400 // height of canvas
let size = 20 // size of the square
let x = w/2 - size/2 // x of square
let y = 0 // y of square
let dy = 10 // increase along y
let dx = 10 // increase along x
let jumpImpact = 15//the spped increase of the jump
let Gravity = 1
let timer = null // timer id
let isLeft = false
let isRight = false 
let isOnGround = false



function drawBullet (){
    brush.fillStyle = "#000000"
    brush.fillRect = (bulletX, bulletY, bulletSize, bulletSize)
}

document.addEventListener("keydown",onkeydown )
document.addEventListener("keyup",onkeyup )

 drawBackground()
 drawSquare()




function drawFrame () {
    // update all the data that need to be updated
  




    dy += Gravity
    y+=dy // y = y +dy

    if (isLeft){
        x -= dx
    }
    if (isRight) {
        x+= dx
    }

    if (y > h - size){
        y = h - size;
        dy = 0
        isOnGround = true
    } else{
        isOnGround = false
    }
    if (x < -size) {
        x = w -size

    }
    if ( x > w) {
        x = 0 
    }
    drawBackground()
    drawSquare()
    drawBullet()

    
drawBackground()
drawSquare()
}






function drawBackground () {
    brush.fillStyle = "#AAAAAA"
    brush.fillRect(0, 0, w, h)
}

function drawSquare () {
    brush.fillStyle = "#FF0000"
    if (x < 0) {
        brush.fillRect(x, y, size, size)
        brush.fillRect(w + x, y, size, size)
    } else if (x>w - size) {
        brush.fillRect(x, y, size, size)
        brush.fillRect(x-w, y, size, size)
    } else {
        brush.fillRect(x, y, size, size)
    }
    brush.fillRect(x, y, size, size)
}

function onkeydown (e){
    if (e.key === "Enter") {
        clearInterval(timer)
        y = 0
           timer = setInterval(drawFrame, 20)
    } else if (e.key === "ArrowLeft") {
        isLeft =true
        x -= dx
    } else if (e.key === "ArrowRight") {
        x += dx 
        isRight = true
    } else if (e.key === " ") {
        if( isOnGround){
            dy -= jumpImpact
        }
     } else if (e.key === "f") {
        isFire = true
     }
}

function onkeyup (e){
      if (e.key === "ArrowLeft") {
       isLeft = false
    } else if (e.key === "ArrowRight") {
       isRight = false
    } else if (e.key === " ") {
    
       
    } 
}
