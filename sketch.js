var fixedRect , movingRect;
var aR;

function setup(){
  createCanvas(600,500);

  fixedRect = createSprite(200,200,100,100);
  fixedRect.shapeColor  = "green";
  fixedRect.debug = true;

  movingRect = createSprite(100,100, 100,50);
  movingRect.shapeColor  = "green";
  movingRect.debug  = true;
  aR = createSprite(400, 300)
  fixedRect.velocityX =5;
}

function draw(){

  background(0);
  movingRect.x  = mouseX;
  movingRect.y = mouseY;
  // stroke("white")
  // line(0,0,movingRect.x, movingRect.y);

  if (isTouching(movingRect,fixedRect)){
    text ("Collided", width/2, height/2)
  }
  bounce (movingRect, fixedRect)

  drawSprites();

}

