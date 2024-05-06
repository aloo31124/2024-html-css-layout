/* 滑鼠滾動 進度條 start 
    ref https://youtu.be/CoQ_WGp5LHU?t=801
*/
let scrollBar = document.querySelector(".scroll-progress-bar");
console.log("外面")

window.onscroll = () => {
    console.log("滾動");
    // 滑鼠滾動時, 觸發
    scrollProgressBar();
}

function scrollProgressBar() {
    
    console.log("改變 進度條 start");

    // 1. 算出螢幕所在高度
    console.log("改變 進度條 window.document.body.scrollHeight: " + window.document.body.scrollHeight);
    console.log("改變 進度條 window.innerHeight: " + window.innerHeight);
    //let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    //let maxHeight = window.innerHeight;
    let maxHeight = document.documentElement.scrollHeight * 0.3 ;

    // 2. 計算百分比
    let percentage = ((window.scrollY) / maxHeight) * 100;

    // 3. 依照百分比調整進度條長度
    console.log("改變 進度條 percentage: " + percentage);

    scrollBar.style.width = percentage + "%";

    console.log("改變 進度條 end");
}

/* 滑鼠滾動 進度條 end */


