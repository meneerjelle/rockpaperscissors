const RockPaperScissors = ["steen", "papier", "schaar"];
const random = Math.floor(Math.random() * RockPaperScissors.length);

let computerSelection = RockPaperScissors[random];

let playerSelection = prompt("Choose Rock, Paper or Scissors.").toLowerCase();

if (playerSelection === computerSelection) {
    alert("Tie!");
} else if ((playerSelection === "steen" && computerSelection === "schaar") || 
          (playerSelection === "papier" && computerSelection === "steen") ||
          (playerSelection === "schaar" && computerSelection === "papier"))
{
    alert("Win!");
} else {
    alert("Lose!");
}