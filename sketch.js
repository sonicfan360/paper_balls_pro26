
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;

function setup() {
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;
paper1 = new paper(200,200,20);

	
	Engine.run(engine);
	


	
	ground = Bodies.rectangle(300, 650, width, 20 , {isStatic:true} );
	World.add(world, ground);
	pbox_side = createSprite(260,620,20,80,{isStatic:false} );
	World.add(world,pbox_side)
	
	pbox_side_2 = createSprite(450,620,20,80,{isStatic:false} );
	World.add(world,pbox_side_2)
	
	
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper1.display()
  pbox_side.display()
  pbox_side_2.display()
  rect(ground.position.x,ground.position.y,width,20)

}
function keyPressed(){

if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:4,y:-10})

}
}

