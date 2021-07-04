// простой способ
let burger  = document.querySelector('.hamburger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');
let menu = document.querySelector('.mobile__menu');

let links = document.querySelectorAll('.mobile__menu__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('hamburger--active');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--active-menu');
  menu.classList.toggle('mobile__menu--overlay');
}

burger.addEventListener('click' , toggleMenu);