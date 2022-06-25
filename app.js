const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn= document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const letter = document.querySelectorAll('.letter')
const li = document.createElement('li');
let missedScore = 0;


const phrases = [
    'power'
    ,'godfather'
    , 'scarface'
    , 'dragonball'
    , 'naruto'

];

btn.addEventListener('click', () => {
    overlay.style.display ='none';
    
    });

    function getrandomphrases(arr){
    const randomNumber = [Math.floor(Math.random() * getrandomphrases.length)];
    let phrases = arr[randomNumber]
    return phrases;
    };


    const randomPhrase = getrandomphrases(phrases);
    function addPhraseToDisplay(arr){
        for(let i = 0; i< getrandomphrases.length; i++ ){
            let letter = arr[i];
           ul.appendChild('li');
           li.className = 'letter';
           li.textContent = letter;
          
           addPhraseToDisplay(randomPhrase);
        
        }
    }

    

    function checkLetter(button) {
        const checkLetter = li;    
        let match = null;
            for(let i = 0; i< checkLetter.length; i++){
    if (addPhraseToDisplay === checkLetter[i].textContent) {
        checkLetter[i].className += ' show'
        return match;
    
        
    }
    
    }
    }    

    qwerty.addEventListener('click', (e) =>{
        if(e.target.tagName === 'BUTTON' && e.target.className != 'chosen'){
            const button = e.target;
            button.disabled = true;
            button.className = "chosen";
            const check = checkLetter(button);
        
            if (check === null) {
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
        return checkWin
        }
        
        
        
        

/*
function getrandomphrases(){[ 
    'I have a car'
    ,'I love motors'
    , 'I like taking the bus'
    , 'Love to to visit the beach'
    , 'I like animals'];
const randomNumber = [Math.floor(Math.random() * getrandomphrases.length)];
randomNumber.indexOf();
return getrandomphrases;
};

btn.addEventListener('click', () => {
overlay.style.display ='none';

});

function addPhraseToDisplay(){
for(let i = 0; i< getrandomphrases.length; i++ ){
    //const letter = //
    getrandomphrases[i];
   const li = document.createElement('li');
   ul.appendChild('li');
   li.className = 'letter';
   li.textContent = letter;
   addPhraseToDisplay(randomPhrase);


}

};


function checkLetter(button) {
    const letter = document.querySelectorAll('.letter')
        let match = 0;
        const checkLetter= letter;
        for(let i = 0; i< checkLetter.length; i++){
if (addPhraseToDisplay === checkLetter[i].textContent) {
    checkLetter[i].className += ' show'
    return match;

    
}

};

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



}
*/