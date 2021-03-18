var car, wall;
var speed, weight;
var deformation

function setup() {
  createCanvas(800,400);
  speed = math.round(random(55,90))
  weight = math.round(random(400,1500))
}

function draw() {
  background(255,255,255);  
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)

  car.velocityX = speed;

  deformation = 0.5*weight*speed*speed/22500

  if(deformation < 100){
    car.shapeColor = rgb(0,255,0)
  }
  if(deformation < 180 && deformation >100)
  {
    car.shapeColor = rgb(230 , 230, 0)
  }
  if(deformation >180){
    car.shapeColor = rgb(255,0,0)
  }
  drawSprites();
}