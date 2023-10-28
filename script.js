const RockPaperScissors = ["steen", "papier", "schaar"];

const choiceRock = document.querySelector("#steen");
const choicePaper = document.querySelector("#papier");
const choiceScissors = document.querySelector("#schaar");

const result = document.querySelector("#result");
const scoreOutput = document.querySelector("#scoreOutput");

const restartGame = document.querySelector("#restart");

let userScore = 0;
let computerScore = 0;

scoreOutput.innerHTML = `Jij: <strong>${userScore}</strong> Computer: <strong>${computerScore}</strong>`;

choiceRock.addEventListener("click", function(event) { 
    event.preventDefault()
    runGame("steen");
});
choicePaper.addEventListener("click", function(event) {
    event.preventDefault()
    runGame("papier");
});
choiceScissors.addEventListener("click", function(event) {
    event.preventDefault()
    runGame("schaar");
});

restartGame.style.display = "none";

restartGame.addEventListener("click", function() {
    userScore = 0;
    computerScore = 0;

    result.innerHTML = "";
    scoreOutput.innerHTML = `Jij: <strong>${userScore}</strong> Computer: <strong>${computerScore}</strong>`;

    restartGame.style.display = "none";


})


function runGame(playerSelection) {
    
    const random = Math.floor(Math.random() * RockPaperScissors.length);
    const computerSelection = RockPaperScissors[random];

    if (userScore === 3 || computerScore === 3) {
        return;
    }

        if (playerSelection === "steen" && computerSelection === "schaar" ||
            playerSelection === "papier" && computerSelection === "steen" ||
            playerSelection === "schaar" && computerSelection === "papier"
        ) {
            result.innerHTML = `Computer koos <strong>${computerSelection}</strong>. <span style="color: #364F6B;">Punt voor jou!</span>`;
            userScore += 1;
            
        } else if (playerSelection.value === computerSelection) {
            result.innerHTML = `Jullie kozen allebei <strong>${computerSelection}</strong>. Gelijk!`;
    
        } else {
            result.innerHTML = `Computer koos <strong>${computerSelection}</strong>. <span style="color: #364F6B;">Punt voor computer!</span>`;
            computerScore += 1;
    
        } 
        
        scoreOutput.innerHTML = `Jij: <strong>${userScore}</strong> Computer: <strong>${computerScore}</strong>`;
    
        if (userScore === 3) {
            scoreOutput.innerHTML = `<span style="font-size: 3rem; color: #364F6B;">GEWONNEN!</span>`;
            disableGame();

        } else if (computerScore === 3) {
            scoreOutput.innerHTML = `<span style="font-size: 3rem; color: #364F6B;">VERLOREN!</span>`;
            disableGame();
        }
    
        }

function disableGame() {
    choiceRock.disabled = true;
    choicePaper.disabled = true;
    choiceScissors.disabled = true;

    restartGame.style.display = "block";

}

