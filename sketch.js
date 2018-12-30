// Basic Pong Game
// Written by Azure Sky
// Using P5 Javascript API


var bat;    // bat class variable
var ball;   // ball class variable

function setup() {
  createCanvas(400, 400);  // set up canvas
  bat = new Bat();         // init 
  ball = new Ball();
}

function draw() {       
  background(20);      //background colour
  bat.show();          //display bat and move
  bat.move();
  ball.show();				// display ball and move
  ball.move();
  ball.check(bat);    // check if ball hits bat
  
}

function keyPressed() {      // keybutton input, window needs focus to work
 if(keyCode === UP_ARROW) {
    bat.moveUp(); 
 }
 if(keyCode === DOWN_ARROW) {
    bat.moveDown();
 }
  
}

class Ball {         // ball class even though ball is currently square
  constructor() {
    this.x = 200;
    this.y = 200;
    this.dx = -1;    // currently only moving in x plane
    this.dy = 0;
    this.r =  5;    // need to change his
  }
  
  move() {
     this.x += this.dx;   //move ball
     this.y += this.dy;
    
     if(this.x > width-this.r) {  //if ball hits canvas width change direction
       this.dx *= -1; 
     }
  }
  
  show() {                   //show ball on screen
    fill(150,50,50);
    rect(this.x,this.y,this.r*2,this.r*2);
  }
  
  check(bat) {                      // check if bat and ball collide
   if(this.x == bat.x+bat.w) {
       if((this.y >= bat.y-(this.r*2)) && ( this.y  <= bat.y+bat.h+ (this.r*2))) {
           this.dx *= -1;  
     }
   }
  }
}

class Bat {               // Bat Class
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
