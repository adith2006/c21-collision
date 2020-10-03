var fixedRect, movingRect;
var gameOblect1;
var gameOblect2;
var gameOblect3;
var gameOblect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 gameObject1 = createSprite(100,100,50,50);
gameOblect2 = createSprite(170,100,50,50);
gameOblect3 = createSprite(250,100,50,50);
gameOblect4 = createSprite(340,100,50,50);

}

function draw() {
 background("blue");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect,gameOblect2)) {
  movingRect.shapeColor = "red";
  gameOblect2.shapeColor = "red";

 }else{  
  movingRect.shapeColor = "green";
  gameOblect2.shapeColor = "green"; 

}


  
  drawSprites();
}

function isTouching(object1,object2) {

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;

}
else {
return false;
}




}




