

const elSpot = document.querySelector('.spot');
const elSec = document.querySelectorAll('section');
const elHeader = document.querySelector('header');
const elNav = document.querySelectorAll('header li>a');

//헤더 배경
let headerFun = ()=>{
   if(window.scrollY >= window.innerHeight){
      elHeader.classList.add('active')
   }
   else{elHeader.classList.remove('active')}
}


let navFun = function(e){
   e.preventDefault();
   let num = this.dataset.num;
   elSec[num].scrollIntoView({behavior:"smooth"});
}

//이벤트
window.addEventListener('scroll',headerFun);

elNav.forEach((aTag,i)=>{
   aTag.addEventListener('click',navFun);
})


   const elCon = document.querySelectorAll('.con');

   let inter = new IntersectionObserver(function(entry){
      entry.forEach((ele)=>{
         if(ele.isIntersecting){
            ele.target.classList.add('active')
         }
      })
   });
   elCon.forEach((content)=>{
      inter.observe(content)
   })



   const elCon2 = document.querySelectorAll('.con2');
   let inter2 = new IntersectionObserver(function(entry){
      entry.forEach((ele)=>{

         if(ele.isIntersecting){
            const elFigure = ele.target.querySelectorAll('figure');
            elFigure.forEach((figure,idx)=>{
               setTimeout(()=>{
                  figure.classList.add('active');
               },200*idx)
            })
         }
      })
   });
   elCon2.forEach((content)=>{
      inter2.observe(content)
   })



// Initialize Swiper
var swiper = new Swiper(".slide", {
   loop: true,
   mousewheel: true,

   breakpoints: {
      0: {slidesPerView: 1},
      1024:{slidesPerView: 1}
   },

   // autoplay: {
   //    delay: 3000,
   //    disableOnInteraction: false,
   // },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   on:{
      slideChange:(e)=>{
         console.log(e.realIndex)
      }
   }
});