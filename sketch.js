let cards = [];

function setup() {
  createCanvas(200, 1000);
  for (let i = 0; i <= 5; i++) {
    let thisImg = loadImage("assets/card"+i+".png", img => {
      let thisCard = new Card(thisImg, 40, 40+i*150);
      cards.push(thisCard);
    });
  }
}

function draw() {
  background(125);
  cards.forEach(element => element.display());
}

function mouseClicked() {
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    if (element.isInside(mouseX,mouseY))
      element.isHidden = true;
  }
}

function keyPressed() {
  cards.forEach(element => element.isHidden=false)
  cards = shuffle(cards); 
  // just shuffling the array isn't enough to change how they
  // are ordered on screen, since each card has its x and y values
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    element.y = 40+i*150;
  }
}