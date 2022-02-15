function setup() {
  createCanvas(1450, 3588);
}

function draw() {
  if (mouseIsPressed) {
    fill(255, 70);
  } else {
    fill(232, 46, 33, 90);
    noStroke();
  }

  square(mouseX, mouseY, 120);

}