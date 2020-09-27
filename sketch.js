var car ,wall;
var speed,weight;
var wall, thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
 

  speed=random(55,90)
  thickness = random(22,83)

  
  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
  wall=createSprite(1200, 200, thickness, height/2);
  weight=random(30,52)
}

function draw() {
  background("black");  

  if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness * thickness);

  if(damage>10)
  {
    wall.shapeColor="red";
  }


if(damage<10)
{
wall.shapeColor="green";
}
}

 
  drawSprites();

 
}
function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
