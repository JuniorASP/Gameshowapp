const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn= document.querySelector('.btn__reset');
let missedScore = 0;

const getrandomphrases=[ 
    'I have a car'
    ,'I love motors'
    , 'I like taking the bus'
    , 'Love to to visit the beach'
    , 'I like animals'];
const randomNumber = [Math.floor(Math.random() * getrandomphrases.length)];

btn.addEventListener('click', (e) => {
btn.style.display ='none';

});

//gives you random array//
function stub(){
    return stub;
};

function addPhraseToDisplay(){
for(let i = 0; i< getrandomphrases.length; i++ ){
    document.createElement('li');
    phrase.appendChild('li');
    return addPhraseToDisplay;
}

};

function checkletter(){
const checkLetter= document.querySelectorAll('li');
let matchfound= 0;
for(let i=0; i<checkLetter.length; i++){



}


};

