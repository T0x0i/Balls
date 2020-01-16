particles = 100
angle = 360
H = 0

function setup() {
  createCanvas(1200, 615);

  colorMode(HSB,255,255,255)
  for (let i = 0; i < particles; i++) {
    speed = random(1200,1300)
  }
  
}

function draw() {
  noStroke()
  translate(width/2, height/2)
  background(0,0,30);
  fill(H%255,255,255)
  for (let i = 0; i < particles; i++) { 
    ellipse(sin(frameCount/speed*i/3)*200,0,10,10)
    rotate(angle/particles)
  }
  H += 0.1
}
      