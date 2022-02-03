var ball;
var vx = 2;
var ball2;
var vy=2;
function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
  ball2= createSprite(200,200,10,10);
}

function draw() 
{
  background(51);
  if(ball.position.x<=0 || ball.position.x>=width)
  {
    vx= -vx;
  }
  ball.velocity.x = vx;
  if(ball2.position.y<=0 || ball2.position.y>=height)
  {
    vy= -vy;
  }
  ball2.velocity.y = vy;

  drawSprites();

}

