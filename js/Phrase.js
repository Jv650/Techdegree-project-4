/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//1. Create the Phrase Class in the phrase.js File
class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); //converts phrase to lower case
    }

    addPhraseToDisplay() {
       const phraseList = document.querySelector('#phrase ul'); //or document.querySelectorAll('#phrase');
       phraseList.innerHTML = '';

       for (let i = 0; i < this.phrase.length; i++) {
        const character = this.phrase[i]; //access character at i index
        const li = document.createElement('li'); //create li elem
        
        //li.textContent = text;

       if (character !== ' ') {
        li.className = 'letter hide';//hide?? //add css class for letters
        li.textContent = character; //set charac inside li
    } else {
        li.className = 'space';
        li.textContent = ' '; //show space
    }
    phraseList.appendChild(li); //attach li to phraselist
  }
}

    checkLetter(letter) { //maybe no character parameter?
        return this.phrase.includes(letter); 
    }


    showMatchedLetter(letter) { //maybe no character parameter? 
        const letters = document.querySelectorAll('.letter');//.letter?
        letters.forEach((li) => { 
            if (li.textContent === letter) { //compares text content w guessed letter
                li.classList.remove('hide');   //remove hide and show matched letter
                li.classList.add('show')       //adds show lass 
            }
        });
    }

}





