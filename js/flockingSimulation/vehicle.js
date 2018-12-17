// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// The "Vehicle" class

class Vehicle {
  constructor(x,y) {
    this.acceleration = createVector(0, 2);
    this.velocity = createVector(3, 4);
    this.position = createVector(x, y);
    this.r = 4;
    this.maxspeed = 5;
    this.maxforce = 0.10;
  }

  // Method to update location
  update() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelerationelertion to 0 each cycle
    this.acceleration.mult(0);
  }

  applyForce(force) {
    // We could add mass here if we want A = F / M
    this.acceleration.add(force);
  }

  seek(target){
    var desired1 = p5.Vector.sub(target, this.position);
    desired1.setMag(this.maxspeed);
    var steer = p5.Vector.sub(desired1,this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }


separate(vehicles) {
    let desiredseparation = this.r * 10;
    let sum = createVector();
    let count = 0;
    // For every boid in the system, check if it's too close
    for (let i = 0; i < vehicles.length; i++) {
      let d = p5.Vector.dist(this.position, vehicles[i].position);
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        let diff = p5.Vector.sub(this.position, vehicles[i].position);
        diff.normalize();
        diff.div(d); // Weight by distance
        sum.add(diff);
        count++; // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      sum.div(count);
      // Our desired vector is the average scaled to maximum speed
      sum.normalize();
      sum.mult(this.maxspeed);
      // Implement Reynolds: Steering = Desired - Velocity
      let steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  }

  // boundaries() {

  //   let desired = null;

  //   if (this.position.x < d) {
  //     desired = createVector(this.maxspeed, mouseX);
  //   } else if (this.position.x > width - d) {
  //     desired = createVector(-this.maxspeed, mouseY);
  //   }

  //   if (this.position.y < d) {
  //     desired = createVector(this.velocity.x, this.maxspeed);
  //   } else if (this.position.y > height - d) {
  //     desired = createVector(this.velocity.x, -this.maxspeed);
  //   }

  //   if (desired !== null) {
  //     desired.normalize();
  //     desired.mult(this.maxspeed);
  //     let steer = p5.Vector.sub(desired, this.velocity);
  //     steer.limit(this.maxforce);
  //     this.applyForce(steer);
  //   }
  // }

  display() {
    // Draw a triangle rotated in the direction of velocity
    var angle = this.velocity.heading() + PI / 2;

    push();
    translate(this.position.x, this.position.y);
    rotate(angle);

    var gr = color(0, 255, 0);
    var rd = color(255, 0, 0);
    // var col = lerpColor(rd, gr, this.health);

    fill(gr);
    stroke(rd);
    strokeWeight(0);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);

    pop();

  }
}
