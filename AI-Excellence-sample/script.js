

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
    let textBounceBottomBox = document.querySelector(".text-bounce-bottom-box");
    textBounceBottomBox.style.left = leftSize + "%";
    textBounceBottomBox.style.transition  = "0.5s";

    let textBounceBottom = document.querySelector(".text-bounce-bottom");
    textBounceBottom.animate([
        // key frames
        { width: '10px' },
        { width: '50px' },
        { width: '20px' },
        { width: '50px' },
        { width: '35px' },
        { width: '50px' },
        { width: '45px' },
        { width: '50px' },
      ], {
        // sync options
        duration: 1000,
        iterations: 2,
      });
}





document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    //同向移動
    let leftLittleImage = document.querySelector(".left-little-img");
    let leftLittleImageTop = 135 + y * 0.005 ;
    let leftLittleImageLeft = 10 + x * 0.005;
    leftLittleImage.style.top = leftLittleImageTop + "vh";
    leftLittleImage.style.left = leftLittleImageLeft + "vw";
    
    //水平反向移動
    let rightImage = document.querySelector(".right-img");
    let rightImageTop = 110 + y * 0.005;
    let rightImageRight = 5 + x * 0.005;
    rightImage.style.top = rightImageTop + "vh";
    rightImage.style.right = rightImageRight + "vw";

    
    //同向移動
    let LeftImage = document.querySelector(".left-img");
    let LeftImageTop = 210 + y * 0.005 ;
    let LeftImageLeft = 15 + x * 0.005;
    LeftImage.style.top = LeftImageTop + "vh";
    LeftImage.style.left = LeftImageLeft + "vw";
    

});

