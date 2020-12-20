var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor ="black";
  b=createSprite(400,100,50,50);
  b.shapeColor = "black";
}

function draw() {

b.x=mouseX;
b.y=mouseY;

  background("yellow");  
  if(b.x - a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2 &&
     a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2)
  {
    a.shapeColor="white";
    b.shapeColor="white";
  }
  else{
    a.shapeColor ="black";
    b.shapeColor ="black";
  }


  drawSprites();
}