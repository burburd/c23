const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var backgroundImg;
var cannon, cannonImg,cannonfront


function preload() {
  towerImage = loadImage("./assets/tower.png");
  backgroundImg = loadImage("./assets/background.gif");
  cannonImg = loadImage("./assets/cannon_base.png")
  cannonfront = loadImage("./assets/CANON.png")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 450, 200, 310);
  cannon = new Cannon(90,110,100,50,angle)

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  cannon.display();
  tower.display();
  
 
}
