// setup nav
const navBtn = document.getElementById('nav-btn')
const navbar = document.getElementById('navbar')
const navClose = document.getElementById('nav-close')
const mainContent = document.getElementById('mainContent')
// show nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav')
  mainContent.classList.add('blur')
})
// close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav')
  mainContent.classList.remove('blur')
})
//setup date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear())
