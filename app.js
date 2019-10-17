/*Score*/
let $userScore = 0;
let $compScore = 0;

/*Score text & score board*/
const $userScoreText = document.getElementById("user-score");
const $compScoreText = document.getElementById("computer-score");
const $scoreBoard = document.querySelector(".score-board");

/*Result text*/
const $result = document.querySelector(".result > p");

/*Buttons*/
let $rock = document.getElementById("r");
let $paper = document.getElementById("p");
let $scissors = document.getElementById("s");

/*Functions*/
function getComputerChoice() {
  const $choices = ['r', 'p', 's'];
  const $random = Math.floor(Math.random() * 3);
  return $choices[$random];//Return 'r', 'p' or 's'
}

function converToWord(letter) {
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  if (letter === 's') return "Scissors";
}

function wins(userChoice, compChoice) {
  $userScore++;
  $userScoreText.innerHTML = $userScore;
  $compScoreText.innerHTML = $compScore;
  $result.innerHTML = `${converToWord(userChoice)} beats ${converToWord(compChoice)}. You win!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500);

}
function lose(userChoice, compChoice) {
  $compScore++;
  $compScoreText.innerHTML = $compScore;
  $userScoreText.innerHTML = $userScore;
  $result.innerHTML = `${converToWord(userChoice)} loses to ${converToWord(compChoice)}. You lose!`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 500);
}
function draw(userChoice, compChoice) {
  $result.innerHTML = `${converToWord(compChoice)} equals ${converToWord(userChoice)}. It's a draw!`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function () { document.getElementById(userChoice).classList.remove('grey-glow') }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      wins(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

/*Main function*/
function main() {
  $rock.addEventListener('click', () => game('r'));
  $paper.addEventListener('click', function () { game('p') });
  $scissors.addEventListener('click', function () { game('s') });
}

/*Call main()*/
main();
