function game() {
    // This funciton plays the game
    // It will need to be initialized in the console
    console.log("Let's play a game! Best of 5!")
    let score = 0
    let result
    // This loop runs 5 times and keeps track of score
    let i = 0
    while ( i < 5 ){
        result = playRound(prompt("Please enter Rock, Paper, or Scissors!"))
        console.log (result)
        score = score + scoreKeeper(result)
        i = i + Math.abs(scoreKeeper(result))
    }
    // This *IF* outputs final game results
    if ( score < 0 ) {
        console.log("You lost in this game!")
    } else if ( score > 0 ) {
        console.log("You won in this game!")
    } else {
        console.log("Oops! Something went wrong...")
    }
}


function scoreKeeper(result){
    // Check what message and add or subtract accordingly
    result = result.slice(4,5)
    if ( result === "t") {
        return 0
    } else if ( result === "w") {
        return 1
    } else if ( result === "l") {
        return -1
    } else {
        return 0
    }
}

function getComputerChoice(){
    // This function returns a randomly selected
    // rock, paper, or scissors
    let numChoice = Math.floor((Math.random()*3) +1)
    if ( numChoice == 1 ) {
        return "rock"
    } else if (numChoice == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection,computerSelection = getComputerChoice()) {
    playerSelection = makeLowercase(playerSelection)
    // This switch checks to see who wins and returns
    // the message stating what happened
    switch (true){
        case playerSelection === computerSelection :
            return "You tied! Try again"
            break
        case (playerSelection === "rock" && 
        computerSelection === "scissors"):
            return "You won! Rock beats Scissors!"
            break
        case (playerSelection === "rock" && 
        computerSelection === "paper"):
            return "You lost! Paper beats Rock!"
            break
        case (playerSelection === "paper" && 
        computerSelection === "scissors"):
            return "You lost! Scissors beats Paper!"
            break
        case (playerSelection === "paper" && 
        computerSelection === "rock"):
            return "You won! Paper beats Rock!"
            break
        case (playerSelection === "scissors" && 
        computerSelection === "rock"):
            return "You lost! Rock beats Scissors!"
            break
        case (playerSelection === "scissors" && 
        computerSelection === "paper"):
            return "You won! Scissors beats Paper!"
            break
        default:
            return "Please enter either Rock, Paper, or Scissors"        
    }
}

function makeLowercase(string) {
    // This function just returns a string all lowercase
    return (typeof string === "string") ? 
    string.toLowerCase() : 
    "Please enter a stirng!"
}