function playGame(userChoice) {
  let randomNumber = Math.floor(Math.random() * 3); 
  let computerChoice;
  if (randomNumber === 0) {
    computerChoice = 'Bat';
  } else if (randomNumber === 1) {
    computerChoice = 'Ball';
  } else {
    computerChoice = 'Stump';
  }
  console.log('You chose ' + userChoice);
  console.log('Computer chose ' + computerChoice);
  if (userChoice === computerChoice) {
    console.log('Point Draw...');
  } else if ((userChoice === 'Bat' && computerChoice === 'Ball') || 
             (userChoice === 'Ball' && computerChoice === 'Stump') ||
             (userChoice === 'Stump' && computerChoice === 'Bat')) {
    console.log('You Won');
  } else {
    console.log('Computer Won...');
  }
}