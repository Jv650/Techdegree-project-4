/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game; 

const startBtn = document.getElementById("btn__reset");
startBtn.addEventListener('click', (e) => {
      const game =  new Game();//select the class first
        game.startGame();//then select the method in the class that has game functionalities
         //new startGame(game); //this.startGame()?? //this.getRandomPhrase();?
});





