/* Might use these functions later, for reasons.

function tieGame() {
  console.log("tie game")
}

function userWin() {
  console.log("you win!")
}

function computerWin() {
  console.log("you lose!")
}
*/
function showComputerChoiceImg(id) {
  document.getElementById('computer-paper-img').classList.add('displayOff');
  document.getElementById('computer-rock-img').classList.add('displayOff');
  document.getElementById('computer-scissors-img').classList.add('displayOff');
  document.getElementById('computer-'+id+'-img').classList.remove('displayOff');
}

function displayResult(winner, userChoice, computerChoice) {
  document.getElementById('result').innerHTML = winner + "wins."
  document.getElementById('userChoice').innerHTML = "User choice: " + userChoice
  document.getElementById('computerChoice').innerHTML = "Computer choice: " + computerChoice
}

function getWinner(userChoice, computerChoice) {
  if ((userChoice == 'rock' && computerChoice == 'scissors') || (userChoice == 'paper' && computerChoice == 'rock') || (userChoice == 'scissors' && computerChoice == 'paper')) {
       // userWin();
       displayResult('User ', userChoice, computerChoice)
     } else if (userChoice == computerChoice) {
       // tieGame();
       displayResult('Tie. Nobody ', userChoice, computerChoice)
     } else {
       displayResult('Computer ', userChoice, computerChoice);
    }
}

function startGame(e) {
  var userChoice = e.target.id
  var computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
  showComputerChoiceImg(computerChoice)
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
