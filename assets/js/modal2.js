
var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("myBtn2");

var span = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
/****************************/

var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("myBtn3");

var span = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
/****************************/

var modal4 = document.getElementById("myModal4");

var btn4 = document.getElementById("myBtn4");

var span = document.getElementsByClassName("close4")[0];

btn4.onclick = function() {
  modal4.style.display = "block";
}

span.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
