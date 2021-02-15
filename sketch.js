const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

}

function setup(){

    var canvas = createCanvas(1360,620);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1360/2, height, 1360, 20);

    base1 = new Ground(400, 400, 250, 14);
    base2 = new Ground(760, 200, 150, 14);

    a1 = new Box(400, 380, 30, 30);
    a2 = new Box(430, 380, 30, 30);
    a3 = new Box(370, 380, 30, 30);
    a4 = new Box(460, 380, 30, 30);
    a5 = new Box(340, 380, 30, 30);
    a6 = new Box(490, 380, 30, 30);
    a7 = new Box(310, 380, 30, 30);

    b1 = new Box(415, 348, 30, 30);
    b2 = new Box(445, 348, 30, 30);
    b3 = new Box(385, 348, 30, 30);
    b4 = new Box(475, 348, 30, 30);
    b5 = new Box(355, 348, 30, 30);
    b6 = new Box(325, 348, 30, 30);

    c1 = new Box(400, 318, 30, 30);
    c2 = new Box(430, 318, 30, 30);
    c3 = new Box(370, 318, 30, 30);
    c4 = new Box(460, 318, 30, 30);
    c5 = new Box(340, 318, 30, 30);

    d1 = new Box(415, 288, 30, 30);
    d2 = new Box(385, 288, 30, 30);
    d3 = new Box(445, 288, 30, 30);
    d4 = new Box(355, 288, 30, 30);

    e1 = new Box(400, 258, 30, 30);
    e2 = new Box(370, 258, 30, 30);
    e3 = new Box(430, 258, 30, 30);

    f1 = new Box(415, 228, 30, 30);
    f2 = new Box(385, 228, 30, 30);

    g1 = new Box(400, 198, 30, 30);


    h1 = new Box(775, 178, 30, 30);
    h2 = new Box(745, 178, 30, 30);
    h3 = new Box(805, 178, 30, 30);
    h4 = new Box(715, 178, 30, 30);

    i1 = new Box(760, 148, 30, 30);
    i2 = new Box(790, 148, 30, 30);
    i3 = new Box(730, 148, 30, 30);

    j1 = new Box(775, 118, 30, 30);
    j2 = new Box(745, 118, 30, 30);

    k1 = new Box(760, 88, 30, 30);

    stone = new Stone(100, 210, 30);

}

function draw(){
    
    background("grey");

    Engine.update(engine);

    ground.display();
    base1.display();
    base2.display();

    a1.display();
    a2.display();
    a3.display();
    a4.display();
    a5.display();
    a6.display();
    a7.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();

    c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display();

    d1.display();
    d2.display();
    d3.display();
    d4.display();

    e1.display();
    e2.display();
    e3.display();

    f1.display();
    f2.display();

    g1.display();

    h1.display();
    h2.display();
    h3.display();
    h4.display();

    i1.display();
    i2.display();
    i3.display();

    j1.display();
    j2.display();

    k1.display();

    stone.display();

}
