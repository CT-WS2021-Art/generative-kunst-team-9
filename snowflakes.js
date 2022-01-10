let snowflakes = []; // array to hold snowflake objects
let bg, maskshape; // declare images
//let isMousePressed = false;
let stage = 'init'; // init, shake, fall, fallslow

let fakeTimer = 1;


function setup() {
  bg = loadImage('images/snowglobe.png') 
  maskshape = loadImage('images/Subtract.png')
  createCanvas(814, 967); // background image and canvas have to be the same size
  for (let i=0; i<400; i++) {
    snowflakes.push({x: random(0, width), y: random(-550,30), d: random(2,6)}) // append snowflake objects
  }
  noStroke(); //removes stroke effect around snowflakes
  console.log('s');
}


function draw() {
  //background(bg);
  shake(); // muss bleiben
  image(bg, 0, 0); // muss auch bleiben lol
  if(mouseIsPressed == true){
    console.log(fakeTimer)
    //translate(random(-5,5),random(-5,5));
    fakeTimer++;
    if(fakeTimer > 150) {
      stage = 'fall';
  }
}
  if(stage =='fall') {
    oneFallDownStep();
  }
}

function shake() {
  image(bg, 0, 0);
  if(mouseIsPressed == true){
    translate(random(-5,5),random(-5,5));
  }
}

  //if(isMousePressed) {
    //if(stage =='init') {
      //fakeTimer++;
      //console.log('t');
      //if(fakeTimer > 600) {
        //stage = 'fall';
      //}
    //}
    //if(stage =='fall') {
      //oneFallDownStep();
    //}
  //}
//}

//function mousePressed() {
  //console.log('x');
  //isMousePressed = true;
//}

function oneFallDownStep() {
  for (let i=0; i<400; i++) {
    let snowflake = snowflakes[i]
    snowflake.y += random(1, 4)
    if(snowflake.y> 540) {
      snowflake.y = 0
      snowflake.x = random(0, width)
    } 
    circle(snowflake.x, snowflake.y, snowflake.d)
  }
  image(maskshape, 0, 0); // Top-left corner of the img is at (0, 0)
}

//function shake() {
