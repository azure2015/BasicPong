// Basic Pong Game
// Written by Azure Sky
// Using P5 Javascript API


var bat;    // bat class variable
var ball;   // ball class variable
var score = 0;  // Global score variable

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
  if(ball.check(bat)) {     // check if ball hits bat
  	score += 10;
  }
  scoreDisplay();
}

function keyPressed() {      // keybutton input, window needs focus to work
 if(keyCode === UP_ARROW) {
    bat.moveUp(); 
 }
 if(keyCode === DOWN_ARROW) {
    bat.moveDown();
 }
  
}

// Function: Score Display
// Displays the current score

function scoreDisplay() {
  textSize(16);
  fill(40,160,40);
  text("Score : " + score,20,20);
}


// Class Ball
// Simple ball square

class Ball {         // ball class even though ball is currently square
  constructor() {
    this.x = 200;
    this.y = 200;
    this.dx = -1;    // currently only moving in x plane
    this.dy = 0;
    this.r =  5;    // need to change his
    this.speed = 3;
  }
  
  move() {
     this.x += (this.dx*this.speed);   //move ball
     this.y += (this.dy*this.speed);
    
     if(this.x > width-this.r) {  //if ball hits canvas width change direction
       this.dx *= -1; 
     }
  }
  
  show() {                   //show ball on screen
    fill(150,50,50);
    //ellipse(this.x,this.y,this.r*2);
    rect(this.x,this.y,this.r*2,this.r*2);
  }
  
  check(bat) {                      // check if bat and ball collide
   if(this.x >= bat.x-this.r && this.x <= bat.x+this.r) {
       if((this.y >= bat.y-(this.r*2)) && ( this.y  <= bat.y+bat.h+ (this.r*2))) {
           this.dx *= -1;  
           return true;
         
     }
   }
  }
}


// Class Bat
// 
class Bat {               // Bat Class
	constructor() {
   this.x = 20;            //Starting position
   this.y = height/2;
   this.w = 10
   this.h = 40;
   this.direction = 0;    // start no direction
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
