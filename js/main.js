function tieGame() {
  console.log("tie game")
}

function userWin() {
  console.log("you win!")
}

function computerWin() {
  console.log("you lose!")
}

function displayResult(winner) {
  document.getElementById('result').innerHTML = winner + "wins."
}

function getWinner(userChoice, computerChoice) {
  if ((userChoice == 'rock' && computerChoice == 'scissors') || (userChoice == 'paper' && computerChoice == 'rock') || (userChoice == 'scissors' && computerChoice == 'paper')) {
       // userWin();
       displayResult('User ')
     } else if (userChoice == computerChoice) {
       // tieGame();
       displayResult('Tie. Neither ')
     } else {
       displayResult('Computer ');
    }
}

function startGame(e) {
  var userChoice = e.target.id
  console.log(userChoice);
  var computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
  console.log(computerChoice);
  getWinner(userChoice, computerChoice)
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //first load
  }
}
