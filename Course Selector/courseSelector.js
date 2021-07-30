var sound = new Audio('../Audio/chime.mp3');
let url = new URL(window.location.href);
var name = url.searchParams.get('name');
// alert(name);
window.onload = function() {

  document.getElementById("passName").innerHTML = name;
}

function englishFunc() {

  createButtons("English");
}

function mathFunc(){

  createButtons("math");
}

function createButtons(subject) {
  sound.play();
  let buttonDiv = document.getElementById("buttonBox");
  buttonDiv.innerHTML = '';

  let easy = document.createElement("button");
  easy.innerHTML = "EASY " + subject;
  easy.setAttribute("class", "easy diffButton");
  easy.id= "easy" + subject
  easy.onclick = function(){window.location.href = "../Question"+subject+"/"+subject+"QPage.html?pageDif=easy" + "&name=" + name}

  let medium = document.createElement("button");
  medium.innerHTML = "MEDIUM " + subject;
  medium.setAttribute("class", "medium diffButton");
  medium.id= "easy" + subject
  medium.onclick = function(){window.location.href = "../Question"+subject+"/"+subject+"QPage.html?pageDif=medium"+ "&name=" + name}

  let hard = document.createElement("button");
  hard.innerHTML = "HARD "+ subject;
  hard.setAttribute("class", "hard diffButton");
  hard.id= "easy" + subject
  hard.onclick = function(){window.location.href = "../Question"+subject+"/"+subject+"QPage.html?pageDif=hard"+ "&name=" + name}



  buttonDiv.appendChild(easy);
  buttonDiv.appendChild(medium);
  buttonDiv.appendChild(hard);
  // buttonDiv.appendChild(easy);

}
