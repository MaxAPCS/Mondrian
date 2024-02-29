function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(0);
  stroke(0)
  strokeWeight(5);
  noLoop()
}

function draw() {
  rectSet(0, 0, width, height)
}

function rectSet(x, y, w, h, i = 0) {
  let r = i >= 5 ? 1 : Math.random();
  mainif:
  if (r < 0.4) {
    if (w < width / 5) break mainif;
    let dw = limitedRandom() * w;
    rectSet(x, y, dw, h, i+1)
    rectSet(x + dw, y, w-dw, h, i+1)
    return
  } else {
    if (h < height / 5) break mainif;
    let dh = limitedRandom() * h;
    rectSet(x, y, w, dh, i+1)
    rectSet(x, y + dh, w, h-dh, i+1)
    return
  }
  fill(['yellow', 'white', 'red', 'black', 'blue'][Math.floor(Math.random() * 5)])
  rect(x, y, w, h)
}

function limitedRandom() {
  return Math.random() * 0.6 + 0.2;
}