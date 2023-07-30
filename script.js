// Computer Pick

var compPick = '';

function compMath() {
    var compMath = Math.random();
    if( compMath < 0.33 ) {
        compPick = 'rock';
    } else if( compMath >= 0.33 && compMath < 0.66 ) {
        compPick = 'paper';
    } else {
        compPick = 'scissors';
    }
}
compMath()


// Player Pick & Logic
const playerRock = document.querySelector('.playerRock');
const playerPaper = document.querySelector('.playerPaper');
const playerScissors = document.querySelector('.playerScissors');
const result = document.querySelector('.result');
const compImg = document.getElementById('compImg');
var playerPick = '';

playerRock.addEventListener('click', function() {
    playerPick = 'rock';
    if( compPick == 'rock' ) {
        result.innerHTML = 'Draw';
    } else if( compPick == 'paper' ) {
        result.innerHTML = 'Computer Win';
        compImg.setAttribute('src', 'assets/img/paper.png')
    } else if( compPick == 'scissors' ) {
        result.innerHTML = 'Player Win';
        compImg.setAttribute('src', 'assets/img/scissors.png')
    }
});

playerPaper.addEventListener('click', function() {
    playerPick = 'paper';
    if( compPick == 'rock' ) {
        result.innerHTML = 'Player Win';
    } else if( compPick == 'paper' ) {
        result.innerHTML = 'Draw';
        compImg.setAttribute('src', 'assets/img/paper.png')
    } else if( compPick == 'scissors' ) {
        result.innerHTML = 'Computer Win';
        compImg.setAttribute('src', 'assets/img/scissors.png')
    }
});

playerScissors.addEventListener('click', function() {
    playerPick = 'scissors';
    if( compPick == 'rock' ) {
        result.innerHTML = 'Computer Win';
    } else if( compPick == 'paper' ) {
        result.innerHTML = 'Player Win';
        compImg.setAttribute('src', 'assets/img/paper.png')
    } else if( compPick == 'scissors' ) {
        result.innerHTML = 'Draw';
        compImg.setAttribute('src', 'assets/img/scissors.png')
    }
});


// Reset
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function() {
    result.innerHTML = 'Result';
    playerPick = '';
    compPick = '';
    compImg.setAttribute('src', 'assets/img/rock.png')
    compMath();
});
