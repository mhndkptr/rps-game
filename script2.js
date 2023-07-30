// Game Logic
function getResult(compPick, playerPick) {
    if( compPick == playerPick ) return 'Draw';
    if( compPick == 'rock' ) return ( playerPick == 'paper' ) ? 'Player Win' : 'Computer Win';
    if( compPick == 'paper' ) return ( playerPick == 'rock' ) ? 'Computer Win' : 'Player Win';
    if( compPick == 'scissors' ) return ( playerPick == 'rock' ) ? 'Player Win' : 'Computer Win';
}


// Computer Pick
function getCompPick() {
    const compMath = Math.random();
    if( compMath < 0.33 ) return 'rock';
    if( compMath >= 0.33 && compMath < 0.66 ) return 'paper';
    return 'scissors';  
}   


const gameParams = document.querySelectorAll('.playerCanvas img');
const resultDisplay = document.querySelector('.result');
const compImg = document.getElementById('compImg');
for( let i = 0; i < gameParams.length; i++ ) {    
    gameParams[i].addEventListener('click', function() {
        function getPlayerPick(i) {
            if( i == 0 ) {
                return 'rock';
            } else if( i == 1 ) {
                return 'paper';
            } else { return 'scissors' }
        }
        const compPick = getCompPick();
        const playerPick = getPlayerPick(i);
        const result = getResult(compPick, playerPick);
        resultDisplay.innerHTML = result;
        compImg.setAttribute('src', 'assets/img/' + compPick + '.png');
        compImg.setAttribute('alt', compPick);
    });
}

// Reset Button
const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    resultDisplay.innerHTML = 'Result';
    compImg.setAttribute('src', 'assets/img/rock.png')
    compImg.setAttribute('alt', 'rock')
});