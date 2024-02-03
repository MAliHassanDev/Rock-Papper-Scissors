document.addEventListener('DOMContentLoaded', function() {
  function generateComputerChoice() {
    const gameOptions = ['rock','paper','scissors'];
    let randomIndice = Math.floor(Math.random()*gameOptions.length);
    return gameOptions[randomIndice];
  }
  function addImageElement(userChoice, computerChoice){
    computerPick.src = `img/${computerChoice}.png`
  }
  function showChoices(userChoice){
    resultContainer.classList.remove('hidden');
    mainContainer.classList.add('showResult');
    tryAgainButton.style.display = 'none';
    userPick.src = `img/${userChoice}.png`;
    let count = 3;
    console.log(count);
    // computerPickText.innerHTML = count;
    const countDownInterval = setInterval(() =>{
      if(count>0){
        computerPickText.innerHTML = count;
        count--;
      }else {
        clearInterval(countDownInterval);
        computerPickText.innerHTML = '';
        computerPickText.style.display = 'none';
        tryAgainButton.style.display = 'block';
        computerPick.style.display = 'block';
        let computerChoice = generateComputerChoice();
        addImageElement(userChoice,computerChoice);
        checkRoundResult(userChoice,computerChoice);
      }
    }, 800);
    
    
  }
  function checkRoundResult(userChoice,computerChoice){
    if((userChoice==='rock'&&computerChoice==='scissors') || (userChoice==='paper'&&computerChoice==='rock') || (userChoice==='scissors'&&computerChoice==='paper')){
      result.innerHTML = 'YOU WON!!';
      score++;
      scoreValue.innerHTML = score;
    }else if(userChoice===computerChoice){
      result.innerHTML = 'GAME IS TIE';
    }else{
      result.innerHTML = 'YOU LOSE!!';
      score--;
      scoreValue.innerHTML = score;
    }
  }
  function resetScore(){
    score=0;
    scoreValue.innerHTML = score;
  }
  function tryAgain(){
    resultContainer.classList.add('hidden');
    mainContainer.classList.remove('showResult');
    result.innerHTML = '';
    computerPick.style.display = 'none';
    computerPickText.style.display = 'block';
  }
  
  
  const rockButton = document.getElementById('rock');
  const paperButton = document.getElementById('paper');
  const scissorsButton = document.getElementById('scissors');
  const scoreValue = document.getElementById('scoreValue');
  const resetButton = document.getElementById('resetButton');
  const mainContainer = document.getElementById('game-container');
  const userPick = document.getElementById('userChoice');
  const computerPick = document.getElementById('computerChoice');
  const resultContainer = document.querySelector('.viewResultContainer');
  const result = document.getElementById('result');
  const tryAgainButton = document.getElementById('tryAgainButton');
  const computerPickText = document.getElementById('computerPickText');
  let score=0;
  if (rockButton) rockButton.addEventListener('click', () => showChoices('rock'));
  if (paperButton) paperButton.addEventListener('click', () => showChoices('paper'));
  if (scissorsButton) scissorsButton.addEventListener('click', () => showChoices('scissors'));
  if (resetButton) resetButton.addEventListener('click', () => resetScore());
  if (tryAgainButton) tryAgainButton.addEventListener('click', () => tryAgain());
});





