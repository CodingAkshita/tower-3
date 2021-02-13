const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var slingShot;
var score = 0;
var backgroundImg;
var bg = "dayBackground.png";

function preload() {
    polygon_img = loadImage("polygon.png");
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(390,300,250,10);
    ground2 = new Ground(700,165,200,10)

    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);

   block8 = new Box(330,235,30,40);
   block9 = new Box(360,235,30,40);
   block10 = new Box(390,235,30,40);
   block11 = new Box(420,235,30,40);
   block12 = new Box(450,235,30,40);

   block13 = new Box(360,195,30,40);
   block14 = new Box(390,195,30,40);
   block15 = new Box(420,195,30,40);

   block16 = new Box(390,155,30,40);

   block17 = new Box(700,60,30,40);

   block18 = new Box(670,100,30,40);
   block19 = new Box(700,100,30,40);
   block20 = new Box(730,100,30,40);

   block21 = new Box(640,140,30,40);
   block22 = new Box(670,140,30,40);
   block23 = new Box(700,140,30,40);
   block24 = new Box(730,140,30,40);
   block25 = new Box(760,140,30,40);

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);
   
   slingShot = new Slingshot(this.polygon,{x:100, y:200});
   
}
function draw(){
  if(backgroundImg)
  background(backgroundImg);
    Engine.update(engine);
    
    fill(135,206,234);
    block1.display() 
    block2.display() 
    block3.display() 
    block4.display() 
    block5.display() 
    block6.display() 
    block7.display() 
  fill("pink")
    block8.display() 
    block9.display() 
    block10.display() 
    block11.display() 
    block12.display()
    fill(63,224,208)
    block13.display() 
    block14.display() 
    block15.display() 
    fill(128,128,128)  
    block16.display() 
    fill("pink")
    block17.display()
    fill(63,224,208)
    block18.display()
    block19.display()
    block20.display()
    fill(135,206,234);
    block21.display() 
    block22.display() 
    block23.display() 
    block24.display() 
    block25.display()

    ground.display()
    ground2.display()

    slingShot.display()
     
    
   

     fill("gold")
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40 )
    
  textSize(20)
  fill("white")
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30)
    
  noStroke();
        textSize(30)
        fill("white")
        text("Score : " + score, width-300, 50)

  drawSprites()
}

function mouseDragged(){

  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
      
  }
  
  function mouseReleased(){
  
      slingShot.fly();
  }

  function keyPressed(){
    if(keyCode===32){
      slingShot.attach(this.polygon)
    }
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "dayBackground.png";
    }
    else{
        bg = "nightBackground.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
  