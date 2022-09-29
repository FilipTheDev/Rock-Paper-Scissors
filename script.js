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
var selBut = document.getElementsByClassName("selBut");
var displayResDiv = document.querySelector("#displayRes");

function gameRound(playerSelection, computerSelection) {    
    // let playerInput = prompt("Do you choose rock, paper or scissors?");
    computerSelection = computerPlay();
    if(playerSelection == computerSelection) {
        if(playerSelection == "rock") {
            displayResDiv.textContent = "It's a tie, you both chose rock";
            return 2
        }
        if(playerSelection == "paper") {
            displayResDiv.textContent = "It's a tie, you both chose paper";
            return 2
        }
        if(playerSelection == "scissors") {
            displayResDiv.textContent = "It's a tie, you both chose scissors";
            return 2
        }
    }
    if(playerSelection == "rock" && computerSelection == "paper") {
        displayResDiv.textContent = "Computer won, paper beats rock";
        return 1;
    }
    if(playerSelection == "rock" && computerSelection == "scissors") {
        displayResDiv.textContent = "Player won, rock beats scissors";
        return 0;
    }
    if(playerSelection == "paper" && computerSelection == "rock") {
        displayResDiv.textContent = "Player won, paper beats rock";
        return 0;
    }
    if(playerSelection == "paper" && computerSelection == "scissors") {
        displayResDiv.textContent = "Computer won, scissors beats paper";
        return 1;
    }
    if(playerSelection == "scissors" && computerSelection == "rock") {
        displayResDiv.textContent = "Computer won, rock beats scissors";
        return 1;
    }
    if(playerSelection == "scissors" && computerSelection == "paper") {
        displayResDiv.textContent = "Player won, scissors beats paper";
        return 0;
    }
    else {
        return false;
    }
}

function game() {
    let playerPoints = 0;
    let compPoints = 0;
    for (let i = 0; i < 5; i++) {
        let roundWin = gameRound();
        //If the function has the value of 2 it means the round was a tie
        if(roundWin == 2) {
            console.log("Player: " + playerPoints + " Computer: " + compPoints);
        }
        //If the function has the value of 0 it means in the round player won
        if(roundWin == 0) {
            playerPoints++;
            console.log("Player: " + playerPoints + " Computer: " + compPoints);
        }
        //If the function has the value of 1 it means in the round computer won
        if(roundWin == 1) {
            compPoints++;
            console.log("Player: " + playerPoints + " Computer: " + compPoints);
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

