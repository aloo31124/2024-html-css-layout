/* 滑鼠滾動 進度條 start 
    ref https://youtu.be/CoQ_WGp5LHU?t=801
*/
let scrollBar = document.querySelector(".scroll-progress-bar");

window.onscroll = () => {
    scrollProgressBar();
}

function scrollProgressBar() {
    let docHeight = document.documentElement.scrollHeight;
    // 2. 計算百分比
    let percentage = ((window.scrollY + window.innerHeight) / docHeight) * 100;
    scrollBar.style.width = percentage + "%";
}
/* 滑鼠滾動 進度條 end */


