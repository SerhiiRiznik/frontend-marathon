const board = document.querySelector('#board')
const SQUARES_NUMBER = 700

const backgroundColor = '#4b4b4b'

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const div = document.createElement('div')
   div.classList.add('square')
   div.style.backgroundColor = backgroundColor

   div.addEventListener('mouseover',(e)=>{
      setColor(div)
      e.stopPropagation();
   })
   div.addEventListener('mouseleave',(e)=>{
      setTimeout(()=>{
         removeColor(div)
      },10000)
      e.stopPropagation();
   })


   board.append(div)
}
function removeColor(el) {
   
      el.style.backgroundColor = backgroundColor
      el.style.boxShadow = `none`
}

function setColor(el) {
   let color = getRandomColor()
   el.style.backgroundColor = color
   el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
   const r = Math.floor(Math.random() * 255)
   const g = Math.floor(Math.random() * 255)
   const b = Math.floor(Math.random() * 255)

   const color = `#${r}${g}${b}`


   return color
   
}