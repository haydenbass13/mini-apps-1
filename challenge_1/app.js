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
const rowCheck = function() {
  for (var i = 0; i <= 6; i+=3) {
    let row = [matrix[i], matrix[i+1], matrix[i+2]];
    if (row.every((el) => el === 2)) alert('player wins');
    if (row.every((el) => el === 1)) alert('player wins');
    }
  };


const colCheck = function() {
  for (var i = 0; i < 3; i++) {
    let row = [window.matrix[i], window.matrix[i+3], window.matrix[i+6]];
    if (row.every((el) => el === 2)) alert('player wins');
    if (row.every((el) => el === 1)) alert('player wins');
  }
};

const diaCheck = function() {

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
    let squareId = event.target.id;
    if(!window.matrix[squareId]) {
      if(playerTracker) {
        window.matrix[squareId] = 1;
        event.target.innerText = 'x'
      }
      else {
        window.matrix[squareId] = 2;
        event.target.innerText = 'o'
      }
      // colCheck();
      rowCheck();
      colCheck();
      playerTracker = !playerTracker;
      // console.log(event.target.id, matrix);
    }
    else {
      alert('this square has already been picked')
    }
  };
})


