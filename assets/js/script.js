const paper = document.getElementById('paper');
const computerScore = document.getElementById('compScore')
const userScore = document.getElementById('userScore')

const strategy = ['paper', 'rock', 'scissors', 'lizard', 'spock'];
const winList = ['paperrock', 'rockscissors', 'scissorspaper', 'lizardpaper', 'spockrock', 'rocklizard', 'lizardspock', 'scissorslizard', 'paperspock', 'spockscissors'];

let cscore = null;
let uscore = null;

function computerPicks() {
    let compChoice = Math.floor(Math.random()*5);
    console.log(compChoice)
    if (strategy[compChoice] === 'paper') {
        uscore += 1;
        userScore.innerText = uscore;
    } else {
        cscore += 1;
        computerScore.innerText = cscore;
    }
};

paper.addEventListener('click', computerPicks);
