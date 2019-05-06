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
window.matrix = [
                //c0 c1 c2
                  [0,0,0], //r0
                  [0,0,0], //r1
                  [0,0,0]  //r2
                          ];
window.moveCount = 0;
//------------------- win checker functions -------------------
const rowCheck = function(startIndex) {

}

//-------------------event handlers -------------------
document.getElementById('newGame').onclick = function() {
  alert('button working');
  moveCount = 0;
}


document.addEventListener('click', function(){
  if(event.target.classList.contains('square')){
    alert(event.target.innerText);
    moveCount++;
  };
})

