const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
      playRound('rock');
});

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
      playRound('paper');
});

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
      playRound('scissors');
});


  
  var totalComputer = 0
  var totalUser = 0
  if(totalComputer + totalUser > 5) {
      console.log('test')
  }


  function playRound(playerSelection) {
      let computerSelection = computerPlay()
      computerSelectionOutput(computerSelection);
      console.log('Computer chooses ' + computerSelection)
      console.log(playerSelection)
      if (playerSelection == 'rock') {
          if (computerSelection == 'paper'){
              computerWins();
          } else if (computerSelection == 'scissors') {
              playerWins();
          } else {
              draw();
          }
      } else if (playerSelection == 'paper') {
          if (computerSelection == 'scissors') {
              computerWins();
          } else if (computerSelection == 'rock') {
              playerWins();
          } else {
            draw();
          }
      } else if (playerSelection == 'scissors') {
          if (computerSelection == 'rock') {
              computerWins();
          } else if (computerSelection == 'paper') {
              playerWins();
          } else {
            draw();
          }
      } 
  }

  function computerPlay(){
      let choice = ['rock', 'paper', 'scissors'];
      let cNumber = Math.floor(Math.random() * Math.floor(3))
      return choice[cNumber];
  }

  function computerWins(){
      const resultBox = document.querySelector('#result');

      const content = document.createElement('div');
      content.classList.add('content');
      content.textContent = 'Computer Wins this round';

      resultBox.appendChild(content);

      runningTotal(totalUser, ++totalComputer);
  }

  function playerWins(){
      const resultBox = document.querySelector('#result');

      const content = document.createElement('div');
      content.classList.add('content');
      content.textContent = 'Player Wins this round';

      resultBox.appendChild(content);

      runningTotal(++totalUser, totalComputer);
  }

  function draw(){
    const resultBox = document.querySelector('#result');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'DRAW';

    resultBox.appendChild(content);

  }

  function computerSelectionOutput(computerSelection) {
    const computerSelectionBox = document.querySelector('#computerSelection');

    const content = document.createElement('div');
    content.classList.add('content');
    if (computerSelection == 'rock'){
        content.textContent = '✊';
    } else if (computerSelection == 'paper') {
        content.textContent = '✋';
    } else {
        content.textContent = '✌️';
     }
    

    computerSelectionBox.appendChild(content);
  }

  function runningTotal(totalUser, totalComputer) {
    const FinalResultBox = document.querySelector('#finalScore');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'User - ' + totalUser + ' VS ' + totalComputer + ' - Computer';

    FinalResultBox.appendChild(content);
    if (totalUser + totalComputer == 5) {
        if (totalUser>totalComputer){
            content.innerHTML = 'Player Wins'
        } else {
            content.innerHTML = 'Computer Wins'
        }

    }
  }

