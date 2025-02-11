let humanScore;
let computerScore;


function getHumanChoice(input) {
    return input;
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
    let i = 0;
    console.log(`Round ${++i}`);
    div.addEventListener("click", (event) => {
        let humanChoice = event.target.textContent;
        let computerChoice = getComputerChoice();
        status.textContent = playRound(humanChoice, computerChoice);

        let listItem = document.createElement("li");
        let humanChoiceText = document.createElement("p");
        let computerChoiceText = document.createElement("p");

        listItem.style.display = "flex";
        listItem.style.flexDirection = "row";
        humanChoiceText.style.margin = "4px";
        computerChoiceText.style.margin = "4px";

        listItem.appendChild(humanChoiceText);
        listItem.appendChild(computerChoiceText);
        list.appendChild(listItem);

        humanChoiceText.textContent = humanChoice;
        computerChoiceText.textContent = computerChoice;



        console.log("RESULTS:");
        console.log(`Player: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
        resultDisplay.textContent = `${humanScore} : ${computerScore}`;

        if(humanScore >= 5 || computerScore >= 5) {
            if(humanScore > computerScore) {
                alert("Congratulations! You win.!!!!!!!!!!!!!");
           }else if(computerScore > humanScore) {
                alert("You lose! Better luck next time!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            }else {
                alert("Draw! Better luck next time!!!!!!!!!!!!!!!!!!!!!!!!!");
            }
            resultDisplay.textContent = `${humanScore} : ${computerScore}`;
            humanScore = 0;
            computerScore = 0;
            resultDisplay.textContent = `${humanScore} : ${computerScore}`;
            list.textContent = '';
        }
    });
    
}

function playRound(humanChoice, computerChoice) {

    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    return `Draw! Both chose ${humanChoice}`;
                case "paper":
                    computerScore++;
                    return `You lose, ${computerChoice} beats ${humanChoice}!`;
                case "scissors":
                    humanScore++;
                    return `You win, ${humanChoice} beats ${computerChoice}!`;
                }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    humanScore++;
                    return `You win, ${humanChoice} beats ${computerChoice}!`;
                case "paper":
                    return `Draw! Both chose ${humanChoice}`;
                case "scissors":
                    computerScore++;
                    return `You lose, ${computerChoice} beats ${humanChoice}!`;
                }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    computerScore++;
                    return `You lose, ${computerChoice} beats ${humanChoice}!`;
                case "paper":
                    humanScore++;
                    return `You win, ${humanChoice} beats ${computerChoice}!`;
                case "scissors":
                    return `Draw! Both chose ${humanChoice}`;
                }
    }
}

const body = document.getElementById("body");
let rock = document.createElement("button");
let paper = document.createElement("button");
let scissors = document.createElement("button");
let div = document.createElement("div");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);
const status = document.createElement("div");

body.appendChild(div);
body.appendChild(status);

let playerSelection;
body.addEventListener("click", (event) => {return event.target.textContent;});

const resultDisplay = document.createElement("div");
resultDisplay.classList.add("results");
resultDisplay.style.alignContent = "center";
body.appendChild(resultDisplay);

let list = document.createElement("ul");
list.style.listStyleType = "none";
body.appendChild(list);

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.padding = "8px";

playGame();