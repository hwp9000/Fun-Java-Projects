const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } 
  else if(userInput === 'gun') {
   return userInput;
  }
  else {
    console.log('Error!')
  }
};

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'
  }
}

function determineWinner(userChoice, computerChoice) {
  // Gun beats everything
  if(userChoice === 'gun'){
    return 'You won!'
  }
  if(userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  // User Rock
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer Won';
    }
    else{
      return 'You won!';
    }
  }
  // User Paper
    if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer Won';
    }
    else{
      return 'You won!';
    }
  }
    // User Scissors
    if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer Won';
    }
    else{
      return 'You won!';
    }
  }
}
const playGame = () => {
   const userChoice = getUserChoice('gun');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();
