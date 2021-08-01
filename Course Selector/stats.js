

window.onload = function(){


let exform = document.getElementById("exitButton");
exform.action = "../Course Selector/Selector.html?name=" + document.getElementById("hiddenName").innerText;
}
