

/* scroll 移動標頭 start 
    ref https://youtu.be/CoQ_WGp5LHU?t=801
*/

window.onscroll = () => {
    // 滑鼠滾動時, 觸發
    scrollProgressBar();
}

function scrollProgressBar() {
    
    let moveFromRight = document.querySelector(".move-from-right-padding");
    let moveFromLeft = document.querySelector(".move-from-left-padding");
    let maxHeight = document.documentElement.scrollHeight * 0.7 ;

    // 2. 計算百分比
    let percentage = ((window.scrollY) / maxHeight) * 200;

    // 3. 依照百分比調整
    if(percentage < 30) {
        moveFromRight.style.width = percentage + "%";
        moveFromLeft.style.width = percentage + "%";
    }
}


/* scroll 移動標頭 end */


