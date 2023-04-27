function setup() {
  createCanvas(400, 400);
  frameRate(15)
}

function draw() {
  background("#ffff66");
  
  var x = 13
  var y = 13
  
  //for each line
  fill("#ff3300")
  for(var i=0; i<14; i = i+1){
    if(i != 0){
      y = i*28.5 + 13
      x = 13
    }
    //for each space in line besides #0
    for(var j=0; j<14; j = j+1){
      
      //if first space in line, draw
      if(j == 0){
        circle(x,y,20)
        
      }else{
        x = j*28.5 + 13
        let ran = Math.floor((Math.random() * 3) + 1);
        //decide if circle
        if(ran==1){
          break}
        else{
          circle(x,y,20)
        }
      }
    }
  }
}
