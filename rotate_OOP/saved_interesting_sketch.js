class Chip {
  constructor (r, c, size) {
    this.offset = 9
    this.r = r
    this.c = c
    this.size = size
  }

  _rotate() {
    push()
    translate(this.c, this.r)
    let angle = atan2( mouseY - this.r, mouseX - this.c )
    rotate( angle )
    let ofs = this.offset
    line(
      0, 0,
      this.c + ofs,
      this.r + ofs,
    )
    //rect (0, 0, this.size/1.5, this.size/1.5)
    pop()
  }
}

unit_size = 42
D = []
let R, C

function setup() {

  createCanvas( 1200, 800 )
  rectMode (CENTER)
  // angleMode (DEGREES)
  //noStroke()

  R = height / unit_size
  C = width / unit_size
  let r = -1
  while (++r < R) {
    let c = -1
    D[r] = []
    while (++c < C) {
      //fill(250,200,0,120)
      stroke(250,200,0,120)
      D[r][c] = new Chip( 
        unit_size / 2 + r * unit_size, 
        unit_size / 2 + c * unit_size, 
        unit_size
      )
    }
  }
}

function draw () {
  background(0)
  let r = -1
  while (++r < R) {
    c = -1
    while (++c < C) {
      D[r][c]._rotate()
    }
  }
}

