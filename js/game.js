class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.player = new Player(this.gameScreen, 110, 150, 400, 250, '../images/car.png');
        this.height = 600;
        this.width = 500;
        this.obstacles = [new Obstacle(this.gameScreen)];
        this.score = 0
        this.lives = 3
        this.isGameOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = 1000/60;
    }


    start(){
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block"
        this.gameIntervalId = setInterval(()=>{
            
            this.gameLoop()
        },this.gameLoopFrequency)

    }

    gameLoop(){
        console.log("Inside game loop")
        this.update()        
        if(this.isGameOver){
            clearInterval(this.gameIntervalId)
        }

    }


    update() {
        this.player.move();
        this.obstacles.forEach((oneObstacle, oneObstacleIndex) => {
            oneObstacle.move();
            if (oneObstacle.top > 600) {
                this.obstacles.splice(oneObstacleIndex, 1);
                oneObstacle.element.remove(); 
                this.score += 1;
                this.obstacles.push(new Obstacle(this.gameScreen));
            }
        });
    }
}