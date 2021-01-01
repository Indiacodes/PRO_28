const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundSprite;
var tree, treeSprite, treeImage;
var boy;


function preload()
{
	//treeImage = loadImage("pluckingmango/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(400,690,800,20, {isStatic : true});
	tree = Bodies.rectangle(600, 380, 320,200, {isStatic : true});
	boy = Bodies.rectangle(200,350, 320, 200, {isStatic : true});

	
	World.add(world, ground);
	World.add(world, tree);
	World.add(world, boy);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);

  groundSprite = rect(ground.position.x, ground.position.y, 800,20);
  treeSprite = rect(tree.position.x, tree.position.y, 320, 200);
  //image(treeImage, 600, 380, 700,200);
  
  drawSprites();
 
}