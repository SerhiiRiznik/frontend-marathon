const slides = document.querySelectorAll('.slide')

slides.forEach((slide)=>{
   slide.addEventListener('click',(e)=>{
      if (slide.classList.contains('active')) {
         slide.classList.remove('active')     
      }else{
         clearActiveClasses()
         slide.classList.add('active')
      } 
   })
})

function clearActiveClasses() {
   slides.forEach((slide)=>{
      slide.classList.remove('active')
   })
}