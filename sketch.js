var survivalTime=0;
var monkey , monkey_running
var bananas ,bananaImage, stone, stoneImage
var FoodsGroup, obstaclesGroup;
var score,ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananasImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
  
 monkey=createSprite(80,390,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
  
 ground=createSprite(400,390,900,10);
 ground.velocityX=-4 
 ground.x=ground.width/2;
 console.log(ground.x); 
 
 FoodsGroup=new Group();
 obstaclesGroup=new Group(); 
  
}

function draw() {
 background(255);
  
 if(ground.x<0){
   ground.x=ground.width/2;
 } 
 if(keyDown("space")){
   monkey.velocityY=-12;
 } 
 monkey.velocityY=monkey.velocityY+0.8;
  
 monkey.collide(ground);
  
  spawnBananas();
  
  spawnObstacles();
  
 drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate())
  text("surivalTime:"+survivalTime,100,50);
}

function spawnBananas(){
  if (frameCount % 60 === 0) {
    var Bananas = createSprite(600,400,40,10);
    Bananas.y = Math.round(random(150,250));
    Bananas.addImage(bananasImage);
    Bananas.scale = 0.1;
    Bananas.velocityX = -3;
    
    Bananas.lifetime = 200;
    
   Bananas.depth = monkey.depth;
   monkey.depth = monkey.depth + 1;
   FoodsGroup.add(Bananas);
  }
}

function spawnObstacles(){
  if (frameCount % 100 === 0) {
    var stone=createSprite(600,390,40,10);
    stone.y=Math.round(random(370,370));
    stone.addImage(stoneImage);
    stone.scale=0.1;
    stone.velocityX=-3;
    
    stone.lifetime=200;
    
    stone.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
    obstaclesGroup.add(stone);
  }
}



