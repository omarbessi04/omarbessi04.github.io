/*
Í þessu verkefni er uppvakningur að rísa upp frá gröfinni sinni fyrir framan gröfina hans!!
*/
function setup() {
  createCanvas(600, 400);
  frameRate(10);
}

y=300
ypp = y
up = true
hand = 100
midx = 300

function draw() {
  background("#000000");
  //Stars
  strokeWeight(5);
  stroke("#ffff80");
  for(var i=0; i<100; i = i+1){
    point(Math.floor((Math.random() * 600) + 1), Math.floor((Math.random() * 300) + 1))
  }
  
  if(ypp == 312){
    up = true
  }else if(ypp == 290){
    up = false
  }

  if(up == true){
    ypp -= 0.5
    y += 0.2
    hand -= 1
  }else{
    ypp += 0.5
    y-= 0.2
    hand += 1
  }
  stroke("#000000")
  
  noStroke()
  //Hand
  fill("#004d00")
  //Base
  quad(250,y, 260,hand, 340,hand, 350,y)
  noStroke()
  //Þumall
  beginShape()
  vertex(midx-40, hand+40)
  vertex(midx-80, hand+40)
  vertex(midx-80, hand+20)
  vertex(midx-30, hand+20)
  endShape()
  //V_Putti
  beginShape()
  vertex(midx-40, hand+1)
  vertex(midx-38, hand-50)
  vertex(midx-20, hand-50)
  vertex(midx-20, hand+1)
  endShape()
  //M_Putti
  beginShape()
  vertex(midx-10, hand+1)
  vertex(midx-9, hand-50)
  vertex(midx+9, hand-50)
  vertex(midx+10, hand+1)
  endShape()
  //H_Putti
  beginShape()
  vertex(midx+39, hand+1)
  vertex(midx+35, hand-50)
  vertex(midx+17, hand-50)
  vertex(midx+18, hand+1)
  endShape()
  //Naglir
  fill("#3a2613")
  //Þumall_Nögl
  beginShape()
  vertex(midx-70, hand+37)
  vertex(midx-90, hand+37)
  vertex(midx-90, hand+23)
  vertex(midx-70, hand+23)
  endShape()
  //V_Putti_Nögl
  beginShape()
  vertex(midx-36, hand-34)
  vertex(midx-36, hand-60)
  vertex(midx-23, hand-60)
  vertex(midx-23, hand-34)
  endShape()
  //M_Putti_Nögl
  beginShape()
  vertex(midx-7, hand-34)
  vertex(midx-7, hand-70)
  vertex(midx+7, hand-70)
  vertex(midx+7, hand-34)
  endShape()
  //H_Putti_Nögl
  beginShape()
  vertex(midx+33, hand-34)
  vertex(midx+33, hand-65)
  vertex(midx+20, hand-65)
  vertex(midx+20, hand-34)
  endShape()
  
  //Dirt
  fill("#604020")
  beginShape()
  vertex(0,y)
  vertex(40,y)
  vertex(200,y)
  vertex(220-(0.13*y),ypp-15)
  vertex(240,y)
  vertex(280-(0.15*y),ypp-30)
  vertex(300,y)
  vertex(330+(0.15*y),ypp-30)
  vertex(360,y)
  vertex(380+(0.13*y),ypp-15)
  vertex(400,y)
  vertex(600,y)
  vertex(600,400)
  vertex(0,400)
  endShape()
  
  //Gravestone
  fill("#999999")
  stroke("#000000")
  beginShape()
  vertex(580,y+90)
  vertex(430, y)
  vertex(410,y-200)
  vertex(570, y-200)
  endShape(CLOSE)
  
  //Skull
  fill("#ffffff")
  noStroke()
  circle(490, y-130, 80)
  //Skull_augu
  fill(0)
  circle(470,y-140,5)
  circle(508,y-140,5)
  //Skull_munnur
  fill("#fffff")
  rect(465, y-120, 50, 50)
  fill(0)
  rect(470,y-100, 9,30)
  rect(485,y-100, 9,30)
  rect(500,y-100, 9,30)
  
}
