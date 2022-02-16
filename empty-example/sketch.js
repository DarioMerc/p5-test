function setup() {
  createCanvas(500, 500, WEBGL)
  angleMode(DEGREES)
}

function draw() {
  background(0)

  rotateX(60)

  noFill()
  stroke(255)

  for (let i = 0; i < 50; i++) {
    let r = map(sin(frameCount/3),-1,1,0,255)
    let g = map(i,0,20,0,255)
    let b = map(cos(frameCount/3),-1,1,255,0)

    stroke(r,g,b)
    rotate(frameCount/100 * i/7)
    beginShape()
    for (let j = 0; j < 360; j += 45) {
      let rad = i * 3
      let x = rad * cos(j)
      let y = rad * sin(j)
      let z = sin(frameCount * 2 + i * 5) * 50
      vertex(x, y, z)
    }
    endShape(CLOSE)  
  }
}