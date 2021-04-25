const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var division,division1,division2,division3;
var div,div1,div2;
var plinko,plinko1,plinko2,plinko3,plinko4,plinko5;
var pli,pli1,pli2,pli3,pli4,pli5,pli6,pli7,pli8;
var p,p1,p2,p3,p4,p5;

var particles=[];
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(410,790,800,20);

  division=new Division(30,650,20,270);
  division1=new Division(170,650,20,270);
  division2=new Division(330,650,20,270);
  division3=new Division(480,650,20,270);
 
  div=new Division(620,650,20,270);
  div1=new Division(770,650,20,270);
 
  plinko=new Plinko(500,100,30,30);
  plinko1=new Plinko(500,250,30,30);
  plinko2=new Plinko(500,400,30,30);
  plinko3=new Plinko(300,250,30,30);
  plinko4=new Plinko(300,400,30,30);
  plinko5=new Plinko(300,100,30,30);

  pli=new Plinko(100,100,30,30);
  pli1=new Plinko(100,250,30,30);
  pli2=new Plinko(100,400,30,30);
  pli3=new Plinko(700,100,30,30);
  pli4=new Plinko(700,250,30,30);
  pli5=new Plinko(700,400,30,30);
  pli6=new Plinko(600,50,20,20);
  pli8=new Plinko(600,450,20,20);
  pli7=new Plinko(600,300,20,20);

  p=new Plinko(200,450,20,20);
  p1=new Plinko(200,50,20,20);
  p2=new Plinko(200,250,20,20);
  p3=new Plinko(400,450,20,20);
  p4=new Plinko(400,250,20,20);
  p5=new Plinko(400,50,20,20);
  
}

function draw() {
  background("black");
  
  Engine.update(engine);  
  ground.display();
  division.display();
  division1.display();
  division2.display();
  division3.display();
  
  div.display();
  div1.display();
  
  plinko.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
 
  pli.display();
  pli1.display();
  pli2.display();
  pli3.display();
  pli4.display();
  pli5.display();
  pli6.display();
  pli7.display();
  pli8.display();

  p.display();
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
 
  for(var j= 0; j<particles.length; j++){
    particles[j].display();
  }

  if(frameCount%5===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  
}