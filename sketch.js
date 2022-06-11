var Bg,bgimg
var obstaclesGroup,monster1,monster2,monster3,monster4;
var fairy

function preload(){
bgimg=loadImage("New folder/fj.jpg")

monster1img=loadImage("New folder/3t(2).jpg")
monster2img=loadImage("New folder/3t(3).jpg")
monster3img=loadImage("New folder/3t(4).jpg")
monster4img=loadImage("New folder/3t(5).jpg")

//fairy=loadImage("f(2).jpg")
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 Bg=createSprite(0,0,650,650)
Bg.addImage(bgimg)
Bg.scale=1
 ground = createSprite(200,180,300,20);
  //ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  //ground.velocityX = -(6 + 3*score/100);
  invisibleGround = createSprite(200,180,250,15);
  invisibleGround.visible = true;
  monster1=createSprite(50,50)
  monster1.addImage(monster1img)
  monster2=createSprite(50,50)
  monster3=createSprite(50,50)
  monster4=createSprite(50,50)
  monster2.addImage(monster2img)
  monster3.addImage(monster3img)
  monster4.addImage(monster4img)

   obstaclesGroup = createGroup();
}

function draw() 
{ background("dark blue")
Bg.velocityX=-3
if(Bg.x<400){
   Bg.x= Bg.width/2
}
drawSprites()
}
function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage();
          break;
      case 2: obstacle.addImage(k);
              break;
      case 3: obstacle.addImage(l);
              break;
      case 4: obstacle.addImage(m);
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