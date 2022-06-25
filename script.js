function computerPlay() {
    let randomNum = Math.floor(Math.random()*3);
    if(randomNum == 0) {
        return "rock";
    }
    if(randomNum == 1) {
        return "paper";
    }
    if(randomNum == 2) {
        return "scissors";
    }
}

function gameRound(playerSelection, computerSelection) {
    //player input with prompt
    let playerInput = prompt("Do you choose rock, paper or scissors?");
    playerSelection = playerInput.toLowerCase();
    computerSelection = computerPlay();
    if(playerSelection == computerSelection) {
        if(playerSelection == "rock") {
            console.log("It's a tie, you both chose rock");
            return "2"
        }
        if(playerSelection == "paper") {
            console.log("It's a tie, you both chose paper");
            return "2"
        }
        if(playerSelection == "scissors") {
            console.log("It's a tie, you both chose scissors");
            return "2"
        }
    }
    if(playerSelection == "rock" && computerSelection == "paper") {
        console.log("Computer won, paper beats rock");
        return "1";
    }
    if(playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Player won, rock beats scissors");
        return "0";
    }
    if(playerSelection == "paper" && computerSelection == "rock") {
        console.log("Player won, paper beats rock");
        return "0";
    }
    if(playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Computer won, scissors beats paper");
        return "1";
    }
    if(playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Computer won, rock beats scissors");
        return "1";
    }
    if(playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Player won, scissors beats paper");
        return "0";
    }
    else {
        return false;
    }
}

function game() {
    let playerPoints = 0;
    let compPoints = 0;
    for(let i = 0; i < 1; i++) {
        gameRound();
        if(gameRound() == 2) {
        }
        if(gameRound() == 0) {
            playerPoints++;
        }
        if(gameRound() == 1) {
            compPoints++;
        }
    }
    if(playerPoints == compPoints) {
        console.log("It's a tie!")
    }
    if(playerPoints < compPoints) {
        console.log("Computer won!")
    }
    if(playerPoints > compPoints) {
        console.log("Player won!")
    }
}

