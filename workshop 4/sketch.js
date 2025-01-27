let Images = [];
let f1, f2, f3, f4, f5, f6;
 
function preload () {
  f1 = loadImage ('Images/flower-1.png');
  f2 = loadImage ('Images/flower-2.png');
  f3 = loadImage ('Images/flower-4.png');
  f4 = loadImage ('Images/flower-5.png');
  f5 = loadImage ('Images/flower-6.png');
  f6 = loadImage ('Images/flower-7.png');
}

function setup() {
  f1.resize (100, 0)
  f2.resize (100, 0)
  f3.resize (100, 0)
  f4.resize (100, 0)
  f5.resize (100, 0)
  f6.resize (100, 0)

  Images.push(f1);
  Images.push(f2);
  Images.push(f3);
  Images.push(f4);
  Images.push(f5);
  Images.push(f6);

  createCanvas(400, 400);
  background (255);
}
function mousePressed() {
  let r = random(Images); 
  image(r, mouseX, mouseY);
}

function draw() {
  
  
 
 
}