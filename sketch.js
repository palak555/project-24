
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var edge1,edge2,edge3;



function setup() {
	createCanvas(1600, 600);
	


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


	paper1 = new Paper(150,90);

	ground = new Ground(width/2,570,width,20)
	edge1 = new Box(1260,490,20,110);
	edge2 = new Box(1440,490,20,110);
	edge3 = new Box(1350,550,200,20); 


	
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground.display();
  
  edge1.display();
  edge2.display();
  edge3.display();
  

  




  drawSprites();
 
}


function keyPressed(){
	  if(keyCode === UP_ARROW){

         Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

	  }
}


