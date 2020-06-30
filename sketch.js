var fix,moving;
function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 50);
  fix.shapeColor = "blue";
  moving = createSprite(500,300,50,50);
  moving.shapeColor = "red";
}

function draw() 
{
  background(0);  
  drawSprites();
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  if(moving.x - fix.x <= moving.width/2 + fix.width/2 && 
     fix.x - moving.x <= fix.width/2 + moving.width/2 &&
     moving.y - fix.y <= moving.height/2 + fix.height/2 &&
     fix.y - moving.y <= fix.height/2 + moving.height/2)
  {
    moving.shapeColor = "yellow";
    fix.shapeColor = "green";
  }
  else
  {
    moving.shapeColor = "red";
    fix.shapeColor = "blue";
  }
}