let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updatescoreElement();

function playGame(playerMove) {
    const computeMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computeMove === 'rock') {
            result = 'You Lose';
        } else if (computeMove === 'Paper') {
            result = 'You Win';
        } else if (computeMove === 'Scissors') {
            result = 'Tie'
        }

    } else if (playerMove == 'paper') {

        if (computeMove === 'rock') {
            result = 'You Win';
        } else if (computeMove === 'Paper') {
            result = 'Tie';
        } else if (computeMove === 'Scissors') {
            result = 'You Lose'
        }

    } else {
        if (computeMove === 'rock') {
            result = 'Tie';
        } else if (computeMove === 'Paper') {
            result = 'You Lose';
        } else if (computeMove === 'Scissors') {
            result = 'You Win'
        }

    }

    if (result === 'You Win') {
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updatescoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computeMove}-emoji.png" class="move-icon"> computer`;



}

function updatescoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computeMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computeMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computeMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computeMove = 'Scissors';
    }

    return computeMove;


}

