// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Stay Within Walls
// "Made-up" Steering behavior to stay within walls

let v = [];

let debug = true;
let food = [];
let poison = [];
let d = 25;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i=0;i<50;i++){
      var w = random(width);
      var h = random(height);
      v[i] = new Vehicle(w,h);
    }
    for(var k=0; k<50;k++){
      var x = random(width);
      var y = random(height);
      food.push(createVector(x,y));
    }
    for(var k=0; k<50;k++){
      var x = random(width);
      var y = random(height);
      poison.push(createVector(x,y));
    }
 }

function draw() {
  background(59, 164, 206);
  // var target = createVector(mouseX, mouseY);
  var target = createVector(windowWidth/2, windowHeight/3);
  // ellipse(target.x,target.y,48,48);
  // Call the appropriate steering behaviors for our agents
    for(var j=0;j<50;j++){
      fill(0,255,0);
      noStroke();
      ellipse(food[j].x,food[j].y,5,5);
    }
    for(var l=0;l<50;l++){
      fill(255,0,0);
      noStroke();
      ellipse(poison[l].x,poison[l].y,5,5);
    }
    for(var i=0;i<50;i++){
      // v[i].boundaries();
      // v[i].separate(v);
      v[i].seek(target);
      v[i].update();
      v[i].display();
    }

}

function mousePressed() {
  debug = !debug;
}