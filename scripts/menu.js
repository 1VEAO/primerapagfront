let menuDisplay = document.getElementsByClassName('nav-mobile_link')[0];
let barraMenu = document.getElementsByClassName('fa-bars')[0];

barraMenu.addEventListener('click', function barraScroll() {
 if (menuDisplay.style.marginLeft == '100%') {
  menuDisplay.style.marginLeft = '0'
 } else {
  menuDisplay.style.marginLeft = '100%'
 }
})