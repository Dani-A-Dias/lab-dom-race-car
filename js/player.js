class Player{
constructor(gameScreen, width, height, playerImage){
this.gameScreen = gameScreen
this.left = (500/2)-(this.width/2)
this.top = 400;
this.width = width;
this.height = height;
this.directionX = 0;
this.directionY = 0;
this.element = document.createElement("img")
this.element.src = playerImage;
this.element.style.position = "absolute"
this.element.style.height = `${this.height}px`
this.element.style.width = `${this.width}px`
this.gameScreen.appendChild(this.element)
}

move(){

}

updatePosition(){

}

didCollide(obstacle){

}
}