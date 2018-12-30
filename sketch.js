
var bat;
var ball;

function setup() {
  createCanvas(400, 400);
  bat = new Bat();
  ball = new Ball();
}

function draw() {
  background(20);
  bat.show();
  bat.move();
  ball.show();
  ball.move();
  ball.check(bat);
  
}

function keyPressed() {
 if(keyCode === UP_ARROW) {
    bat.moveUp(); 
 }
 if(keyCode === DOWN_ARROW) {
    bat.moveDown();
 }
  
}

class Ball {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.dx = -1;
    this.dy = 0;
    this.r =  5;
  }
  
  move() {
     this.x += this.dx;
     this.y += this.dy;
    
     if(this.x > width-this.r) {
       this.dx *= -1; 
     }
  }
  
  show() {
    fill(150,50,50);
    rect(this.x,this.y,this.r*2,this.r*2);
  //  ellipse(this.x,this.y,this.r*2);
  }
  
  check(bat) {
   if(this.x == bat.x+bat.w) {
       if((this.y >= bat.y-(this.r*2)) && ( this.y  <= bat.y+bat.h+ (this.r*2))) {
           this.dx *= -1;  
     }
   }
  }
}

class Bat {
	constructor() {
   this.x = 20;
   this.y = height/2;
   this.w = 10
   this.h = 40;
   this.direction = 0;
  }
  
  show() {
    fill(200);
    rect(this.x,this.y,this.w,this.h);
  }
  
  move() {
    this.y += this.direction; 
    if(this.y > height-this.h) {
      this.y = height-this.h; 
    }
    
    if(this.y < 0) {
      this.y =0; 
    }
  }
  
  moveUp() {
    this.direction = -3;
  }
  
  moveDown() {
    this.direction = +3; 
  }
  
}
