
  
//------------------- gameboard/playcount -------------------
window.matrix = ['','','','','','','','',''];
window.moveCount = 0;
window.playerTracker = false; //toggle this with every move
window.winner = null;



//------------------- win checker functions -------------------
const rowCheck = function() {
  for (var i = 0; i <= 6; i+=3) {
    let row = [matrix[i], matrix[i+1], matrix[i+2]];
    if (row.every((el) => el === 'X')) window.winner = 'X';
    if (row.every((el) => el === 'O')) window.winner = 'O';
    }
  };


const colCheck = function() {
  for (var i = 0; i < 3; i++) {
    let row = [window.matrix[i], window.matrix[i+3], window.matrix[i+6]];
    if (row.every((el) => el === 'X')) window.winner = 'X';
    if (row.every((el) => el === 'O')) window.winner = 'O';
  }
};

const diaCheck = function() {
 let major = [window.matrix[0], window.matrix[4], window.matrix[8]];
 let minor = [window.matrix[2], window.matrix[4], window.matrix[6]];
 if(major.every(el => el === 'X')) window.winner = 'X';
 if(major.every(el => el === 'O')) window.winner = 'O';
 if(minor.every(el => el === 'X')) window.winner = 'X';
 if(minor.every(el => el === 'O')) window.winner = 'O';
}

const checkWinner = function() {
  colCheck();
  diaCheck();
  rowCheck();
  if(window.winner !== null) {
    renderWinner(window.winner)
  }
}



//------------------- game reset funcs -------------------
const reset = function() {
  document.getElementById('winner').style.visibility = 'hidden';
  document.getElementById('bigWrapper').style.visibility = 'hidden';
  document.getElementById('winner').classList = ''
  window.winner = null;
  for (var i = 0; i < window.matrix.length; i++) {
    window.matrix[i] = '';
    render(i);
  }
};

const render = function(index) {
    let element = document.getElementsByClassName('square')[index];
    element.innerText = matrix[index];
    if (matrix[index]) {
      element.classList.add(`${window.matrix[index]}`)
    }
   else {
     element.classList = 'square';
   }
}
const renderWinner = function(win) {
  document.getElementById('winner').style.visibility = 'visible';
  document.getElementById('bigWrapper').style.visibility = 'visible';
  document.getElementById('winner').innerText = `${win} WINS!`;
  document.getElementById('winner').classList.add(win);
  
}


//-------------------event handlers -------------------
document.getElementById('newGame').onclick = function() {
  moveCount = 0;
  playerTracker = false;
  reset();
}


document.addEventListener('click', function(){
  if(event.target.classList.contains('square')){
    let squareId = event.target.id;
    if(!window.matrix[squareId]) {
      if(playerTracker) {
        window.matrix[squareId] = 'O';
        moveCount++;
        render(squareId);
        checkWinner()
      }
      else {
        window.matrix[squareId] = 'X';
        moveCount++;
        render(squareId);
        checkWinner();
      }
      playerTracker = !playerTracker;
    }
    else {
      alert('this square has already been picked')
    }
    if(window.winner === null && moveCount === 9) alert('draw!')
  };
})


