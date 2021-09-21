const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeElement = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0
let idInterval = null
startBtn.addEventListener('click', event => {
   event.preventDefault()
   screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
   if (event.target.classList.contains('time-btn')) {
     time = window.parseInt(event.target.getAttribute('data-time'))
     screens[1].classList.add('up')
     startGame()

   }
})
board.addEventListener('click',event=>{
   if (event.target.classList.contains('circle')) {
      score++
      event.target.remove()
       createRandomCircle()
   }
})



function startGame() {
   createRandomCircle()
  idInterval = setInterval(()=>{
      if (time === 0) {
         finishGame()
      } else {
         let currentTime = --time
         if (currentTime < 10) {
            currentTime = `0${currentTime}`
         }
      timeElement.innerHTML = `00:${currentTime}`
      }
      
   },1000)
   
}
function finishGame() {
   console.log('finish');
   clearInterval(idInterval)
   timeElement.parentNode.classList.add('hide')
   board.innerHTML = `<h1>Your score: <span class='primary'>${score}</span></h1>`
}

function createRandomCircle() {
   const circl = document.createElement('div')
   const size = getRandomNumber(10,50)
   const {height ,width} = board.getBoundingClientRect()

   const x = getRandomNumber(0 , width - size)
   const y = getRandomNumber(0 , height - size)
   let randomColor =  getRandomColor()
   circl.style.top = `${y}px`
   circl.style.left = `${x}px`
   circl.style.backgroundColor = randomColor
   circl.classList.add('circle')
   
   circl.style.width = `${size}px`
   circl.style.height = `${size}px`
   board.append(circl)
}


function getRandomNumber(min,max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
   const r = Math.floor(Math.random() * 255)
   const g = Math.floor(Math.random() * 255)
   const b = Math.floor(Math.random() * 255)

   return color  = `rgb(${r}, ${g}, ${b})`


   
}