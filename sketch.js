var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
}

function draw() {
  background(25,25,25);  
  drawSprites();
}