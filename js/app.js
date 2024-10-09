/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e) => {
        const letter = key.textContent;
        game.handleInteraction(letter);
    });
});

let game; 

const startBtn = document.getElementById("btn__reset");

startBtn.addEventListener('click', () => {
        game = new Game();//select the class first
        game.startGame();//then select the method in the class that has game functionalities
         //new startGame(game); //this.startGame()?? //this.getRandomPhrase();?
});






