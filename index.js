let playerScore = 0;
let computerScore = 0;

let computerScoreSpan = document.getElementsByClassName("computer-score")[0];
let playerScoreSpan = document.getElementsByClassName("player-score")[0];
let computerChoiceHand = document.getElementsByClassName("computer-hand")[0];
let playerChoiceHand = document.getElementsByClassName("player-hand")[0];
let resultParagraph = document.getElementsByClassName("play-status")[0];

//get random computer choice
function getComputerChoice(){
    // array of choices
    const choices = ['rock', 'paper', 'scissors'];
    //generate random number betweeen 0 and 2 
    const randomNumber = Math.floor(Math.random() * choices.length);
    //use random number to simulate random computer choice
    return choices[randomNumber];
}

function playGame(playerChoice) {
    //get computer choice for that round
    const computerChoice = getComputerChoice();

    //update the UI with the choices made
    updateChoicesHand(playerChoice, computerChoice);
  
    //cover all possible outcomes to determine winner
    switch (playerChoice + computerChoice) {
        // usser wins
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        // computer wins
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        default:
            draw();
            break;
    }
}

// Function Update the UI with the player's and computer's choices
function updateChoicesHand(playerChoice, computerChoice) {
  //refactor
    playerChoiceHand.textContent = playerChoice === "rock" ? "✊" : playerChoice === "paper" ? "✋" : "✌️";
    computerChoiceHand.textContent = computerChoice === "rock" ? "✊" : computerChoice === "paper" ? "✋" : "✌️";
}

// Function to update the score and display the result when player wins
function win() {
  playerScore++;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  resultParagraph.textContent ="Player wins";
}

//Function to update the score and display the result when player loses
function lose() {
  computerScore++;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  resultParagraph.textContent = "Computer wins";
}

// Handle the case when the game is a draw
function draw() {
  resultParagraph.textContent = "Draw!";
}

// Event listerners for buttons to trigger game function
document.getElementById("rock").addEventListener("click", function() {
    playGame("rock",getComputerChoice());
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("scissors", getComputerChoice());
});

//Reset the game
document.getElementById("reset").addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resultParagraph.textContent = "Make your move!";
    playerChoiceHand.textContent = "✌️";
    computerChoiceHand.textContent = "✌️";
});
