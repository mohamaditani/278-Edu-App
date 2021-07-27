var maxTime = 5;
var questionCounter = 0;
var currentScore = 0;
var timers = null;
var probNumbers = 10;


var indexStart;
var indexEnd;
var spellingURL = "../Data/spelling.txt";
var vocabURL = "../Data/vocab.txt";

var audioRight = new Audio('../Audio/Right.mp3');
var audioWrong = new Audio('../Audio/Wrong.mp3');

window.onload = function() {
  setDif();
  nextProblem();
};

function setDif() {
  let url = new URL(window.location.href);
  let difficulty = url.searchParams.get('pageDif');

  if (difficulty === "easy") {
    indexStart = 0;
  } else if (difficulty === "medium") {
    indexStart = 10;
  } else {
    indexStart = 20;
  }
}

function nextProblem() {
  let correct = document.getElementById("correct");
  let htmlTime = document.getElementById("timeNum");
  htmlTime.innerText = maxTime;

  maxTime = 6;
  clearInterval(timers);
  let pickProblem = Math.floor(Math.random() * 2);
  if (pickProblem === 0) {
    loadData(spellingURL);
  } else {
    loadData(vocabURL);
  }
}


///////////////////////////////////Drag and drop vv

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  let titleBox = document.getElementById("titleBox").innerText;
  document.getElementById("answerbox").innerText = data;

  if (titleBox === data) {
    // alert("equal");
  } else {
    // alert("not eq");
  }

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.innerHTML);
}

/////////////////////////////////////////////drag and drop ^^




//////////////////////////////////////////////////////////////Data vv
function loadData(txtUrl) {
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (ajax.readyState === 4 && ajax.status === 200) {
      let engData = ajax.responseText;
      var data = engData.split("\n");
      if (txtUrl === "../Data/spelling.txt") {
        spellingFunc(data);
      } else {
        vocabFunc(data);
      }
    }
  }
  ajax.open("GET", txtUrl, false);
  ajax.send();
}

function spellingFunc(data) {

  let probRnd = Math.floor(Math.random() * probNumbers) + indexStart;
  let splitData = data[probRnd].split(";");
  let correctAnswer = splitData[3];

  document.getElementById("titleBox").innerText = "Drag the word with the correct spelling into the box";
  document.getElementById("s1").innerText = splitData[0];
  document.getElementById("s2").innerText = splitData[1];
  document.getElementById("s3").innerText = splitData[2];

  timers = setInterval(function() {
    timer(correctAnswer)
  }, 1000);
}

function vocabFunc(data) {
  let probRnd = Math.floor(Math.random() * probNumbers) + indexStart;
  let splitData = data[probRnd].split(";");
  let correctAnswer = splitData[4];

  document.getElementById("titleBox").innerText = splitData[0];
  document.getElementById("s1").innerText = splitData[1];
  document.getElementById("s2").innerText = splitData[2];
  document.getElementById("s3").innerText = splitData[3];


  timers = setInterval(function() {
    timer(correctAnswer)
  }, 1000);

}
///////////////////////////////////////////////////////////////////Data ^^

function timer(answer) {
  maxTime -= 1;
  let guess = document.getElementById("answerbox").innerText;

  let htmlTime = document.getElementById("timeNum");
  let scoreCounter = document.getElementById("correct");
  htmlTime.innerText = maxTime;
let InfoBox = document.getElementById("iBox");

  if (maxTime === 0) {

    if (guess === answer.trim()) {

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
    document.getElementById("answerbox").innerText = "";

    if (questionCounter === 5) {
      endFunction();
    }

    nextProblem();
  }
}

function endFunction() {
  alert(currentScore)
}
