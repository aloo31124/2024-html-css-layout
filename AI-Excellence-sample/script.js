

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


/* 動畫標頭 下方雙箭頭 => 上下移動 與 被點選 start */
const iconDoubleDownArr = document.querySelector(".icon-double-down-arr"); // Select the icon
let isDown = false;
setInterval(moveIcon, 2000);
function moveIcon() {
    if(isDown) {
        iconDoubleDownArr.style.bottom = "10%"
    } else  {
        iconDoubleDownArr.style.bottom = "4%"
    }
    isDown = !isDown;
}

iconDoubleDownArr.addEventListener("click", () => {
    const targetSection = document.getElementById("price-work-flow");
    targetSection.scrollIntoView({ behavior: 'smooth' });
});
/* 動畫標頭 下方雙箭頭 end */


/* ======================== scroll start ======================== */

const nav = document.querySelector('.nav-centent');
nav.addEventListener('mouseenter', function() {
    nav.style.opacity = 1;
});

const headerAnimationTop = document.querySelector('.header-animation').offsetTop;
const priceWorkFlowTop = document.querySelector('.price-work-flow').offsetTop;
const serviceListTop = document.querySelector('.service-list').offsetTop;
const portfolioBlockTop = document.querySelector('.portfolio-block').offsetTop;
const viewportHeight = window.innerHeight; // 取得當前設備 100vh 之 px
let scrollTop = 0;
let isTitleChangePriceWorkFlow = true;
let isTitleChangeServiceList = true;
let isTitleChangePortfolio = true;


window.onscroll = () => {
    // 滑鼠滾動時, 網頁標頭 水平移動動畫
    scrollAndMoveTitle();

    // 滑鼠滾動, 判斷每個 section h2標題變色
    // 滑鼠滾動, 導覽列 半透明
    scrollTop = window.scrollY;
    if(headerAnimationTop <= scrollTop && scrollTop <= priceWorkFlowTop) {
        scrollAndCheckNav(headerAnimationTop);
    }
    else if(priceWorkFlowTop <= scrollTop && scrollTop <= serviceListTop) {
        scrollAndCheckNav(priceWorkFlowTop);
        if(isTitleChangePriceWorkFlow) {
            animationText(document.querySelector(".price-work-flow-title"));
            isTitleChangePriceWorkFlow = false;
        }
    }
    else if(serviceListTop <= scrollTop && scrollTop <= portfolioBlockTop) {
        scrollAndCheckNav(serviceListTop);
        if(isTitleChangeServiceList) {
            animationText(document.querySelector(".service-list-title"))
            isTitleChangeServiceList = false;
        }        
    }
    else if(portfolioBlockTop <= scrollTop && scrollTop <= (portfolioBlockTop + 1000)) {
        scrollAndCheckNav(portfolioBlockTop);        
        if(isTitleChangePortfolio) {
            animationText(document.querySelector(".portfolio-block-title"));
            isTitleChangePortfolio = false;
        }  
    }
    
}

