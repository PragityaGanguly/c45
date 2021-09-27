var PLAY = 1;
var END = 0;
var gameState = PLAY;

var mainship, enemyship, finalenemyship;
var mainshipImg, enemyshipImg, finalenemyshipImg;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;



function preload(){
  mainshipImg=   loadAnimation("main.jpg");
  enemyshipImg = loadAnimation("p-ship 2.png");
 finalenemyshipImg  = loadAnimation("psip-3.jpg");


 bg=loadImage("background.gif")
  
 
  
 
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(600, 200);
  
 mainship = createSprite(50,180,20,50);
  
 mainship.addAnimation("running",mainship_running);
 mainship.addAnimation("collided",mainship_collided);
 mainship.scale = 0.5;
  
  
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
  
  
  
 
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background(180);
 image(bg,0,0,width,height)
 /* text("Score: "+ score, 500,50);
 mainship.x=camera.x
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
    if(keyDown("space") &&mainship.y >= 159) {
     mainship.velocityY = -12;
    }
  
   mainship.velocityY =mainship.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   mainship.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
  
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
   mainship.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change themainship animation
   mainship.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }
  
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth =mainship.depth;
   mainship.depth =mainship.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  */
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
 mainship.changeAnimation("running",trex_running);
  
 
  
  score = 0;
  
}