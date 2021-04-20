const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    stand1 =  new Ground(600,300,270,10);
    stand2 = new Ground(950,200,270,10);
    //stand1
    box1 = new Box(500,100,50,50);
    box2 = new Box(550,100,50,50);
    box3 = new Box(600,100,50,50);
    box4 = new Box(650,100,50,50);
    box5 = new Box(700,100,50,50);
    box6 = new Box(550,100,50,50);
    box7 = new Box(600,100,50,50);
    box8 = new Box(650,100,50,50);
    box9 = new Box(600,100,50,50);
    //stand2
    box10 = new Box(850,100,50,50);
    box11 = new Box(900,100,50,50);
    box12 = new Box(950,100,50,50);
    box13 = new Box(1000,100,50,50);
    box14 = new Box(1050,100,50,50);
    box15 = new Box(900,100,50,50);
    box16 = new Box(950,100,50,50);
    box17 = new Box(1000,100,50,50);
    box18 = new Box(950,100,50,50);
    ball = Bodies.circle(300,100,20);
    World.add(world,ball);
    slingshot = new SlingShot(ball,{x:300,y:100})
    
}

function draw(){
    background("cyan");

    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();
    box1.display("red");
    box2.display("blue");
    box3.display("yellow");
    box4.display("blue");
    box5.display("red");
    box6.display("red");
    box7.display("blue");
    box8.display("red");
    box9.display("red");
    box10.display("blue");
    box11.display("yellow");
    box12.display("red");
    box13.display("yellow");
    box14.display("blue");
    box15.display("blue");
    box16.display("yellow");
    box17.display("blue");
    box18.display("blue");
    slingshot.display();
    imageMode(CENTER)
    image(polygonImg,ball.position.x,ball.position.y,70,70)
}

function mouseDragged() {
   Matter.Body.setPosition(ball,{x:mouseX,y:mouseY}) 
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(ball,{x:300,y:100});
        slingshot.attach(ball);
    }
}