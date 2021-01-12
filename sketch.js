const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,BOX2,G;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    BOX2 = new Box(230,100,50,50);
    G = new ground(200,380,400,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    BOX2.display();
    G.display();
}