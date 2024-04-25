

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


/* scroll 移動標頭 進度條 start 
    ref https://youtu.be/CoQ_WGp5LHU?t=801
*/

window.onscroll = () => {
    // 滑鼠滾動時, 觸發
    scrollProgressBar();
}

function scrollProgressBar() {
    
    let titleRight = document.querySelector(".title-right");
    let titleLeft = document.querySelector(".title-left");

    // 1. 算出螢幕所在高度
    //let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    //let maxHeight = window.innerHeight;
    let maxHeight = document.documentElement.scrollHeight * 0.7 ;

    // 2. 計算百分比
    let percentage = ((window.scrollY) / maxHeight) * 100;

    // 3. 依照百分比調整進度條長度
    titleRight.style.width = percentage + "%";
    titleLeft.style.width = percentage + "%";

}


/* scroll 移動標頭 進度條 end */