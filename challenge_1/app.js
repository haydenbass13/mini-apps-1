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
  

document.getElementById('newGame').onclick = function() {
  alert('button working');
}


document.addEventListener('click', function(){
  if(event.target.classList.contains('square')){
    alert(event.target.innerText);
  };
})

