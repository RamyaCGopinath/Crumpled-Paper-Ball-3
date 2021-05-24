
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

var gameState = "attached";
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	paper=new Paper(200,200,70);
  rope = new Rope(paper.body, {x:200,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();
  rope.display();
}

function mouseDragged(){
  if(gameState!="launched"){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  rope.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode === 32){
      rope.attach(paper.body);
      gameState = "attached";
  }
}

