
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,boundari,boundari2,boundari3;

function preload(){
  //there is no images	
}

function setup(){
	 createCanvas(800, 700);	
	 engine = Engine.create();
	 world = engine.world;
	 paper = new Paper(100, 600, 10);
   ground = new Ground(400, 680, 800, 20);  
   boundari = new Dustbin(550, 620, 20, 100);
   boundari2 = new Dustbin(635, 660, 150, 20);
   boundari3 = new Dustbin(720, 620, 20, 100);
  Engine.run(engine);  
}


function draw(){
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  boundari.display();
  boundari2.display();
  boundari3.display();
  drawSprites(); 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paper.body, paper.body.position,{x:15,y:-15});
	}

  }


