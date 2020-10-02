var wall,bullet,thickness,speed,weight;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  //wall.shapeColor = color(80,80,80);

  bullet = createSprite(50,200,70,20);
  bullet.shapeColor = "grey";
  bullet.velocityX = speed;
}

function draw() {
      background("ÿellow");
     //bullet.velocityX = speed;
      
 if (hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage =( 0.5 * weight * speed * speed)/(thickness * thickness * thickness);

   if (damage>10){
     wall.shapeColor = color(255,0,0);
   }

   if (damage<10){
     wall.shapeColor = color(0,255,0);
   }
 }

 

drawSprites();
}

function hasCollided(ob1,ob2){
  ob1RightEdge = ob2.x - ob1.x;
  ob2LeftEdge = (ob2.width + ob1.width)/2;

  if (ob1RightEdge < ob2LeftEdge ){
    return true;
  }
 else{
  return false;
 } 
}