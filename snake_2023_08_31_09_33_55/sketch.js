let motion = false;
let ios = false;

var s;
var scl = 40;

var food;

function preload() {
  tm = loadImage("time.png");
  bar = loadImage("bar.png");
  bg = loadImage("background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}


function draw() {
  bg.resize(windowWidth, windowHeight);
  background(bg);
  image(tm, 97,87);
  image(bar, 0,0);
  s.update();
  s.show();
  
  if (s.eat(food)){
  pickLocation();
  }
  
  fill(255);
  rect(food.x, food.y, scl, scl);
  
  let zMotion = round(width / 5 * abs(radians(rotationZ) - PI))
  // x and y values moved from the centre point
  let yMotion = round(rotationX/2)
  let xMotion = round(rotationY/2)
  
  if (yMotion >5){
  s.dir(0,1);
} else if (yMotion <-5){
  s.dir(0,-1);
} else if (xMotion >5){
  s.dir(1,0);
} else if (xMotion <-5){
  s.dir(-1,0);
}
  
}




if (typeof DeviceMotionEvent.requestPermission === 'function') {
  document.body.addEventListener('click', function() {
    DeviceMotionEvent.requestPermission()
      .then(function() {
        console.log('DeviceMotionEvent enabled');

        motion = true;
        ios = true;
      })
      .catch(function(error) {
        console.warn('DeviceMotionEvent not enabled', error);
      })
  })
} else {
}



