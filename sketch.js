function setup() {
  createCanvas(350, 400);
}

function draw() {

  // Background
  fill('#e4ebef');
  quad(0,0, 350,0, 350,400, 0,400, 0,0)

  noStroke()
  
  //5 = Dökk blár neðst
  fill("#20344e")
  quad(231,282, 125,201, 95,255, 205,322)
  
  //4 = Blár niðri
  fill("#0b46b2")
  quad(75,173, 67,184, 264,302, 270,293)
  
  //3 = Gult niðri
  fill("#f2c200")
  quad(68,140, 54,160, 280,300, 288,290)
  
    //2 = Miðju kassi
  fill("#000309")
  quad(88,18, 18,105, 272,279, 320,220)

  // 1 = Grænt uppi
  fill("#06763b")
  quad(190,55, 165,85, 243,153, 270,118)

}
