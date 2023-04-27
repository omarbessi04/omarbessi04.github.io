function setup() {
  createCanvas(600, 400);
  frameRate(10)
}

var up = true
var wave_height = 215

function draw(){
  background("#00004d")
  var mid_x = 300
  var true_midy = 200
  var mid_y = 200

  strokeWeight(1)
  stroke("black")
  
  noStroke()
  fill("#b3b3b3")
  circle(80,80,90)
  fill("#00004d")
  circle(100,80,90)
  
  strokeWeight(5)
  stroke("#ffff80")
  for(var i=0; i<600; i = i+1){
    point(Math.floor((Math.random() * 600) + 1), Math.floor((Math.random() * 290) + 1))
  }

  
  if(wave_height == 260){
    up = true
  }else if(wave_height == 175){
    up = false
  }

  if(up == true){
    wave_height = wave_height - 1
  }else{
    wave_height = wave_height + 1
  }
  noStroke()
  fill("#fffff")
  strokeWeight(4)
  
  fill("#0047b3")
  stroke("#000000")
  beginShape()
  vertex(0,wave_height)
  vertex(40,wave_height-30)
  
  vertex(60,wave_height)
  vertex(100,wave_height-30)
  
  vertex(120,wave_height)
  vertex(160,wave_height-30)
  
  vertex(180,wave_height)
  vertex(220,wave_height-30)
  
  vertex(240,wave_height)
  vertex(280,wave_height-30)
  
  vertex(300,wave_height)
  vertex(340,wave_height-30)
  
  vertex(360,wave_height)
  vertex(400,wave_height-30)
  
  vertex(420,wave_height)
  vertex(460,wave_height-30)
  
  vertex(480,wave_height)
  vertex(520,wave_height-30)
  
  vertex(540,wave_height)
  vertex(580,wave_height-30)
  
  vertex(600,wave_height)
  vertex(600,400)
  vertex(0,400)
  endShape()
}
