const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const spock = document.getElementById('spock');
const lizard = document.getElementById('lizard');

const computerScore = document.getElementById('compScore')
const userScore = document.getElementById('userScore')

const yourChoice = document.getElementById('your-choice')
const comChoice = document.getElementById('comp-choice')
const clickedOnMe = document.getElementById('clicked-on')

const strategy = ['paper', 'rock', 'scissors', 'lizard', 'spock']
const winList = ['paperrock', 'rockscissors', 'scissorspaper', 'lizardpaper', 'spockrock', 'rocklizard', 'lizardspock', 'scissorslizard', 'paperspock', 'spockscissors'];

let cscore = null;
let uscore = null;

function computerPicks() {
    let compChoice = Math.floor(Math.random()*5);
    comChoice.innerHTML = strategy[compChoice];
    let x = document.getElementById(strategy[compChoice])
    x.style.backgroundColor = 'red';
    youPick();
}

function youPick(){
    let choiceSet = document.getElementsByClassName('choice');
    for (let i=0; i<choiceSet.length; i++) {
        choiceSet[i].addEventListener('click', yeay);
    }
}

function yeay(){
    computerPicks();
    console.log('You picked ' + this.id);
}

youPick();