/* 滑鼠滾動時, 網頁標頭 水平移動動畫 */
function scrollAndMoveTitle() {
    
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

/* 滑鼠滾動, 導覽列 半透明 */
function scrollAndCheckNav(SectionTop) {
    if(
        SectionTop + (viewportHeight * 0.1) < scrollTop &&
        scrollTop < SectionTop + (viewportHeight * 0.8)
    ) {
        nav.style.opacity = 0.3;
    } 
    else {
        nav.style.opacity = 0.8;
    }
}




/* h2 標題 底色變色 start */
/* text-color-transition */

function animationText(text) {
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for(let i=0; i<splitText.length; i++ ) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    for(let i = 0; i < text.querySelectorAll("span").length; i++) {
        /* 閉包 */
        (function(i){
          window.setTimeout(function() {
            const span = text.querySelectorAll("span")[i];
            span.classList.add("fade");
          }, 50 * i);
        })(i);
    }
}

/* h2 標題 底色變色 end */

/* ======================== scroll end ======================== */




/* 導覽列 
    https://stackoverflow.com/questions/59573722/how-can-i-set-a-css-keyframes-in-javascript
*/
let navItem1 = document.querySelector("#nav-item1");
let previousNavIndex = 1;
let currentNavIndex = 1;
navItem1.addEventListener("click", () => {
    currentNavIndex = 1;
    showNavItemAnimate();
});
let navItem2 = document.querySelector("#nav-item2");
navItem2.addEventListener("click", () => {
    currentNavIndex = 2;
    showNavItemAnimate();
});
let navItem3 = document.querySelector("#nav-item3");
navItem3.addEventListener("click", () => {
    currentNavIndex = 3;
    showNavItemAnimate();
});
let navItem4 = document.querySelector("#nav-item4");
navItem4.addEventListener("click", () => {
    currentNavIndex = 4;
    showNavItemAnimate();
});

function showNavItemAnimate() {
    let textBounceBottomBox = document.querySelector(".text-bounce-bottom-box");
    let isRight = ((currentNavIndex - previousNavIndex) > 0);/* 判斷 nav導覽列 位移方向為 左或右 */
    let moveDefault = isRight ? -150 : 150;
    let deviceWidth = window.innerWidth;

    let styleLeft = 5;
    let styleLeftSpace = 20.25;
    if(deviceWidth < 800) {
        styleLeft = 20;
        styleLeftSpace = 16.5;
    } 

    textBounceBottomBox.style.left = (styleLeft + currentNavIndex * styleLeftSpace) + "%";
    //textBounceBottomBox.style.transition  = "0.5s"; // 會造成水平位移 彈跳效果

    let textBounceBottom = document.querySelector(".text-bounce-bottom");
    textBounceBottom.animate([
        // key frames
        { transform: 'translateX(' + (moveDefault) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault) + 'px)' },
        { transform: 'translateX(' + (moveDefault/2) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault/2) + 'px)' },
        { transform: 'translateX(' + (moveDefault/10) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault/10) + 'px)' },
        { transform: 'translateX(' + (moveDefault/40) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault/40) + 'px)' },
        { transform: 'translateX(' + (moveDefault/60) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault/60) + 'px)' },
      ], {
        // sync options
        duration: 800,
        iterations: 1,
      });

      previousNavIndex = currentNavIndex;
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
    let rightLogoRight = 5 + x * 0.002;
    rightLogo.style.top = rightLogoTop + "vh";
    rightLogo.style.right = rightLogoRight + "vw";

});
/* 背景圖 位移 end */




/* 報價流程 輪播圖 start */

let moveIndex = 1; /* 需要移動至哪個 輪播圖塊 */

/* 上方bar被點選 */
let flowTab1 = document.querySelector("#flowTab1");
let flowTab2 = document.querySelector("#flowTab2");
let flowTab3 = document.querySelector("#flowTab3");
let flowTab4 = document.querySelector("#flowTab4");
flowTab1.addEventListener("click", () => {
    moveIndex = 1;
    defaultStyle();
    setStyle();
    slideMove();
    showSlideList()
});
flowTab2.addEventListener("click", () => {
    moveIndex = 2;
    defaultStyle();
    setStyle();
    slideMove();
    showSlideList()
});
flowTab3.addEventListener("click", () => {
    moveIndex = 3;
    defaultStyle();
    setStyle();
    slideMove();
    showSlideList()
});
flowTab4.addEventListener("click", () => {
    moveIndex = 4;
    defaultStyle();
    setStyle();
    slideMove();
    showSlideList()
});

/* 下方 icon 列 被點選 */
let flowIcon1 = document.querySelector("#flowIcon1");
let flowIcon2 = document.querySelector("#flowIcon2");
let flowIcon3 = document.querySelector("#flowIcon3");
let flowIcon4 = document.querySelector("#flowIcon4");
flowIcon1.addEventListener("click", () => {
    moveIndex = 1;
    defaultStyle();
    setStyle();
    slideMove();
    showSlideList()
});
flowIcon2.addEventListener("click", () => {
    moveIndex = 2;
    defaultStyle();
    setStyle();
    slideMove();
    showSlideList()
});
flowIcon3.addEventListener("click", () => {
    moveIndex = 3;
    defaultStyle();
    setStyle();
    slideMove();
    showSlideList()
});
flowIcon4.addEventListener("click", () => {
    moveIndex = 4;
    defaultStyle();
    setStyle();
    slideMove();
    showSlideList()
});



