function setup() {
    createCanvas(1450, 3588);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(255, 30);
    } else {
      fill(232, 46, 33, 5);
      noStroke();
    }
  
    square(mouseX, mouseY, 30);
  
  }