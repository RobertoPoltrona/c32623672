
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	block1= Bodies.circle (220,10,10,blockk1_options);
	World.add(world,block1);

	block2= Bodies.rectangle(110,50,10,10,block2_options)
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options)
	World.add(world,block3);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.


	Engine.run(engine);
  var block1_options = {
restituition:0.5

var block2_options = {
	restituition:0.5

	var block3_options = {
		restituition:0.5
	
	
	}
}
  }

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



