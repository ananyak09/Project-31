var ground,divisionHeight;

const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var divisions = [];
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,height,480,20);
  divisionHeight = 300;
 
 
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,100));
  }

  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,200));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,300));
  }

  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,400));
  }

  for(var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height - divisionHeight/2, 10, divisionHeight));
  }
}
function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
    
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
   }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }

}
