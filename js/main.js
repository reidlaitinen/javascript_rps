
/* I think this is breaking the border feature

function highlightUserChoice(choice) {
  userOptions = document.getElementsByClassName('userChoice')
  for (var i in userOptions) {
    userOptions[i].className ="userOption gameIcon"
  }
  document.getElementById(choice).classList.add('userChoice')
}
*/


function showComputerChoice(id) {
  document.getElementById('computer-paper-img').classList.add('displayOff');
  document.getElementById('computer-rock-img').classList.add('displayOff');
  document.getElementById('computer-scissors-img').classList.add('displayOff');
  document.getElementById('computer-'+id+'-img').classList.remove('displayOff');
}


function clearBorders() {
  var computerClasses = "computerOption gameIcon displayOff"
  var userClasses = "userOption gameIcon"
  var computerElements = document.getElementsByClassName('computerOption')
  var userElements = document.getElementsByClassName('userOption')
  for (var i in computerElements) {
    computerElements[i].className = computerClasses
  }
  for (var i in userElements) {
    userElements[i].className = userClasses
  }
}

function frameWin(id) {
  document.getElementById(id).classList.add('winBorder')
}

function frameLoss(id) {
  document.getElementById(id).classList.add('loseBorder')
}

function tieGame(userChoice, computerChoice) {
  clearBorders()
  frameWin(userChoice)
  frameWin('computer-'+computerChoice+'-img')
  // highlightUserChoice(userChoice)
  showComputerChoice(computerChoice)
  document.getElementById('result').className = "black"
}

function userWin(userChoice, computerChoice) {
  clearBorders()
  frameWin(userChoice)
  frameLoss('computer-' + computerChoice + '-img')
  // highlightUserChoice(userChoice)
  showComputerChoice(computerChoice)
  document.getElementById('result').className = "green"
  
}

function computerWin(userChoice, computerChoice) {
  clearBorders()
  frameLoss(userChoice)
  frameWin('computer-' + computerChoice + '-img')
  showComputerChoice(computerChoice)
  document.getElementById('result').className = "red"

}

function displayResult(winner, userChoice, computerChoice) {
  document.getElementById('result').innerHTML = winner + "wins."
  document.getElementById('userChoice').innerHTML = "User choice: " + userChoice
  document.getElementById('computerChoice').innerHTML = "Computer choice: " + computerChoice
}

function getWinner(userChoice, computerChoice) {
  if ((userChoice == 'rock' && computerChoice == 'scissors') ||
     (userChoice == 'paper' && computerChoice == 'rock') ||
     (userChoice == 'scissors' && computerChoice == 'paper')) {
       userWin(userChoice, computerChoice);
       displayResult('User ', userChoice, computerChoice)
     } else if (userChoice == computerChoice) {
       tieGame(userChoice, computerChoice);
       displayResult('Tie. Nobody ', userChoice, computerChoice)
     } else {
       computerWin(userChoice, computerChoice);
       displayResult('Computer ', userChoice, computerChoice);
    }
}

function startGame(e) {
  var userChoice = e.target.id
  var computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
  // highlightUserChoice(userChoice)
  // showComputerChoice(computerChoice)
  getWinner(userChoice, computerChoice)
}

var choices = document.getElementsByClassName('userOption')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //first load
  }
}
