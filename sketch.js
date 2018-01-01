function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(5);
  text("Doodle - Cody Mitchell \n\nPRESS ANY KEY TO CLEAR",20,20);
} 

function mouseDragged() {
	line(mouseX,mouseY,pmouseX,pmouseY);
}

function keyPressed() {
  background(255);
  text("Press a key to Clear",20,20);
}