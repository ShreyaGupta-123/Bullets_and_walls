var bullet,speed,weight,thickness,wall;




function setup() {
  createCanvas(1600,400);
  
  wall=createSprite(1000,200,thickness,height/2);

  bullet=createSprite(200,200,70,10);
  bullet.shapeColor="white"

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;


}

function draw() {
  background("black"); 



 if(hascollided(bullet,wall)){

bullet.velocityX=0

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor=color(255,0,0)
}

if (damage<10){
  wall.shapeColor=color(0,255,0)
}


 }

 bullet.collide(wall);


  drawSprites();
  
}

function hascollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
  return true;
  }

  return false;



}