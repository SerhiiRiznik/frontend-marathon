const slides = document.querySelectorAll('.slide')



slides.forEach((slide,index,array)=>{
   
   slide.addEventListener('click',(e)=>{
      slide.classList.remove('active')
         // slide.classList.remove('active')
      
      if (slide.classList.contains('slide')) {
         slide.classList.toggle('active')
      }
      
       
   })
   
})
   
  


function clearActiveClasses() {
   slides.forEach((slide)=>{
      slide.classList.remove('active')
   })
}