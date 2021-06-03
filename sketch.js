const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var object_option = {
    isStatic: true
  }

  object = Bodies.rectangle(200,100,40,40,object_option);
  World.add(world,object)
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
}
  
function draw() {
  background("RED")
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,40,40);

}