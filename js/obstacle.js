class Obstacle{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.positionArr = [85, 300];
        this.randomIndex = Math.floor(Math.random()*this.positionArr.length)
        this.left = this.positionArr[this.randomIndex]
        this.top = -250
        this.width = 100
        this.height = 150
        this.element = document.createElement("img")
        this.element.src = "../images/redCar.png";
        this.element.style.position = "absolute"
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`; 
        this.gameScreen.appendChild(this.element)
    }
 
    move(){
        this.top += 2
        this.updatePosition()
     }
    
    updatePosition(){
        this.element.style.top = `${this.top}px`;
    
    }

}