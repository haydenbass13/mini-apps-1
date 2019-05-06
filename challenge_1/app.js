//x goes first
//have a new game button
//detect wins or ties
  //after each play, update a pay count 
    //there can only be a total of 9 plays per round
      //if no wins at 9 plays - display tie
    //after each play, check for wins
      //similar to n-queens
        //check for horizontal wins
        //check for vertical wins
        //check for diagonal wins
          //if win, display 'player x wins'
  //start with a blank board
    //add a timer at the top?
  //when player one clicks, it will update the square with x
  //same for 0, will alternate
    //how will this happen? maybe have an alternating t/f variable to add them?
    //can be css styling to display x or o?
  
//------------------- gameboard/playcount -------------------
window.matrix = [0,0,0,0,0,0,0,0,0];
window.moveCount = 0;
window.playerTracker = false; //toggle this with every move



//------------------- win checker functions -------------------
const rowCheck = function(row, col) {
  //check above and below starting index
  //starting index will be given from eventhandler
    //will tell which row was clicked and which column
    //matrix[0][0] for top left
    //matrix[1][1] will be center etc.
}



//------------------- game reset funcs -------------------
const reset = function() {
  for (var i = 0; i < window.matrix.length; i++) {
    window.matrix[i] = 0;
  }
}


//-------------------event handlers -------------------
document.getElementById('newGame').onclick = function() {
  moveCount = 0;
  playerTracker = false;
  reset();
  console.log(playerTracker, moveCount);
}


document.addEventListener('click', function(){
  if(event.target.classList.contains('square')){
    moveCount++;
    if(playerTracker) {
      window.matrix[event.target.id] = 1;
    }
    else {
      window.matrix[event.target.id] = 2;
    }
    playerTracker = !playerTracker;
    console.log(event.target.id, matrix);
  };
})

