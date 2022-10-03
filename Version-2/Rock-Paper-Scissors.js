let readlineSync = require("readline-sync");
let choices = ["rock", "paper", "scissors"];

let userScore= 0;
let computerScore= 0;

function playAGame () {
  let userInput = readlineSync.question(
    "Choose your weapon! Rock, paper or scissors\n"
  );
  userInput = userInput.toLowerCase().replace(/[|&;$%@"<>()+,]/g, "");
  
  while (!choices.some((element) => element == userInput)) {
    userInput = readlineSync.question(
      `${userInput} doesn't count! Please choose either rock, paper or scissors\n`
    );
    // console.log('WRONG')
  }
  
  // let userInput = "rock";
  
  let outcome = "";
  
  
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  // console.log(computerChoice);
  
  switch (userInput) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          outcome = "Tie! Go again";
          break;
        case "paper":
          outcome = "Computer wins";
          break;
        case "scissors":
          outcome = "User wins";
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          outcome = "User wins";
          break;
        case "paper":
          outcome = "Tie! Go again";
          break;
        case "scissors":
          outcome = "Computer wins";
          break;
      }
      break;
    default:
      switch (computerChoice) {
        case "rock":
          outcome = "Computer wins";
          break;
        case "paper":
          outcome = "User wins";
          break;
        case "scissors":
          outcome = "Tie! Go again";
          break;
      }
  }
  
  // console.log('The computer chose... ' + computerChoice)
  console.log("The computer chose... " + computerChoice);
  
  switch (outcome) {
    case "Computer wins":
      computerScore++;
      console.log("The computer wins! Tough luck, champ!");
      break;
    case "User wins":
      userScore++;
      console.log("You won! Great job, kiddo!");
      break;
    case "Tie! Go again":
      console.log("A tie! Not bad... game respect game...");
      break;
  }
  
  console.log(`Scores are... COMPUTER: ${computerScore}, YOU: ${userScore}`)
  playAgain();
}

function playAgain () {
  let userChoice = readlineSync.question('Want to play again?\n')
  userChoice = userChoice.toLowerCase().replace(/[|&;$%@"<>()+,]/g, "");
  userChoice == 'yes' ? playAGame() : finalScore()
}

function finalScore () {
  console.log(`FINAL SCORE IS: 
  COMPUTER: ${computerScore}
  YOU: ${userScore}`)
}

playAGame();
// user wins with paper: https://dribbble.com/shots/5060019-Street-Fight-Rock-Paper-Scissors
