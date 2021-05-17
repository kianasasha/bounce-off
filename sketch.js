var rect1, rect2, rect3, rect4;
function setup() {
  createCanvas(800,400);
  rect1=createSprite (400, 200, 50, 50);
rect2=createSprite (300,150,50,50);
rect3=createSprite (100,100,50,50);
rect4=createSprite (300,300,50,50);
}

function draw() {
  background("black");  
 rect1.x= mouseX;
 rect1.y=mouseY; 
 console.log(rect1.x-rect2.x);
touching(rect1,rect4)
touching(rect1,rect2)
touching(rect1,rect3)
drawSprites();
}
