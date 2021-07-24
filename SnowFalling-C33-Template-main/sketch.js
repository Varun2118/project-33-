var pani,paniImg
var backroundImg

function preload() {
backroundImg= loadImage("snow2.jpg") 
paniImg= loadImage("snow4.webp")
sound= loadSound("pattu.mp3")
}


function setup() {
 createCanvas(800,400);
 pani = createSprite(400, 200,10, 10 );
 pani.addImage(paniImg)
pani.scale = 0.2
}

function draw() {
  background(backroundImg);  
  drawSprites();
  sound.play()
}