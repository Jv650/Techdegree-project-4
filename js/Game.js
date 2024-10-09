/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//2. Create the Game Class in the game.js File

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Make it happen"),    
            new Phrase("You are your home"), 
            new Phrase("Mindset is everything"), 
            new Phrase("Believe you can and youre halfway there"), 
            new Phrase("Progress not perfection"),
        ];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        //for (let i = 0; i < this.phrases.length; i++) 
            const randomIndex = Math.floor(Math.random() * this.phrases.length);
            return this.phrases[randomIndex];//[randomPhrase] return a random chosen phrase from this.phrases
            
            //let activePhr = this.activePhrase;
            //this.activePhrase = new Phrase();
        }

    startGame() {
        
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';//hide overlay
        

        const buttons = document.querySelectorAll('.key');
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove('chosen');
            button.classList.remove('wrong');
        });//will remove selected buttons from previous game upon starting new game
        
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png';
        });//will apply the live heart img to each heart upon starting new game

        this.activePhrase = this.getRandomPhrase();//calls the getRandomPhrase() method
        this.activePhrase.addPhraseToDisplay();//displays

    }

    handleInteraction(letter) {
        const buttons = document.querySelectorAll('.key');

        for (let i = 0; i < buttons.length; i++) { //loop through keys
            if (buttons[i].textContent === letter) {  //check if matches index 
                const button = buttons[i]; 
                button.classList.add('chosen'); //if chosen will change to chosen css color
                button.disabled = true;//disable button
                
                if (this.activePhrase.checkLetter(letter)) {
                    this.activePhrase.showMatchedLetter(letter); 
                    if (this.checkForWin()) {
                        this.gameOver(true); // Call gameOver with win status
                    } 
                   } else { // If the letter is not in the phrase, remove a life
                    button.classList.add('wrong');  //will turn orange
                   this.removeLife(); // Check if the game is over (out of lives) 
                   if (this.missed >= 5) { 
                   this.gameOver(false); // Call gameOver with loss status if greater than or equal to 5
                } 
    
            } 
            //break; // Exit the loop after processing the button
     } 
   } 
}
                              

    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.letter');//.letter??
        const revealedLetters = document.querySelectorAll('.show');
            return hiddenLetters.length === revealedLetters.length;
        }

        

    removeLife() {
        //const scoreboard = document.getElementById("scoreboard");
        const hearts = document.querySelectorAll('.tries img');// maybe add img
        hearts[this.missed].src = "images/lostHeart.png";
        this.missed +=1 ;
            //const lostHeart = document.querySelectorAll('.tries').src="lostHeart.png";
            //let lostHeart = document.createElement('img');
            //const lostHeart = document.querySelectorAll('.tries').appendChild
            //lostHeart.src = "images/lostHeart.png";
                //let src = document.getElementById('#scoreboard');
                //src.appendChild(lostHeart);
        
            //for (let i = 0; i < hearts.length; i++){
                //if (this.missed === 5) {
                    //this.gameOver(false);
                //}
            //this.checkForWin();
    }

    gameOver(gameWon) {
        const startScreen = document.getElementById('overlay');//start page
        startScreen.style.display = 'flex';

        const message = document.getElementById('game-over-message');
        if (gameWon) { //checks if won, if true:
            message.textContent = 'Congrats, you won!';//winning message
            startScreen.className = 'win';
        } else {
            message.textContent = 'Sorry, you lost :('; //losing message 
            startScreen.className = 'lose';
            //showStartScreen.classList.remove('hide');
            //showStartScreen.classList.add('show');        
        }
        //this.activePhrase = this.getRandomPhrase();
        //this.activePhrase.addPhraseToDisplay();
        //showStartScreen.classList.add('show');
        
    }

}


