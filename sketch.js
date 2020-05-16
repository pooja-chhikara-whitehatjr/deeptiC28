const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;
var engine,world;
var constraint; 
var score=0;
function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(700,400);
  ground=new Ground(200,380,950,20);
  box1= new Box(620,340,50,50);
  box2 = new Box(570,340,50,50);
  box3 = new Box(520,340,50,50);
  box4 = new Box(470,340,50,50);
  box5 = new Box(420,340,50,50);

  box6 = new Box(440,290,50,50);
  box7 = new Box(490,290,50,50);
  box8 = new Box(540,290,50,50);
  box9 = new Box(590,290,50,50);

  box10 = new Box(460,240,50,50);
  box11 = new Box(510,240,50,50);
  box12 = new Box(560,240,50,50);

  box13 = new Box(480,190,50,50);
  box14 = new Box(530,190,50,50);

  box15 = new Box(505,140,50,50);

ball= new Ball(100,200,20,20);

chain= new Chain(ball.body,{x:200,y:200});

  
}

function draw() {
  Engine.update(engine);
  background("aqua");
  fill("black");
  textStyle(30);
  text("score:"+score,width-100,50);
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
 chain.display();
 box1.score();
 box2.score();
 box3.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 box10.score();
 box4.score();
 box5.score();
 box11.score();
 box12.score();
 box13.score();
 box14.score();
 box15.score();

}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
chain.fly();
}
function keyPressed(){
  if(keyCode===32)
    chain.attach(ball.body);
    
}

