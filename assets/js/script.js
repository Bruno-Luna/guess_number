const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status  = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const guess = {
    max: 10, // numero máximo que pode ser sorteado
    attemptsNumber: 0, // numero de tentativas, vai começar no zero
    numberDrawn: function randomValue(){ // função que vai pensar num numero randômico
        return Math.round(Math.random() * this.max); // Math.random -> gera um numero quebrado por exemplo: 1.3, 4.7...
        //  Math.round -> vai arredondar um numero se for sorteado 1.4, vai aparecer 1. Se for sorteado 7.7, vai aparecer 8.
    }
};

let numberDrawn = guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativas: ' + value
};

function handleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;
    if(!kick){
        alert('Digite um valor');
        return;
    };

    updateAttempt(attempt, ++guess.attemptsNumber);

    if(numberDrawn == kick){
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!!';
        result.style.transition = '0.5s';
        result.style.backgroundColor = '#e5e5e5';
        result.style.color = '#14213d';
        status.style.color = '#14213d';
        clear();
    } else if(numberDrawn > kick){
        status.innerHTML = 'Dica: O número é <strong>maior</strong>.';
        status.style.color = '#e5e5e5'
        clear();
    } else if(numberDrawn < kick){
        status.innerHTML = 'Dica: O número é <strong>menor</strong>.';
        status.style.color = '#e5e5e5';
        clear();
    }
};

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';

};

function restart(){
    document.location.reload(true);

};

function clear(){
    document.getElementById('kick').value = '';
}