var choices = {"Anger":0,"Sadness":0,"Daydream":0,"Void":0};

var colorR1 = 255;
var colorG1 = 255;
var colorB1 = 255;
var colorR2 = 255;
var colorG2 = 255;
var colorB2 = 255;
var colorR3 = 255;
var colorG3 = 255;
var colorB3 = 255;


function setup() {
  createCanvas(400,400);
}

function draw() {
  background (255,255,255,30);
  frameRate(4);
  for(var start=0;start <10;start++){
    fill(colorR1, colorG1, colorB1, random(255));
    noStroke();
    ellipse(random(width), random(height), random(60));
  }
  for(var start=0;start <10;start++){
    fill(colorR2, colorG2, colorB2, random(255));
    noStroke();
    ellipse(random(width), random(height), random(60));
  }
  
  for(var start=0;start <10;start++){
    fill(colorR3, colorG3, colorB3, random(255));
    noStroke();
    ellipse(random(width), random(height), random(60));
  }

  //Top Text
  fill(100);
  textAlign(CENTER);
  text("Select Mood",0, 100, width, 100);
  
  //Bottom Text
  text("Space Bar to clear",0,380,width,100);
  
  //Options
  var keyCounter = 0;
  for(var keys in choices){
  fill(150);
  textAlign(CENTER);
  text(keys, (keyCounter *100) +50, height/3);
  keyCounter++;
  }
}
  
function keyPressed(){
    //86 is V
  if(keyCode == 86){
    colorR1= 100;
    colorG1= 100;
    colorB1= 100;
    
    colorR2= 0;
    colorG2= 0;
    colorB2= 0;
    
    colorR3= 50;
    colorG3= 50;
    colorB3 = 50;
  }
    //32 is space bar
  if(keyCode == 32){
    colorR1= 255;
    colorG1= 255;
    colorB1= 255;
    
    colorR2= 255;
    colorG2= 255;
    colorB2= 255;
    
    colorR3= 255;
    colorG3= 255;
    colorB3= 255;
  }
    //65 is A
  if(keyCode == 65){
    colorR1= 225;
    colorG1= 154;
    colorB1= 49;
    
    colorR2= 153;
    colorG2= 0;
    colorB2= 0;
    
    colorR3= 255;
    colorG3= 0;
    colorB3= 0;
  }
    //83 is S
  if(keyCode == 83){
    colorR1= 0;
    colorG1= 76;
    colorB1= 153;
    
    colorR2= 0;
    colorG2= 102;
    colorB2= 102;
    
    colorR3= 0;
    colorG3= 76;
    colorB3= 255;
  }
    //68 is D
  if(keyCode == 68){
    colorR1= 255;
    colorG1= 51;
    colorB1= 255;
    
    colorR2= 255;
    colorG2= 255;
    colorB2= 0;

    colorR3= 75;
    colorG3= 255;
    colorB3= 255;
  }
}