// var bodyy = document.getElementById('bod');////////
// var circle = document.createElement("div");
// var text = document.createTextNode("water");
// circle.classList.add("ball");
// //
// document.appendChild(text);
// alert();
//
// $(document).on("mousemove", function(event) {
//
//   const mouseX = event.pageX;
//   const mouseY = event.pageY;
//
//   //const ball = $(document).find("#ball");
//
//   $('div.ball').css({
//     'left': mouseX +'px',
//     'top': mouseY +'px'
//   });
// });
//
//
// function getMouseCoords(e) {
  //   var e = e || window.event;
  //   // document.getElementById('ball').innerHTML = e.clientX + ', ' +
  //   //   e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
  // }


// var circle = document.getElementById("ball");
// window.document.addEventListener('mousemove', function(e) {
//   let left = e.offsetX;
//   let top = e.offsetY;
//   circle.style.left = left + 'px';
//   circle.style.top = top + 'px';
// });

///https://codepen.io/pinglu/pen/mYaMJM
  var followCursor = (
  function() {
  var s = document.getElementById('ball');
  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left = (e.clientX ) + 'px';
      s.style.top = (e.clientY ) + 'px';
    }
  };
}());

 function start() {
  followCursor.init();
  document.body.onmousemove = followCursor.run;
}

start();
