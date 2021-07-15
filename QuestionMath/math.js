var maxTime = 1;
var questionCounter = 0;
var currentScore = 0;
var timers = null;

window.onload = function() {
  setDif();
  nextProblem();
};

function setDif() {
  let totalScore = document.getElementById("total");
  totalScore.innerText = "5"; //fix

}

function nextProblem() {
  let correct = document.getElementById("correct");
  let num1 = document.getElementById("num1");
  let opp = document.getElementById("opp");
  let num2 = document.getElementById("num2");

  let allOpps = ["+", "-", "*", "%", "/"];
  // let selectOpp = parseInt(Math.random() * 5);

  let number1 = parseInt(Math.random() * 1) + 1;
  let number2 = parseInt(Math.random() * 1) + 1;
  let opperator = allOpps[parseInt(Math.random() * 5)];

  num1.innerHTML = number1;
  num2.innerHTML = number2;
  opp.innerHTML = opperator;

  let answer = calc(number1, opperator, number2);

  let htmlTime = document.getElementById("timeNum");
  htmlTime.innerText = maxTime;

maxTime = 2;
clearInterval(timers);
timers = setInterval(function(){timer(answer)}, 1000);


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



function timer(answer) {
  maxTime -= 1;
  let guess = parseInt(document.getElementById("guess").value);
  let htmlTime = document.getElementById("timeNum");
  let scoreCounter = document.getElementById("correct");
  htmlTime.innerText = maxTime;

  if(maxTime === 0){
    if(guess === answer){
      currentScore += 1;
      scoreCounter.innerHTML = currentScore;
    }
    questionCounter += 1;
    document.getElementById("guess").value = "";

    if(questionCounter === 5){
      endFunction();
    }

    nextProblem();
  }
}

function endFunction(){
  alert(currentScore)
}
