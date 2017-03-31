
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
