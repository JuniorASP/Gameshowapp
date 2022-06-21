const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn= document.querySelector('.btn__reset');
let missedScore = 0;

function getrandomphrases(){[ 
    'I have a car'
    ,'I love motors'
    , 'I like taking the bus'
    , 'Love to to visit the beach'
    , 'I like animals']
const randomNumber = [Math.floor(Math.random() * getrandomphrases.length)];
randomNumber.indexOf();
return getrandomphrases;
};

btn.addEventListener('click', (e) => {
btn.style.display ='none';

});

function addPhraseToDisplay(){
for(let i = 0; i< getrandomphrases.length; i++ ){
    const letter = getrandomphrases[i];
   const li = document.createElement('li');
   ul.appendChild('li');
   li.className = 'letter';
   li.textContent = letter;
   addPhraseToDisplay(randomPhrase);


}

};


checkLetter.addEventListener('click', () =>{
    for(let i = 0; i< checkLetter.length; i++){
        let matchscore = 0;
        const checkLetter = letter;
if (addPhraseToDisplay === checkLetter[i].textContent) {
    checkLetter[i].className += ' show'
    return match;

    
}

    }

});

qwerty.addEventListener('click', (e) =>{
const button = e.target;
if(button.tagName === 'BUTTON') {
    button.disabled = true;
    button.className = "chosen";

    if (letterFound === null) {
        heartArray[missed].src = 'images/lostHeart.png'
        button.className = 'wrong'
        missed++

    }
}

});

const checkWin = () => {
    const totalLetters = document.querySelectorAll('.letter')
    const shownLetters = document.querySelectorAll('.show')
    const h3 = document.createElement('h3')
    if (shownLetters.length === totalLetters.length) {
        removeShowClass()
        overlay.className = 'win'
        overlay.style.display = 'flex'
        startButton.textContent = 'Play Again'
        overlay.appendChild(h3)
        h3.textContent = 'You Won!'
    } else if (missed >= 4) {
        removeShowClass()
        overlay.className = 'lose'
        overlay.style.display = 'flex'
        startButton.textContent = 'Try Again'
        overlay.appendChild(h3)
        h3.textContent = 'You Lost!'
        showCorrectPhrase()
    }

}




