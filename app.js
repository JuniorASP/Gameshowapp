const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn= document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const letter = document.querySelectorAll('.letter')
const li = document.createElement('li');
const h3 = document.createElement('h3')
const ul = document.querySelector('ul');
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
    const randomNumber = Math.floor(Math.random() *phrases.length);
    let phrase = arr[randomNumber]
    return phrase;
    };


    const randomPhrase = getrandomphrases(phrases);
    function addPhraseToDisplay(arr){
        for(let i = 0; i< randomPhrase.length; i++ ){
            let text = arr[i];
            const li = document.createElement('li');
           ul.appendChild(li);
           li.className = 'letter';
           li.textContent = text;
           if (letter === " ") {
            li.className = 'space';
          } else {
            li.className = 'letter';
        } 



        }
    }
    addPhraseToDisplay(randomPhrase);
    
    qwerty.addEventListener('click', (e) =>{
        if(e.target.tagName === 'BUTTON' && e.target.className != 'chosen'){
            const btn = e.target;
            btn.disabled = true;
            btn.className = "chosen";
            const clicketLetter =  e.target.textContent;
            const check = checkLetter(clicketLetter);
            if (check === null) {
                const heart = document.querySelectorAll('img');
            heart[missed].setAttribute('src', 'images/lostHeart.png');
            missed ++;
        

            
            }
        }
        
        });
        

    function checkLetter(selectletter) {
      const islettercorrect = 'power'.includes(selectletter);
        const checkLetter = li;    
        let match = null;
            for(let i = 0; i< checkLetter.length; i++){
                if (li.textContent === arr.textContent) {
                    li.classList.add('show');
                    li.style.transition = "all .5s ease";
                    match = arr.textContent;
    }
    
    }
    }            
        function checkWin(){
            const totalLetters = document.querySelectorAll('.letter');
            const shownLetters = document.querySelectorAll('.show');
            if (shownLetters.length === totalLetters.length) {
                overlay.className = 'win'
                overlay.style.display = 'flex'
                btn.textContent = 'Play Again'
                overlay.appendChild(h3)
                h3.textContent = 'You Won!'
            } else if (missed >= 4) {
                overlay.className = 'lose'
                overlay.style.display = 'flex'
                btn.textContent = 'Try Again'
                overlay.appendChild(h3)
                h3.textContent = 'You Lost!'
            }
        }
        
        

        

/*
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn= document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const letter = document.querySelectorAll('.letter')
const li = document.createElement('li');
const totalLetters = document.querySelectorAll('.letter');
const shownLetters = document.querySelectorAll('.show');
const h3 = document.createElement('h3')
const ul = document.querySelector('ul');
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
    const randomNumber = Math.floor(Math.random() *phrases.length);
    console.log(randomNumber);
    let phrase = arr[randomNumber]
    return phrase;
    };


    const randomPhrase = getrandomphrases(phrases);
    function addPhraseToDisplay(arr){
        for(let i = 0; i< randomPhrase.length; i++ ){
            console.log(randomPhrase);
            let text = arr[i];
            const li = document.createElement('li');
           ul.appendChild(li);
           li.className = 'letter';
           li.textContent = text;
           
          
           
        
        }
    }
    addPhraseToDisplay(randomPhrase);
    

    function checkLetter(selectletter) {
      const islettercorrect = 'power'.includes(selectletter);
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
            const clicketLetter =  e.target.textContent;
            const check = checkLetter(clicketLetter);
            if (check === null) {
                const heart = document.querySelectorAll('img');
            heart[missed].setAttribute('src', 'images/lostHeart.png');
            missed ++;
        
            }
        }
        
        });
        
        const checkWin = () => {
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
*/