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

function playRound(userInput) {

}

function makeLowercase(string) {
    return (typeof string === "string") ? 
    string.toLowerCase() : 
    "Please enter a stirng!"
}