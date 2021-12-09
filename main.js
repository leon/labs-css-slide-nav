import './style.scss'

const nav = document.querySelectorAll('.nav .nav-item')

nav.forEach((item) => {
  const label = item.querySelector('.label')
  const rect = label.getBoundingClientRect()
  item.style.setProperty('--width', rect.width + 'px')
})

const button = document.getElementById('set-random')

button.addEventListener('click', () => {
  const random = Math.floor(Math.random() * nav.length)
  nav[random].click()
})
