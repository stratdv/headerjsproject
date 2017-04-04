
(function() {
var links = document.querySelectorAll('header nav a');
var nav = document.querySelector('nav');



//for (var i = 0; i < links.length; i = i + 1) {
nav.addEventListener('click', eventHandler, false);


function eventHandler (event) {
  for (let i = 0; i < links.length; i++) {
      links[i] .classList.remove('active');
  }
  event.target.classList.add('active');

}
}())

//document.getElementById('mybtn').addEventListener('click', function(){
//    alert('Priceless');
//})

function mOver(obj) {
    obj.innerHTML = "Priceless"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}
