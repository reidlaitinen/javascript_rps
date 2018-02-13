function startGame(e) {
  var choice = e.target.id
  //debugger //won't pause unless dev tools are open
  console.log(choice);
}



var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //first load
  }
}
