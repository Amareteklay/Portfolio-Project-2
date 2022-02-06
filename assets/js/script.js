const computerScore = document.getElementById('compScore')
const userScore = document.getElementById('userScore')

const yourChoice = document.getElementById('user-choice')
const comChoice = document.getElementById('computer-choice')
const winner = document.getElementById('winner')

const strategy = document.getElementsByClassName('choice')
const winList = ['paperrock', 'rockscissors', 'scissorspaper', 'lizardpaper', 'spockrock', 'rocklizard', 'lizardspock', 'scissorslizard', 'paperspock', 'spockscissors'];

let cscore = 0;
let uscore = 0;

function computerPicks() {
    let randIndex = Math.floor(Math.random()*5);
    return strategy[randIndex].id
}

function play(){
    for (let i=0; i<strategy.length; i++) {
        strategy[i].addEventListener('click', determineWinner);
    }
}

function determineWinner(){
    let computer = computerPicks();
    let user = this.id;
    let userComputer = user + computer;
    if (winList.includes(userComputer)){
        uscore +=1;
        userScore.innerHTML = uscore;
        computerScore.innerHTML = cscore;
        yourChoice.innerHTML = user;
        comChoice.innerHTML = computer;
        winner.innerHTML = 'You Won!';
    } else if (user === computer){
        userScore.innerHTML = uscore;
        computerScore.innerHTML = cscore;
        yourChoice.innerHTML = user;
        comChoice.innerHTML = computer;
        winner.innerHTML = 'It is draw';
    }
    else {
        cscore +=1;
        userScore.innerHTML = uscore;
        computerScore.innerHTML = cscore;
        yourChoice.innerHTML = user;
        comChoice.innerHTML = computer;
        winner.innerHTML = 'You lost';
    }
}

play();
