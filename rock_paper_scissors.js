humanScore = 0;
computerScore = 0;
EoR = null;
roundNum = 0;

//                      ------- NPC Logic --------

function getComputerChoice () {
    let npcOptions = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * (3));
    let npcChoice = npcOptions.at(randomNumber);
    return npcChoice;
}

//                      ------- Game Logic --------

function playRound (humanChoice, computerChoice) {
    // Round Play

    if (humanChoice.toLowerCase() == computerChoice) {
        EoR = "Draw";
    }
    else if ((humanChoice.toLowerCase() == "rock" && computerChoice == "paper") || 
            (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") ||
            (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors")) {
            EoR = "Lose";
            computerScore ++;
    }
    else {
        EoR = "Win";
        humanScore ++;
    }
    //Round Updates

    round_update.textContent = `PC: ${humanChoice} vs NPC: ${computerChoice}`;
    roundNum ++;
    eor.textContent =`-You ${EoR}-`;
    results.textContent = `Round ${roundNum}: \n Player Score: ${humanScore} | NPC Score: ${computerScore}`;
    // Game End Condition 

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            eog.textContent = "GAME OVER: The Player Wins!";
        }
        else {
            eog.textContent = "GAME OVER: The NPC Wins!";
        }
        eor.textContent = ``;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
}

//                      ------- UI --------

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

// Round Update

const round_update = document.createElement("div");
round_update.classList.add("round_update");
round_update.textContent = `PC: ??? vs NPC: ???`;

container.appendChild(round_update);

// EoR

const eor = document.createElement("div");
eor.classList.add("eor");
eor.textContent = ``;

container.appendChild(eor);


// Results

const results = document.createElement("div");
results.classList.add("results");
results.textContent = `Round ${roundNum}: \n Player Score: ${humanScore} | NPC Score: ${computerScore}`;

container.appendChild(results);

// EoG

const eog = document.createElement("div");
eog.classList.add("eog");
eog.textContent = "";

container.appendChild(eog);


  