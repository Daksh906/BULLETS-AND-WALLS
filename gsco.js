var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed = random(223,321);
  weight=random(30,152);
  bullet.velocityX = speed;
  thickness = random(22,83);
  bullet.shapeColor="green";
}

function draw() {
  background("white");
  hasCollided ();

  
  drawSprites();
}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge){
       return true;
  }
  return false;
}
if (hasCollided(bulet,wall)){
  bullet.velociyX=0;
  var damage=0.5* weight* speed* speed/(thickness*thickness*thickness)

   if(damage>10){
      wall.shapeColor="green";
   }
   if(damage<10){
     wall.shapeColor="red";
   }
}