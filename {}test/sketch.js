let Angle = 0
let Angle2 = 42

function setup() {

  createCanvas(880,880)
  rectMode (CENTER)
  angleMode (DEGREES)
  //rect_color = color( 255, 200, 0 )

}

function draw() {

  clear()
  background(0)
  translate(width/2, height/2)

  push()
  const rect_color = color( 255, 200, 0, 100 )
  rotate( Angle++ % 360 )
  fill( rect_color )
  noStroke()
  rect( 0,0, 250, 120 )

  const sqr_color = color(200, 255, 0, 100)
  rotate( Angle2-- % 360 )
  fill( sqr_color )
  noStroke()
  square(123, 123, 240, 300)
}
