
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

