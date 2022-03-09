function setup(){
    createCanvas(windowWidth,windowHeight)
}

function draw(){
    background(0);
    fill(255,255,255);
    translate(width/2,height/2)
    shake()
    textSize(64)
    fill(200, 0, 0)
    textAlign(CENTER,CENTER)
    textFont("comic-sans")
    text("You'll always", 0,0)
    text("Be Mine", 0, 50)
    resetMatrix()
}

function shake(){
    translate(random(-5,5),random(-5,5))
    rotate(random(-0.1,0.1))
}