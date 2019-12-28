/* window.document.body.children[0].children[0].textContent = 'half'
return "half"
window.document.body.children[0].children[0].style.backgroundColor = 'red'
"red"
return "red"*/
/* document.body
<body>​…​</body>​
document.querySelector('div')
<div class=​"tank">​…​</div>​
document.querySelectorAll('div')
NodeList(3) [div.tank, div, div.bowl]
document.getElementsByClassName('tank')
HTMLCollection [div.tank]
*/
/* easeIn */

//events`
//function as values-  function are things

var bowl = document.querySelector(".bowl");
var flush1 = document.querySelector(".flush-btn");
var poop = function() {
  window.document.body.children[1].style.backgroundColor = "darkolivegreen";
};
var flush = function() {
  window.document.body.children[1].style.backgroundColor = "mintcream";
};
// window.document.body.children[1].addEventListener("click", poop);
// window.document.body.children[0].children[0].addEventListener("click", flush);
bowl.addEventListener("click", poop);
flush1.addEventListener("click", flush);
