const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var ball;

var ground1, stand1, stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20;
var polygonSprite,slingshot;
var polygonBody;
var polygon_img;


function preload(){
 polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(1000,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500,390,1000,10);
  stand1 = new Ground(650,320,200,5);
  stand2 = new Ground(800,180,200,5);



  box1 = new Box(570,300,30,30);
  box2= new Box(620,300,30,30);
  box3= new Box(670,300,30,30);
  box4= new Box(720,300,30,30);
  box5= new Box(595,270,30,30);
  box6= new Box(645,270,30,30);
  box7= new Box(695,270,30,30);
  box8= new Box(620,240,30,30);
  box9= new Box(670,240,30,30);
  box10= new Box(642,210,30,30);
  
  
  box11= new Box(720,160,30,30);
  box12= new Box(770,160,30,30);
  box13= new Box(820,160,30,30);
  box14= new Box(870,160,30,30);
  box15= new Box(745,130,30,30);
  box16= new Box(795,130,30,30);
  box17= new Box(845,130,30,30);
  box18= new Box(770,100,30,30);
  box19= new Box(820,100,30,30);
  box20= new Box(795,70,30,30);

  ball = Bodies.circle(190,250,20);
  
  World.add(world,ball);
  slingshot = new Sling(this.ball,{x:190,y:250});


 

  Engine.run(engine);

  


}


function draw() {
  background(102,153,255);
  //Engine.update(engine);
  ground1.display();
  stand1.display();
  stand2.display();
  slingshot.display();
  
  
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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

 
 

  imageMode(CENTER);
  image(polygon_img,ball.position.x,ball.position.y,40,40);

  
  




  
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingshot.fly();
  }