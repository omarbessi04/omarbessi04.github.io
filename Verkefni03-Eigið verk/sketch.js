function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(6)
  
  //Border
  fill("#fbfbfb")
  quad(0,0, 400,0, 400,400, 0,400)
  
  // Lárétt lína
  line(0,200, 400,200)
  
  // Lóðrétt lína
  line(200,0, 200,400)
  
  noStroke()
  fill("#000936")
  
  
  //Neðsti þríhyrningur
  triangle
  (200,380, 
   180,330, 
   220,330)
  
  //Upp frá þríhyrning
  quad
  (180,330, 
   160,60, 
   240,60, 
   220,330)
  
  //Kross
  triangle
  (110,195, 
   120,175, 
   120,215)
  
  quad
  (120,175,
   280,175, 
   280,215, 
   120,215)
  
  triangle
  (290,195,
  280,175,
  280,215)
  
  //Efsti þríhyrningur
  triangle
  (200, 40,
   160,60, 
   240,60)
  
  //Vinstri armur
  quad(
  160,60,
  170,100,
  100,40,
  100,20)
  
  //Hægri armur
  quad(
  240,60,
  230,100,
  300,40,
  300,20)

  //Vinstri niður
  quad(
  100,40,
  100,20,
  50,60,
  50,70)
  
  //Hægri niður
  quad(
  300,40,
  300,20,
  350,60,
  350,70)
  
  //Vinstri vængur
  quad(
  50,60,
  40,70,
  120,400,
  130,400)
  
  //Hægri vængur
  quad(
  350,60,
  360,70,
  290,400,
  280,400)
  
  //Neðsta lína
  quad(
  120,400,
  120,380,
  290,380,
  280,400)
}
