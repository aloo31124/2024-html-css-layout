

/*
    滑鼠滾動 on scroll 動畫效果 start
*/
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add('this')
        }
    })
});
const box = document.querySelectorAll('.animate');

box.forEach((el) => {
    io.observe(el);
});
/* 滑鼠滾動 on scroll 動畫效果 end */


/* scroll h2 區塊標題 底層變色 start */
gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.text-color-transition')
splitTypes.forEach((char,i) => {
    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor
    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.8,
            stagger: 0.08,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);// 回滾動 scroll
/* scroll h2 區塊標題 底層變色 end */


/* scroll 移動 標頭 start */
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
let logo = document.querySelector("#logo");
logo.addEventListener("click", () => {
    showNavItemAnimate(2);
});
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



/* 背景圖 位移 start */
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    //報價流程-左側小星星: 垂直同向, 水平同向移動
    let leftLittleImage = document.querySelector(".left-little-img");
    let leftLittleImageTop = 135 + y * 0.005 ;
    let leftLittleImageLeft = 10 + x * 0.005;
    leftLittleImage.style.top = leftLittleImageTop + "vh";
    leftLittleImage.style.left = leftLittleImageLeft + "vw";
    
    //報價流程-右側背景圖: 垂直同向, 水平反向移動
    let rightImage = document.querySelector(".right-img");
    let rightImageTop = 110 + y * 0.005;
    let rightImageRight = 5 + x * 0.005;
    rightImage.style.top = rightImageTop + "vh";
    rightImage.style.right = rightImageRight + "vw";

    
    //服務項目-右側背景圖: 垂直同向, 水平同向移動
    let LeftImage = document.querySelector(".left-img");
    let LeftImageTop = 210 + y * 0.005 ;
    let LeftImageLeft = 15 + x * 0.005;
    LeftImage.style.top = LeftImageTop + "vh";
    LeftImage.style.left = LeftImageLeft + "vw";

    //服務項目-logo背景圖: 垂直同向, 水平反向移動
    let rightLogo = document.querySelector(".right-logo");
    let rightLogoTop = 240 + y * 0.002;
    let rightLogoRight = 20 + x * 0.002;
    rightLogo.style.top = rightLogoTop + "vh";
    rightLogo.style.right = rightLogoRight + "vw";

});
/* 背景圖 位移 end */




/* 報價流程 輪播圖 start */
let control1 = document.querySelector("#control1");
let control2 = document.querySelector("#control2");
let control3 = document.querySelector("#control3");
let control4 = document.querySelector("#control4");

control1.addEventListener("click", () => {
    defaultControl();
    control1.style.color = "#F1B41B";
});
control2.addEventListener("click", () => {
    defaultControl();
    control2.style.color = "#F1B41B";
});
control3.addEventListener("click", () => {
    defaultControl();
    control3.style.color = "#F1B41B";
});
control4.addEventListener("click", () => {
    defaultControl();
    control4.style.color = "#F1B41B";
});

function defaultControl(){
    control1.style.color = "#231F20";
    control2.style.color = "#231F20";
    control3.style.color = "#231F20";
    control4.style.color = "#231F20";
}
/* 報價流程 輪播圖 end */



