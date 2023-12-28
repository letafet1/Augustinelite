'use strict';

let secretNumber= Math.trunc(Math.random()*20)+1;

let score = 20;
let highscore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.btn-check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    console.log(secretNumber, typeof secretNumber);

    if(!guess){
        displayMessage('Bir rəqəm daxil edin!');
    }

    else if(guess === secretNumber){
        displayMessage('Təxmininiz doğrudur!');
        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor = '#395e39';
        document.querySelector('.number').style.width='30rem';

        document.querySelector('h1').textContent="Səni çox istəyirəm!"
        document.querySelector('h1').style.color="red"

        if(score>highscore){
            highscore=score;
            document.querySelector('.label-highscore').textContent=highscore;
        }
    }

    else if(guess !==secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber ? 'Təxminindən aşağıdır!':'Təxminindən yüksəkdir');
            document 
        }
    }
});

document.querySelector('.btn-again').addEventListener('click', function(){
    score=20;
    secretNumber= Math.trunc(Math.random()*20)+1;

    displayMessage('Təxmin edilir...');

    document.querySelector('.label-score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor= 'black'
    document.querySelector('number').style.width='15rem'

});
