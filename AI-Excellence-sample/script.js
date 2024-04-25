

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




/* 導覽列 
    https://stackoverflow.com/questions/59573722/how-can-i-set-a-css-keyframes-in-javascript
*/
let navItem1 = document.querySelector("#nav-item1");
navItem1.addEventListener("click", () => {
    showNavItemAnimate(22);
});
let navItem2 = document.querySelector("#nav-item2");
navItem2.addEventListener("click", () => {
    showNavItemAnimate(45);

});
let navItem3 = document.querySelector("#nav-item3");
navItem3.addEventListener("click", () => {
    showNavItemAnimate(65);
});
let navItem4 = document.querySelector("#nav-item4");
navItem4.addEventListener("click", () => {
    showNavItemAnimate(85);
});

function showNavItemAnimate(leftSize) {
    let textBounceButton = document.querySelector(".text-bounce-button");
    textBounceButton.style.left = leftSize + "%";
    textBounceButton.style.transition  = "0.5s";
    textBounceButton.animate([
        // key frames
        { width: '20px' },
        { width: '50px' },
        { width: '45px' },
        { width: '60px' },
        { width: '40px' },
        { width: '60px' },
      ], {
        // sync options
        duration: 500,
        iterations: 2,
      });
}