/* 報價流程 輪播圖 拖曳  */
const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");
const slide4 = document.querySelector("#slide4");
let isDrag = false;
let _dragIndex = 1;
slide1.addEventListener("mousedown", (event) => {
    isDrag = true;
    const currentX = event.clientX;
    _dragIndex = 1;
    dragIndex(currentX);
});
slide2.addEventListener("mousedown", (event) => {
    isDrag = true;
    const currentX = event.clientX;
    _dragIndex = 2;
    dragIndex(currentX);
});
slide3.addEventListener("mousedown", (event) => {
    isDrag = true;
    const currentX = event.clientX;
    _dragIndex = 3;
    dragIndex(currentX);
});
slide4.addEventListener("mousedown", (event) => {
    isDrag = true;
    const currentX = event.clientX;
    _dragIndex = 4;
    dragIndex(currentX);
});
function dragIndex(currentX) {
    let previousX = currentX;

    window.addEventListener('mousemove', function(event) {
        const newX = event.clientX;
        if(isDrag) {    
            if (newX > previousX) { /* 向右邊滑動 */
                if(_dragIndex == 1) {
                } 
                else if (_dragIndex == 2) {
                    moveIndex = 1;
                }
                else if (_dragIndex == 3) {
                    moveIndex = 2;
                }
                else if (_dragIndex == 4) {
                    moveIndex = 3;
                }
            } else if (newX < previousX) {  /* 向左邊滑動 */
                if(_dragIndex == 1) {
                    moveIndex = 2;
                }
                else if (_dragIndex == 2) {
                    moveIndex = 3;
                }
                else if (_dragIndex == 3) {
                    moveIndex = 4;
                }
                else if (_dragIndex == 4) {
                }
            }
            defaultStyle();
            setStyle();
            slideMove();
        }
    });
}
slide1.addEventListener("mouseup", (event) => {
    isDrag = false;
});
/* 初始樣式 */
function defaultStyle() {
    flowTab1.style.color = "#231F20";
    flowTab2.style.color = "#231F20";
    flowTab3.style.color = "#231F20";
    flowTab4.style.color = "#231F20";
    
    flowIcon1.style.width = "10px";
    flowIcon2.style.width = "10px";
    flowIcon3.style.width = "10px";
    flowIcon4.style.width = "10px";
}

/* 位移前 相關 tab, icon 變色,樣式改變 */
function setStyle(){
    if(moveIndex == 1) {
        flowTab1.style.color = "#F1B41B";
        flowIcon1.style.width = "20px";
    }
    else if(moveIndex == 2) {
        flowTab2.style.color = "#F1B41B";
        flowIcon2.style.width = "20px";
    }
    else if(moveIndex == 3) {
        flowTab3.style.color = "#F1B41B";
        flowIcon3.style.width = "20px";
    }
    else if(moveIndex == 4) {
        flowTab4.style.color = "#F1B41B";
        flowIcon4.style.width = "20px";
    }
}

/* 位移 輪播圖 */
function slideMove() {
    let move = (moveIndex -1).toString();
    slide1.style.transform = "translateX(-"+ move +"00%)";
    slide2.style.transform = "translateX(-"+ move +"00%)";
    slide3.style.transform = "translateX(-"+ move +"00%)";
    slide4.style.transform = "translateX(-"+ move +"00%)";    
    isDrag = false;
}



/* 報價輪播圖 藍色底線位移 */
function showSlideList() {
    let textBounceBottomBox = document.querySelector(".price-work-flow-bounce-bottom-box");
    //let isRight = ((currentNavIndex - previousNavIndex) > 0);/* 判斷 nav導覽列 位移方向為 左或右 */
    //let moveDefault = isRight ? -150 : 150;
    let moveDefault = 150;
    let deviceWidth = window.innerWidth;

    let styleLeft = 4;
    let styleLeftSpace = 28.25;
    if(deviceWidth < 800) {
        styleLeft = 1;
        styleLeftSpace = 31.25;
    } 

    textBounceBottomBox.style.left = (styleLeft + (moveIndex - 1) * styleLeftSpace) + "%";
    //textBounceBottomBox.style.transition  = "0.5s"; // 會造成水平位移 彈跳效果

    let textBounceBottom = document.querySelector(".price-work-flow-bounce-bottom");
    textBounceBottom.animate([
        // key frames
        { transform: 'translateX(' + (moveDefault) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault) + 'px)' },
        { transform: 'translateX(' + (moveDefault/2) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault/2) + 'px)' },
        { transform: 'translateX(' + (moveDefault/10) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault/10) + 'px)' },
        { transform: 'translateX(' + (moveDefault/40) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault/40) + 'px)' },
        { transform: 'translateX(' + (moveDefault/60) + 'px)' },
        { transform: 'translateX(' + (-1 * moveDefault/60) + 'px)' },
      ], {
        // sync options
        duration: 800,
        iterations: 1,
      });
      previousNavIndex = currentNavIndex;
}
