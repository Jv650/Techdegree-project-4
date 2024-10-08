/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//2. Create the Game Class in the game.js File

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = ["Make it happen", "You are your home", "Mindset is everything", "Believe you can and you're halfway there", "Progress not perfection"];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        //for (let i = 0; i < this.phrases.length; i++) 
            const randomPhrase = Math.floor(Math.random() * this.phrases.length);
            return new Phrase(this.phrases[randomPhrase]);//[randomPhrase] return a random chosen phrase from this.phrases
            
            //let activePhr = this.activePhrase;
            //this.activePhrase = new Phrase();
        }

    startGame() {
        const hideStartScreen = document.querySelector('#overlay');
        hideStartScreen.style.display = 'none';
        hideStartScreen.classList.remove('show');
        hideStartScreen.classList.add('hide'); //none

        this.activePhrase = this.getRandomPhrase();//calls the getRandomPhrase() method
        this.activePhrase.addPhraseToDisplay();


        const keyboard = document.querySelectorAll(".key");
            keyboard.forEach(key => {
                key.addEventListener('click', (e) => {
                    const letter = e.target.textContent;
                    this.handleInteraction(letter);
            });
        });
    }

    handleInteraction(character) {
        const disableLetter = document.querySelectorAll(".key");

            disableLetter.forEach(button => { // for each letter button 
                if (button.textContent === character){ //if it matches the phrase letters
                button.disabled = true; //will disable
                button.classList.add('chosen');//and add the chosen css class
                }
        });
                if(this.activePhrase.checkLetter(character)) { //active phrase checks for if character exists in phrase
                    this.activePhrase.showMatchedLetter(character);//show matched letters
    
                    this.checkForWin(); //checks if game is won
                } else {
                    this.removeLife(); //if not, removes a heart/life
                }
        disableLetter.forEach(button => {  //for
                if (button.textContent === character){
                button.classList.add('wrong'); //adds CSS class for incorrect guesses
                button.disabled = true; //disables a clicked button
                }
        });
    }

    checkForWin() {
        const letters = document.querySelectorAll('.key');//.letter??
        let allRevealed = true; 

        letters.forEach(letter => {
            if (!letter.classList.contains('show')) { //contains() or === contains method exists for DOM elements and checks whether a node is a descendant of another node.
                allRevealed = false;
            }
        });
        if (allRevealed) {
            this.gameOver(true);
        }
    }

    removeLife() {
        //const scoreboard = document.getElementById("scoreboard");
        const hearts = document.querySelectorAll('.tries');// maybe add img
        //hearts[this.missed].src = "images/lostHeart.png";
        this.missed +=1 ;
            //const lostHeart = document.querySelectorAll('.tries').src="lostHeart.png";
            //let lostHeart = document.createElement('img');
            //const lostHeart = document.querySelectorAll('.tries').appendChild
            //lostHeart.src = "images/lostHeart.png";
                //let src = document.getElementById('#scoreboard');
                //src.appendChild(lostHeart);
        
            //for (let i = 0; i < hearts.length; i++){
                if (this.missed >= hearts.length){
                    hearts.style.display = 'hide';
                    hearts.parentNode.appendChild(lostHeart) = 'show';
                    this.missed = 5;
                    this.gameOver(true);
                    //break;
                }
    
            this.checkForWin();
       // }
    }

    gameOver(gameWon) {
        const showStartScreen = document.querySelector('#overlay h1');
        //const message = document.querySelector

        if (this.checkForWin()) { //checks if won, if true:
            //showStartScreen.classList.remove('hide'); //
            //showStartScreen.classList.add('show');
            showStartScreen.style.display = 'win';
            message.textContent = 'Congrats, you won!';//winning message
        } else {
            //showStartScreen.classList.remove('hide');
            //showStartScreen.classList.add('show');
            showStartScreen.style.display = 'lose';
            message.textContent = 'Sorry, you lost :('; //losing message 
        }
        //this.activePhrase = this.getRandomPhrase();
        //this.activePhrase.addPhraseToDisplay();
        //showStartScreen.classList.add('show');
        
    }
}
