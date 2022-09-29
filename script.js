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
const rock = document.getElementById("rock");
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
var h2 = document.getElementById('h2');
var h3 = document.getElementById('h3');


let playerPoints = 0;
let compPoints = 0;

function gameRound(playerSelection, computerSelection) {    
    
    computerSelection = computerPlay();
    
    // Ouputs of a tie
    if(playerSelection == computerSelection) {
        if(playerSelection == "rock") {
            displayResDiv.textContent = "It's a tie, you both chose rock";

        }
        if(playerSelection == "paper") {
            displayResDiv.textContent = "It's a tie, you both chose paper";

        }
        if(playerSelection == "scissors") {
            displayResDiv.textContent = "It's a tie, you both chose scissors";

        }
    }
    // Outputs of winning and losing

    if(playerSelection == "rock" && computerSelection == "paper") {
        displayResDiv.textContent = "Computer won, paper beats rock";
        compPoints++;
    }
    if(playerSelection == "rock" && computerSelection == "scissors") {
        displayResDiv.textContent = "Player won, rock beats scissors";
        playerPoints++;
    }
    if(playerSelection == "paper" && computerSelection == "rock") {
        displayResDiv.textContent = "Player won, paper beats rock";
        playerPoints++;
    }
    if(playerSelection == "paper" && computerSelection == "scissors") {
        displayResDiv.textContent = "Computer won, scissors beats paper";
        compPoints++;
  
    }
    if(playerSelection == "scissors" && computerSelection == "rock") {
        displayResDiv.textContent = "Computer won, rock beats scissors";
        compPoints++;
    }
    if(playerSelection == "scissors" && computerSelection == "paper") {
        displayResDiv.textContent = "Player won, scissors beats paper";
        playerPoints++;
    }
    h2.textContent = ("Player: " + playerPoints + " Computer: " + compPoints);
    
    if(playerPoints == 5 || compPoints == 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if(playerPoints < compPoints) {
            alert("Computer won!")
            h3.textContent = "You lost! *wah wah*"
        }
        if(playerPoints > compPoints) {
            alert("Player won!")
            h3.textContent = "Congratulations, you won! Now go touch some grass"
        }
        
    }
}