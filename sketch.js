var helicopterIMG, helicopterSprite, packageSprite, packageIMG, box;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	fill("red");
	box1=createSprite(400,660,130,10);
	box2=createSprite(465,625,10,70);
	box3=createSprite(335,625,10,70);


	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	var options= {
		isStatic: true
	}
	 boxBody1= Bodies.rectangle(400,660,130,10,options);
	 boxBody2= Bodies.rectangle(465,625,10,70,options);
	 boxBody3= Bodies.rectangle(335,625,10,70,options);
	 World.add(world,boxBody1);
	 World.add(world,boxBody2);
	 World.add(world,boxBody3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.x= boxBody1.position.x
  box1.y=boxBody1.position.y
  box2.x= boxBody2.position.x
  box2.y=boxBody2.position.y
  box3.x= boxBody3.position.x
  box3.y=boxBody3.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }

}



