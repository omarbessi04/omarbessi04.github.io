  var eyeSize = 40; 
  var faceWidth = 200; 
  var faceHeight = 300; 
  var x = 300; 
  var y = 300;
  var eyeColor1  = 0; 
  var eyeColor2  = 0; 
  var eyeColor3  = 0; 
 
  function setup(){
    createCanvas (600,600); 
    background("#ob46b2")
  }

 
  function draw(){
    
    background("#86bcf2"); 
    
    //Gras
    fill("#4abf2a")
    quad(0,400, 600,400, 600,600, 0,600)
    
    // Sól
    fill("#fff54e")
    circle(450,60,120)
    
    //Bolur
    fill(eyeColor1, eyeColor2, eyeColor3)
    beginShape()
    vertex(x-(1/3*faceWidth),600)
    vertex(x-(1/3*faceWidth),y+(1/3*faceHeight))
    vertex(x+(1/3*faceWidth),y+(1/3*faceHeight))
    vertex(x+(1/3*faceWidth),600)
    endShape()
    
    
    
    fill(400,400,400)
    //Andlit
    ellipse(x, y, faceWidth, faceHeight); 
    
    //Nef
    arc(x, y-(1/20*faceHeight), 10, 20, 30, 40)
    //Munnur
    beginShape()
    //Vinstri
    vertex(x-20,y+(1/4*faceHeight))
    //Hægri
    vertex(x+20,y+(1/4*faceHeight))
    endShape()
    
    fill(eyeColor1, eyeColor2, eyeColor3)
    //Vinstri auga
    circle(x-(1/4*faceWidth), y-(1/6*faceHeight), eyeSize)
    //Hægri auga
    circle(x+(1/4*faceWidth), y-(1/6*faceHeight), eyeSize)
    
    //Hair
    beginShape()
    //Start middle
    vertex(x-20, y-(1/3*faceHeight))
    //Bottom left wing
    vertex(x-(5/8*faceWidth), y-(1/12*faceHeight))
    //Bottom left back
    vertex(x-(1.2/3*faceWidth), y-(1/3*faceHeight))
    //NBottom left wing
    vertex(x-(2.3/4*faceWidth), y-(1/4*faceHeight))
    
    //left peaks
    vertex(x-(1.4/4*faceWidth),y-(1/2*faceHeight))
    vertex(x-(1/4*faceWidth),y-(1/2*faceHeight))
    vertex(x-(0.8/4*faceWidth),y-(1.1/2*faceHeight))
    vertex(x-(0.3/4*faceWidth),y-(1.04/2*faceHeight))
    
    //Middle peak
    vertex(x, y-(1.1/2*faceHeight))
    
    //right peaks
    vertex(x+(0.3/4*faceWidth),y-(1.04/2*faceHeight))
    vertex(x+(0.8/4*faceWidth),y-(1.1/2*faceHeight))
    vertex(x+(1/4*faceWidth),y-(1/2*faceHeight))
    vertex(x+(1.4/4*faceWidth),y-(1/2*faceHeight))

    //NBottom right wing
    vertex(x+(2.3/4*faceWidth), y-(1/4*faceHeight))
    //Bottom right back
    vertex(x+(1.2/3*faceWidth), y-(1/3*faceHeight))
    //Bottom right wing
    vertex(x+(5/8*faceWidth), y-(1/12*faceHeight))
    //Middle
    vertex(x+20, y-(1/3*faceHeight))
    
    //Final line
    vertex(x-20, y-(1/3*faceHeight))
    endShape()

    
  }
  
  function mousePressed(){
    //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
    faceWidth  = random(50,  300); 
    faceHeight = random(100, 400); 
    eyeSize    = random(10,  60);
    eyeColor1  = random(0,  400); 
    eyeColor2  = random(0,  400); 
    eyeColor3  = random(0,  400); 
}
