var maxTime = 0;
var lockTime = 0;
var questionCounter = 0;
var currentScore = 0;
var timers = null;
var questionCount = 0;
var difficultyMultiplyer = 1;
var audioRight = new Audio('../Audio/Right.mp3');
var audioWrong = new Audio('../Audio/Wrong.mp3');
// var skipTimer = false;

window.onload = function() {
  setDif();
  nextProblem();
};

function setDif() {
  let url = new URL(window.location.href);
  let difficulty = url.searchParams.get('pageDif');

  if (difficulty === "easy") {
    questionCount = 5;
    maxTime = 10;
    lockTime = 10;
    difficultyMultiplyer = 10;
  } else if (difficulty === "medium") {
    questionCount = 10;
    maxTime = 15;
    lockTime = 15;
    difficultyMultiplyer = 30;
  } else {
    questionCount = 15;
    maxTime = 20;
    lockTime = 20;
    difficultyMultiplyer = 50;
  }
  let totalScore = document.getElementById("total");
  totalScore.innerText = questionCount;

}

function nextProblem() {
  let correct = document.getElementById("correct");
  let num1 = document.getElementById("num1");
  let opp = document.getElementById("opp");
  let num2 = document.getElementById("num2");

  let allOpps = ["+", "-", "*", "%", "/"];
  // let selectOpp = parseInt(Math.random() * 5);

  let number1 = parseInt(Math.random() * difficultyMultiplyer) + 1;
  let number2 = parseInt(Math.random() * difficultyMultiplyer) + 1;
  let opperator = allOpps[parseInt(Math.random() * 5)];

  num1.innerHTML = number1;
  num2.innerHTML = number2;
  opp.innerHTML = opperator;

  let answer = calc(number1, opperator, number2);

  let htmlTime = document.getElementById("timeNum");
  htmlTime.innerText = maxTime;


  maxTime = lockTime + 1;
  clearInterval(timers);


  timers = setInterval(function() {
    timer(answer)
  }, 1000);


}

function calc(num1, opp, num2) {
  let answer = 0;
  switch (opp) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "%":
      answer = num1 % num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
    default:
  }

  return Math.floor(answer * 10) / 10
}

// document.addEventListener('keydown', (event) => {
// var name = event.key;
// var keyCode = event.code;
// console.log(keyCode);
// }, false);

function timer(answer) {
  maxTime -= 1;
  let guess = parseInt(document.getElementById("guess").value);
  let htmlTime = document.getElementById("timeNum");
  let scoreCounter = document.getElementById("correct");
  let InfoBox = document.getElementById("iBox");
  htmlTime.innerText = maxTime;



  if (maxTime === 0) {
    if (guess === answer) {
      currentScore += 1;
      scoreCounter.innerHTML = currentScore;
      InfoBox.classList.add("backgroundColorRight");
      audioRight.play();
      setTimeout(function() {
        InfoBox.classList.remove("backgroundColorRight");
      }, 400);
    }else{
      audioWrong.play();
      InfoBox.classList.add("backgroundColorWrong");
      setTimeout(function() {
        InfoBox.classList.remove("backgroundColorWrong");
      }, 400);
    }
    questionCounter += 1;
    document.getElementById("guess").value = "";

    if (questionCounter === questionCount) {
      endFunction();
    }

    nextProblem();
  }

}

function endFunction() {
  alert(currentScore)
}
//
// function submitQuiz(){
// skipTimer = true;
// }
