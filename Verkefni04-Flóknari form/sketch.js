function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  var mid = 200

  background(400);
  
  fill("#e5de00")
  beginShape()
  //top
  vertex(mid,20)
  //top_l_stop
  vertex(mid-50, mid-90)
  //vinstri hönd
  vertex(mid-140, mid-80)
  //vinstri_h_stop
  vertex(mid-60, mid-10)
  //vinstriFotur
  vertex(mid-100, mid+100)
  //vinstriFotur_stop
  vertex(mid, mid+50)
  //hægriFotur
  vertex(mid+100, mid+100)
  //hægri fotur stopp
  vertex(mid+60, mid-10)
  //hægri hönd 
  vertex(mid+140, mid-80)
  //top_r_stop
  vertex(mid+50, mid-90)
  //top
  vertex(200,20)
  endShape()
}
