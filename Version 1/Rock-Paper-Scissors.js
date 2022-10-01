    
let choices = ["rock", "paper", "scissors"];

let userInput = prompt('Choose your weapon! Rock, paper or scissors')
 userInput = userInput.toLowerCase().replace(/[|&;$%@"<>()+,]/g, "")

while (!choices.some((element) => element == userInput)) {
    userInput = window.prompt(`${userInput} doesn't count! Please choose either rock, paper or scissors`)
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
alert('The computer chose... ' + computerChoice)

switch (outcome) {
    case "Computer wins":
      alert("The computer wins! Tough luck, champ!")
      break;
    case "User wins":
      alert("You won! Great job, kiddo!")
      break;
    case "Tie! Go again":
        alert("A tie! Not bad... game respect game...")
      break;
  }

// user wins with paper: https://dribbble.com/shots/5060019-Street-Fight-Rock-Paper-Scissors
