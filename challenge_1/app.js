//x goes first
//have a new game button
//detect WINS! or ties
  //after each play, update a pay count 
    //there can only be a total of 9 plays per round
      //if no WINS! at 9 plays - display tie
    //after each play, check for WINS!
      //similar to n-queens
        //check for horizontal WINS!
        //check for vertical WINS!
        //check for diagonal WINS!
          //if win, display 'player x WINS!'
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
    if (row.every((el) => el === 2)) alert('X WINS!');
    if (row.every((el) => el === 1)) alert('O WINS!');
    }
  };


const colCheck = function() {
  for (var i = 0; i < 3; i++) {
    let row = [window.matrix[i], window.matrix[i+3], window.matrix[i+6]];
    if (row.every((el) => el === 2)) alert('X WINS!');
    if (row.every((el) => el === 1)) alert('O WINS!');
  }
};

const diaCheck = function() {
 let major = [window.matrix[0], window.matrix[4], window.matrix[8]];
 let minor = [window.matrix[2], window.matrix[4], window.matrix[6]];
 if(major.every(el => el === 2)) alert('X WINS!')
 if(major.every(el => el === 1)) alert('O WINS!')
 if(minor.every(el => el === 2)) alert('X WINS!')
 if(minor.every(el => el === 1)) alert('O WINS!')
}

const checkWinner = function() {
  colCheck();
  diaCheck();
  rowCheck();
}



//------------------- game reset funcs -------------------
const reset = function() {
  for (var i = 0; i < window.matrix.length; i++) {
    window.matrix[i] = 0;
    document.getElementsByClassName('square')[i].innerText = '';
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
        event.target.innerText = 'O'
      }
      else {
        window.matrix[squareId] = 2;
        event.target.innerText = 'X'
      }
      playerTracker = !playerTracker;
    }
    else {
      alert('this square has already been picked')
    }
    checkWinner();
    if(moveCount === 9) alert('draw!')
  };
})


