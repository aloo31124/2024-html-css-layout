let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

  if(window.scrollY > 0){
     header.classList.add('active');
  }else{
     header.classList.remove('active');
  }

}



/*
    滑鼠滾動 on scroll 動畫效果 start
*/
const io = new IntersectionObserver(entries => {
   entries.forEach(entry => {
       if(entry.intersectionRatio > 0) {
           entry.target.classList.add('this')
       }
   })
})

const box = document.querySelectorAll('.animate');

box.forEach((el) => {
   io.observe(el);
})

/* 滑鼠滾動 on scroll 動畫效果 end */

