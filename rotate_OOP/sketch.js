const Offset = 42
const Usize = 42

class Something {
  constructor (r, c, size) {
    this.offset = Offset
    this.r = r
    this.c = c
    this.size = size
  }

  _rotate() {
    push()
    translate(this.c, this.r)
    let angle = atan2( mouseY - this.r, mouseX - this.c )
    rotate( angle )
    rect (0, 0, 0, this.offset)
    pop()
  }
}

unit_size = Usize
things = []
R, C // used later in draw

function setup() {

  createCanvas( 800, 800 )
  rectMode (CENTER)
  angleMode (DEGREES)
  noStroke()

  const Bright_gold = color( 'rgb(250,215,0,100)' )

  R = height / unit_size
  C = width / unit_size
  let r = -1
  stroke(250,210,0,120)
  while (++r < R) {
    let c = -1
    things [r] = []
    while (++c < C) {
      fill( Bright_gold )
      things [r][c] = new Something( 
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
      things[r][c]._rotate()
    }
  }
}

