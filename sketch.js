//Web Drawing App

function setup() { 
  //Create fullscreen canvas
  createCanvas(windowWidth, windowHeight-30);
  background(255);
  strokeWeight(5);
  text("Doodle v1.0 - Cody Mitchell \n\nPRESS ANY KEY TO CLEAR",20,20);
} 

function mouseDragged() {
  //Draw line on mouse
	line(mouseX,mouseY,pmouseX,pmouseY);
}

function keyPressed() {
  background(255);
}

//Scroll fixes for mobile
function touchStarted() {
	if (!fullscreen() && windowWidth<480) {
    stroke(255,0,0);
  	fullscreen(true);
  }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

document.ontouchmove = function(e) {
  if (windowWidth<480) { //Check if Mobile
	e.preventDefault();
  }
}