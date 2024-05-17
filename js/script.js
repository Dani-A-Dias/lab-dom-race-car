window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const ourGame = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });

    document.addEventListener('keydown', (event)=> {
      console.log("a key was pressed", event);
      if(event.code === "ArrowRight"){
          ourGame.player.directionX = 1
      }else if(event.code === "ArrowLeft"){
         ourGame.player.directionX = -1
      }else if(event.code === "ArrowUp"){
        ourGame.player.directionY = -1
      }else if(event.code === "ArrowDown"){
        ourGame.player.directionY = 1
      }
    })

    document.addEventListener("keyup", ()=>{
      ourGame.player.directionX = 0
      ourGame.player.directionY = 0
    })
  function startGame() {
    console.log("start game");
    ourGame.start();
  }
};
