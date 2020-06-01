var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  speed = random(223,321);
  bullet.velocityX=speed;
  weight=random(30,152);
  bullet.shapeColor="black";
}

function draw() {
  background("white");
  
  if (hasCollided(bullet,wall)){
  
    bullet.velociyX=0;
  var damage=0.5* weight* speed* speed/(thickness*thickness*thickness);
   if(damage>10){
      wall.shapeColor="green";
   }
   if(damage<10){
     wall.shapeColor="red";
   }
   }
  
  drawSprites();
}
function hasCollided(bullet1,wall)
{
  bullet1RightEdge=bullet1.x + bullet1.width;
  wallLeftEdge = wall.x;
  if (bullet1RightEdge>=wallLeftEdge){
       return true;
  }
       return false;
}



