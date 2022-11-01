class Card {
  constructor(img,x,y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = img.width;
    this.h = img.height;
    this.isHidden = false;
  }
  isInside(xPos,yPos) {
    if (xPos > this.x && xPos < this.x+this.w && yPos > this.y && yPos < this.y+this.h )
      return true;
    else
      return false;
  }
  display() {
    if (!this.isHidden) {
      stroke("white");
      strokeWeight(10)
      rect(this.x,this.y,this.w,this.h,5);
      image(this.img, this.x, this.y);
    }
  }
}