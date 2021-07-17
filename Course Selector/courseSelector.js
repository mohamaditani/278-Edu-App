window.onload = function() {

}

function englishFunc() {
  createButtons();
}

function createButtons() {
  let buttonDiv = document.getElementById("buttonBox");


  let easy = document.createElement("button");
  easy.innerHTML = "EASY";
  easy.setAttribute("class", "easy diffButton");

  let medium = document.createElement("button");
  medium.innerHTML = "MEDIUM";
  medium.setAttribute("class", "medium diffButton");

  let hard = document.createElement("button");
  hard.innerHTML = "HARD";
  hard.setAttribute("class", "hard diffButton");



  buttonDiv.appendChild(easy);
  buttonDiv.appendChild(medium);
  buttonDiv.appendChild(hard);
  // buttonDiv.appendChild(easy);

}
