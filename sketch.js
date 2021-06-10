var bg1, issImg, spaceCraftImg, iss, spaceCraft;
var  hasDocked = false;
var smoke1,smoke2,smoke3;
function preload(){
bg1 = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
spaceCraftImg = loadImage("spacecraft1.png");
smoke1 = loadImage("spacecraft3.png");
smoke2 = loadImage("spacecraft4.png");
smoke3 = loadImage("spacecraft2.png");
}

function setup() {
  createCanvas(800,400);
 iss = createSprite(400,200,10,10);
 iss.addImage(issImg);
 iss.scale=0.5;
 spaceCraft = createSprite(600,250,10,10);
 spaceCraft.addImage(spaceCraftImg);
 spaceCraft.scale = 0.1;
}

function draw() {
  background(bg1);  
  if(!hasDocked){
    //spaceCraft.x = Math.round(random(50,750));
    if (keyIsDown(LEFT_ARROW) ) {
      spaceCraft.addImage(smoke1);
      spaceCraft.x = spaceCraft.x-10;
  }
  if (keyIsDown(RIGHT_ARROW) ) {
    spaceCraft.addImage(smoke2);
    spaceCraft.x = spaceCraft.x+10;
}
if (keyIsDown(DOWN_ARROW) ) {
  spaceCraft.addImage(smoke3);
  //spaceCraft.x = spaceCraft.x+10;
}
if (keyIsDown(UP_ARROW) ) {
  spaceCraft.addImage(smoke3);
  spaceCraft.y = spaceCraft.y-10;
  //spaceCraft.x = spaceCraft.x+10;
}
  }
  if(spaceCraft.x === 360){
    //spaceCraft.x = 350;
    hasDocked = true
    text("Docking Successful",400,350);
  }
  drawSprites();
}