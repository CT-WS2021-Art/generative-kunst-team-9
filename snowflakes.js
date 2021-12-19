let snowflakes = []; // array to hold snowflake objects
let bg;


function setup() {
  bg = loadImage('images/snowglobe.png')
  createCanvas(814, 967);
  for (let i=0; i<100; i++) {
    snowflakes.push({x: random(0, width), y: random(0,30), d: random(2,6)}) // append snowflake objects
  }
}


function draw() {
  
  background(bg);
  for (let i=0; i<100; i++) {
    let snowflake = snowflakes[i]
    snowflake.y += random(1, 5)
    if(snowflake.y> 540) {
      snowflake.y = 0
      snowflake.x = random(0, width)
    } 
    circle(snowflake.x, snowflake.y, snowflake.d)
  }
}