

let scores = JSON.parse(localStorage.getItem('scores')) || {
  Wins : 0,
  Losses: 0,
  Ties: 0
}
/*
if (scores === null){
scores = {
  Wins : 0,
  Losses: 0,
  Ties: 0
}
}
*/

function playGame(playersMove){
  const computerMove = pickComputerMove();

 if (playersMove === 'Scissors'){
  if (computerMove === 'Rock') { result = 'You lose.'}
  else if (computerMove === 'Paper') { result =  'You Win!'}
  else if (computerMove === 'Scissors') { result = 'Tie.'}
 }

 else if (playersMove === 'Paper') {
  if (computerMove === 'Rock') { result = 'You Win!'}
  else if (computerMove === 'Paper') { result =  'Tie.'}
  else if (computerMove === 'Scissors') { result = 'You lose.'}
 }

 else if (playersMove === 'Rock'){
  if (computerMove === 'Rock') { result = 'Tie.';}
  else if (computerMove === 'Paper') { result =  'You lose.';}
  else if (computerMove === 'Scissors') { result = 'You Win!';}
 }

 if (result === 'You Win!'){
  scores.Wins +=1;
 } else if (result === 'You lose.'){scores.Losses += 1;} else if (result === 'Tie.'){scores.Ties += 1;}


   localStorage.setItem('scores', JSON.stringify(scores));

 alert (`You picked ${playersMove}, Computer picked ${computerMove}, ${result}
Wins: ${scores.Wins},Losses: ${scores.Losses}, Ties: ${scores.Ties} `);
}
     
function pickComputerMove (){

  let computerMove = ''
  const randomNumber = Math.random();
   console.log(randomNumber)
   if (randomNumber >= 0 && randomNumber < 1/3){ computerMove = 'Rock';}
   else if (randomNumber >= 1/3 && randomNumber < 2/3) { computerMove = 'Paper'}
   else if (randomNumber >= 2/3 && randomNumber < 1) { computerMove = 'Scissors'}

   console.log(computerMove);
   return computerMove;
   
   
} 