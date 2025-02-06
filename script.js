let humanScore;
let computerScore;

playGame();

function getHumanChoice() {
    let output = prompt("Please type your choice: ").toLowerCase();
    if(output == "rock" || output == "paper" || output == "scissors") {
        return output;
    }else {
        console.log("Please select a valid answer.");
        output = getHumanChoice();
        return output;
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let output;

    switch(randomNumber) {
        case 0:
            output = "rock";
            break;
        case 1:
            output = "paper";
            break;
        case 2:
            output = "scissors";
    }

    return output;
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    console.log("<>--- ROCK, PAPER, SCISSORS ---<>");

    for(let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("RESULTS:");
        console.log(`Player: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    if(humanScore > computerScore) {
        console.log("Congratulations! You win.");
    }else if(computerScore > humanScore) {
        console.log("You lose! Better luck next time!");
    }else {
        console.log("Draw! Better luck next time!");
    }
}

function playRound(humanChoice, computerChoice) {

    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    console.log(`Draw! Both chose ${humanChoice}`);
                    break;
                case "paper":
                    console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
                    computerScore++;
                    break;
                case "scissors":
                    console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
                    humanScore++;
                    break;
                }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
                    humanScore++;
                    break;
                case "paper":
                    console.log(`Draw! Both chose ${humanChoice}`);
                    break;
                case "scissors":
                    console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
                    computerScore++;
                    break;
                }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
                    computerScore++;
                    break;
                case "paper":
                    console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
                    humanScore++;
                    break;
                case "scissors":
                    console.log(`Draw! Both chose ${humanChoice}`);
                    break;
                }
    }
}