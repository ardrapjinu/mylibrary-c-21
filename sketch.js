var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1=createSprite(100,200,100,50);
  obj2=createSprite(200,300,120,50);

  obj1.shapeColor = "green";
  obj2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

  obj1.x=mouseX;
  obj1.y=mouseY;;
  bounceoff(movingRect,fixedRect);

  if(isTouching(obj1, obj2)){
    obj1.shapeColor = "blue";
    obj2.shapeColor = "blue";
  }
  else {
    obj1.shapeColor = "green";
    obj2.shapeColor = "green";
   
  }

  drawSprites();
}

