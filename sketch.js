var d0=150;
var d1=100;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(40,150,90); //an RGB color for the canvas' background
  //circle
  noStroke(0); // an RGB color for the circle's border
  fill(227,187,83); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(50,height/2,100,100); // center of canvas, 20px dia
  fill(255,46,116)
  ellipse(50,375,100,150);
  fill(255,50,50)
  ellipse(90,height/2,15,15);
  rect(100,244,400,15);
  fill(40,150,90); //replace w/ 40,150,90 when done
  rect(d0,244,400,15);
}
function mousePressed(){
  d0=d0+50
  
}