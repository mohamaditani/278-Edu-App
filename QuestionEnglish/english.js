var maxTime = 10;
var questionCounter = 0;
var currentScore = 0;
var timers = null;


var indexStart;
var indexEnd;

window.onload = function() {
  setDif();
  nextProblem();
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  let titleBox = document.getElementById("titleBox").innerText;
  document.getElementById("answerbox").innerText = data;

  if(titleBox === data){
    alert("equal");
  }else{
    alert("not eq");
  }

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.innerHTML);
}

function setDif() {
  let url = new URL(window.location.href);
  let difficulty = url.searchParams.get('pageDif');

  if (difficulty === "easy") {
    indexStart = 0;
    indexEnd = 10;

  } else if (difficulty === "medium") {
    indexStart = 11;
    indexEnd = 20;

  } else {
    indexStart = 21;
    indexEnd = 30;
  }
}

function nextProblem() {
  let correct = document.getElementById("correct");



  let htmlTime = document.getElementById("timeNum");
  htmlTime.innerText = maxTime;

  maxTime = 2;
  clearInterval(timers);
  timers = setInterval(function() {
    timer(answer)
  }, 1000);


}



function timer(answer) {
  maxTime -= 1;
  let guess = parseInt(document.getElementById("guess").value);
  let htmlTime = document.getElementById("timeNum");
  let scoreCounter = document.getElementById("correct");
  htmlTime.innerText = maxTime;

  if (maxTime === 0) {
    if (guess === answer) {
      currentScore += 1;
      scoreCounter.innerHTML = currentScore;
    }
    questionCounter += 1;
    document.getElementById("guess").value = "";

    if (questionCounter === 5) {
      endFunction();
    }

    nextProblem();
  }
}

function endFunction() {
  alert(currentScore)
}
