humanScore = 0;
computerScore = 0;
EoR = null;

// NPC selection function
function getComputerChoice () {
    num = Math.random()
    if (num < 0.33) {
        npcChoice = "rock"
    }
    else if (num > 0.33 && num < 0.66) {
        npcChoice = "scissors"
    }
    else npcChoice = "paper"
    return npcChoice
  }

// PC input function  
// function getHumanChoice () {
//     // return playerChoice;
// } 

// Game Logic
function playRound (humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == computerChoice) {
        EoR = "Draw";
        console.log(`PC: ${humanChoice} vs NPC: ${computerChoice}`)
    }
    else if ((humanChoice.toLowerCase() == "rock" && computerChoice == "paper") || 
            (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") ||
            (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors")) {
            EoR = "Lose";
            console.log(`PC: ${humanChoice} vs NPC: ${computerChoice}`)
            computerScore ++;
    }
    else {
        EoR = "Win";
        console.log(`PC: ${humanChoice} vs NPC: ${computerChoice}`)
        humanScore ++;
    }
    return console.log(`You ${EoR}!`)
}

// let humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

function playGame () {
    for (let i = 0; i < 1; i++) { /* temp round reduction*/
        if (i > 0) {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
        } 
    playRound(humanSelection, computerSelection);
    console.log(`Round ${i +1}: \n Player Score: ${humanScore} | NPC Score: ${computerScore}`)
}
}
// --- UI ----
const container = document.querySelector("#container");

// Buttons
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    humanSelection = "rock";
    computerSelection = getComputerChoice();
  playRound(humanSelection,computerSelection);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    humanSelection = "paper";
    computerSelection = getComputerChoice();
  playRound(humanSelection,computerSelection);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    humanSelection = "scissors";
    computerSelection = getComputerChoice();
  playRound(humanSelection,computerSelection);
});

// Results

const results = document.createElement("div");
results.classList.add("results");
results.textContent = "This is the glorious text-content!";

container.appendChild(results);

// Test commands
// playGame();

  