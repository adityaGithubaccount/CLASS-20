var fixRect,moveRect


function setup() {
  createCanvas(800,400);
 fixRect = createSprite(400, 200, 50, 70);
 fixRect.shapeColor="blue";

 moveRect = createSprite(200, 200, 80,30);
 moveRect.shapeColor="blue";

}

function draw() {
  background(0);  
  moveRect.x = mouseX;
  moveRect.y = mouseY;
if(moveRect.x-fixRect.x <= fixRect.width/2 + moveRect.width/2
  && fixRect.x - moveRect.x <= fixRect.width/2 + moveRect.width/2
 && moveRect.y - fixRect.y <= fixRect.height/2 + moveRect.height/2
  && fixRect.y - moveRect.y <= fixRect.height/2 + moveRect.height/2
  ){
moveRect.shapeColor = "yellow"
fixRect.shapeColor = "yellow"
}
 else{
  fixRect.shapeColor="blue";
  moveRect.shapeColor="blue"; 
}


  drawSprites();
}