function getComputerChoice(){
    let numChoice = Math.floor((Math.random()*3) +1)
    if ( numChoice == 1 ) {
        return "rock"
    } else if (numChoice == 2) {
        return "paper"
    } else {
        return "scissors"
    }

}

