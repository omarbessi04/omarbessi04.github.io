function setup() {
  createCanvas(400, 400);
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function draw() {
  noStroke()
  fill("#ffffff")
  quad(0,0, 400,0, 400,400, 0,400)
  
  //TL
  if(mouseX<200 && mouseY<200){
    fill("#ed1703")
    heart(100,40,140)
  }
  //TR
  if(mouseX>200 && mouseY<200){
    fill("#1c05f3")
    beginShape()
    vertex(300,10)
    vertex(240,100)
    vertex(300,190)
    vertex(360,100)
    endShape(CLOSE)
  }
  //BL
  if(mouseX<200 && mouseY>200){
    fill("#f6f620")
    beginShape()
    vertex(100,210)
    vertex(40,300)
    vertex(100,390)
    vertex(160,300)
    endShape(CLOSE)
  }
  //BR
  if(mouseX>200 && mouseY>200){
    fill("#8be78b")
    heart(300,240,140)
  }
  
}
