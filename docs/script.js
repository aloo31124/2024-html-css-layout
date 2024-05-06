
/* 主標頭動畫 */
animationH1Title(document.querySelector("h1")); 

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

const headerAnimationTop = document.querySelector('.header-animation').offsetTop;
const priceWorkFlowTop = document.querySelector('.price-work-flow').offsetTop;
const serviceListTop = document.querySelector('.service-list').offsetTop;
const portfolioBlockTop = document.querySelector('.portfolio-block').offsetTop;
const viewportHeight = window.innerHeight; // 取得當前設備 100vh 之 px
let scrollTop = 0;
let isTitleChangePriceWorkFlow = true;
let isTitleChangeServiceList = true;
let isTitleChangePortfolio = true;
let isNavClose = false;

/* 偵測 瀏覽器 改變寬度 */
window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;    
    let navCentent = document.querySelector(".nav-centent");
    if(screenWidth > 800 && !isNavClose) {
        navCentent.style.width = "660px";
    } else if(!isNavClose){
        navCentent.style.width = "350px";        
    }    
    currentNavIndex = 1;
    showNavItemAnimate();
});




/* 重整瀏覽器時 標頭動畫 定位方式 */
window.addEventListener('DOMContentLoaded', () => {
    scrollTop = window.scrollY;
    
    if(headerAnimationTop <= scrollTop && scrollTop <= (priceWorkFlowTop * 0.5)) {
        scrollAndMoveSlogan();
        fixedMoveTitle();
    } else {
        absoluteMoveTitle();
    }
  });

/* 偵測螢幕滾動 */
window.onscroll = () => {
    /* 滑鼠滾動, 判斷:
        => 1. nav 導覽列 是否透明
        => 2. 網頁標頭 移動判斷
        => 3. 每個 section h2標題變色 
    */
    scrollTop = window.scrollY;
    /* 於 標頭動畫 滾動scroll */
    if(headerAnimationTop <= scrollTop && scrollTop <= (priceWorkFlowTop * 0.5)) {
        scrollAndMoveSlogan();
        fixedMoveTitle();
    } else {
        absoluteMoveTitle();
    }

    /* 於 合作流程 滾動scroll */
    if(priceWorkFlowTop <= scrollTop && scrollTop <= serviceListTop) {          
        scrollAndCheckNav(priceWorkFlowTop);
        if(isTitleChangePriceWorkFlow) {            
            animationText(document.querySelector(".price-work-flow-title"));
            isTitleChangePriceWorkFlow = false; 
        }
    }
    /* 於 服務項目 滾動scroll */
    else if(serviceListTop <= scrollTop && scrollTop <= portfolioBlockTop) {
        scrollAndCheckNav(serviceListTop);
        if(isTitleChangeServiceList) {
            animationText(document.querySelector(".service-list-title"))
            isTitleChangeServiceList = false;
        }        
    }
    /* 於 作品集 滾動scroll */
    else if(portfolioBlockTop <= scrollTop && scrollTop <= (portfolioBlockTop + 1000)) {
        scrollAndCheckNav(portfolioBlockTop);        
        if(isTitleChangePortfolio) {
            animationText(document.querySelector(".portfolio-block-title"));
            isTitleChangePortfolio = false;
        }  
    }

    /* scroll 到 合作流程 後, 導覽列 自動縮小 */
    if(scrollTop >= priceWorkFlowTop && !isNavClose) {
        navClose();
    }
}

/* 滑鼠滾動時, 網頁標頭 水平移動動畫 */
function scrollAndMoveSlogan() {
    /* 水平位移 */
    let moveSlognRight = document.querySelector(".move-slogn-right");
    let moveSlognLeft = document.querySelector(".move-slogn-left");
    let maxHeight = document.documentElement.scrollHeight * 0.7 ;
    // 2. 計算百分比
    let percentage = ((window.scrollY) / maxHeight) * 250;
    // 3. 依照百分比調整 
    if(percentage < 100) { /* 40~100 */
        moveSlognRight.style.right = percentage + "vw";
        moveSlognLeft.style.left = percentage + "vw";
    }

    
}

/* 滑鼠滾動時, 回到 標頭區塊section  網頁標頭 動畫標題 fiexed 鎖住 螢幕上 */
function fixedMoveTitle() {
    let headerAnimationTextContent = document.querySelector(".header-animation-text-content");
    headerAnimationTextContent.style.position = "fixed";
    headerAnimationTextContent.style.bottom = "25vh";
    let iconDoubleDownArr = document.querySelector(".icon-double-down-arr");
    iconDoubleDownArr.style.position = "fixed";
    iconDoubleDownArr.style.bottom = "10%";
}

/* 滑鼠滾動時, 到下一個 區塊section  網頁標頭 動畫標題 absolute 鎖住 上一層 */
function absoluteMoveTitle() {
    let headerAnimationTextContent = document.querySelector(".header-animation-text-content");
    headerAnimationTextContent.style.position = "absolute";
    let iconDoubleDownArr = document.querySelector(".icon-double-down-arr");
    iconDoubleDownArr.style.position = "absolute";
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

const nav = document.querySelector('.nav-centent');
nav.addEventListener('mouseenter', function() {
    nav.style.opacity = 1;
});


/* h1標題 快速變色 start */
function animationH1Title(text) {
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for(let i=0; i<splitText.length; i++ ) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let spanListLength = text.querySelectorAll("span").length;
    for(let i = 1; i < spanListLength + 3; i++) {
        /* 閉包 */
        window.setTimeout(function() {
            if(i < text.querySelectorAll("span").length + 1) {
                const span = text.querySelectorAll("span")[spanListLength - i];
                span.classList.add("fadeanimate");
            }

            if(i >= 4) {
                const spanNext = text.querySelectorAll("span")[spanListLength - i + 4];
                spanNext.classList.remove("fadeanimate");
            }
            if(i == spanListLength + 2) {
                const spanNext = text.querySelectorAll("span")[1];
                spanNext.classList.remove("fadeanimate");
            }
            console.log(i);
        }, 50 * i);
    }
}
/* h1標題 快速變色 end */


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
        window.setTimeout(function() {
            const span = text.querySelectorAll("span")[i];
            span.classList.add("fade");
        }, 50 * i);
    }
}

/* h2 標題 底色變色 end */

/* ======================== scroll end ======================== */




/* ======================== 導覽列 start ======================== */
let previousNavIndex = 1;
let currentNavIndex = 1;
let navItem1 = document.querySelector("#nav-item1");
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
    let isRight = ((currentNavIndex - previousNavIndex) > 0);/* 判斷 藍色底線 位移方向為 左或右 */
    let moveDefault = isRight ? -150 : 150;
    let deviceWidth = window.innerWidth;

    let styleLeft = 0;
    let styleLeftSpace = 20;
    if(deviceWidth < 800) {
        styleLeft = 14;
        styleLeftSpace = 15;
        moveDefault = isRight ? -80 : 80;
    } 

    textBounceBottomBox.style.left = (styleLeft + currentNavIndex * styleLeftSpace) + "%";
    //textBounceBottomBox.style.transition  = "0.5s"; // 會造成水平位移 彈跳效果 卡頓

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

/* 導覽列縮放 */
let navCloseIcon = document.querySelector("#nav-close");
let navShowIcon = document.querySelector("#nav-show");

navCloseIcon.addEventListener("click", navClose);

/* 導覽列 縮小成 漢堡按鈕 */
function navClose() {
    let navCentent = document.querySelector(".nav-centent");
    let defaultWidth = 600;
    let moveVw = 8;
    navCentent.style.width = defaultWidth + "px";
    navCentent.style.minWidth = "0px";


    let logo = document.querySelector(".logo");
    logo.style.display = "none";
    let itemList = document.querySelector(".item-list");
    itemList.style.display = "none";
    let textBounceBottomBox = document.querySelector(".text-bounce-bottom-box");
    textBounceBottomBox.style.display = "none";

    navCentent.animate([
        // key frames
        { 
            width: (defaultWidth/2) + 'px',
            transform: 'translateX('+ moveVw +'vw)',
        },
        { 
            width: (defaultWidth/5) + 'px', 
            transform: 'translateX('+ moveVw * 2 +'vw)',
        },
        { 
            width: (defaultWidth/6) + 'px',
            transform: 'translateX('+ moveVw * 3 +'vw)',

        },
        { 
            width: (defaultWidth/7) + 'px',
            transform: 'translateX('+ moveVw * 4 +'vw)',
        },
        { 
            width: (defaultWidth/8) + 'px',
            transform: 'translateX('+ moveVw * 5 +'vw)',
        },
    ], {
        // sync options
        duration: 500,
        iterations: 1,
    });

    navCentent.style.width = '55px';
    navCentent.style.height = '60px';
    navCentent.style.transform = 'translateX('+ moveVw * 5 +'vw)';  
    
    navShowIcon.style.display = "block";
    isNavClose = true;
}

navShowIcon.addEventListener("click", () => {   
    navShowIcon.style.display = "none";
    let navCentent = document.querySelector(".nav-centent");
    let defaultWidth = 60;
    let moveVw = 8;
    navCentent.style.width = defaultWidth + "px";

    
    navCentent.animate([
        // key frames
        { 
            width: (defaultWidth*2) + 'px',
            transform: 'translateX('+ moveVw * 5 +'vw)',
        },
        { 
            width: (defaultWidth*5) + 'px', 
            transform: 'translateX('+ moveVw * 4 +'vw)',
        },
        { 
            width: (defaultWidth*6) + 'px',
            transform: 'translateX('+ moveVw * 3 +'vw)',

        },
        { 
            width: (defaultWidth*7) + 'px',
            transform: 'translateX('+ moveVw * 2 +'vw)',
        },
        { 
            width: (defaultWidth*8) + 'px',
            transform: 'translateX('+ moveVw * 1 +'vw)',
        },
    ], {
        // sync options
        duration: 200,
        iterations: 1,
    });

    
    let deviceWidth = window.innerWidth;
    if(deviceWidth < 800) {
        navCentent.style.width = '350px';
    } else {
        navCentent.style.width = '660px';
    }
    navCentent.style.transform = 'translateX(0)';   

    let logo = document.querySelector(".logo");
    logo.style.display = "flex";
    let itemList = document.querySelector(".item-list");
    itemList.style.display = "flex";

    
    let textBounceBottomBox = document.querySelector(".text-bounce-bottom-box");
    textBounceBottomBox.style.display = "flex";
    currentNavIndex = 1;
    showNavItemAnimate();
    isNavClose = false
});
/* ======================== 導覽列 end ======================== */


/* 背景圖 位移 start */
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    //報價流程-左側小星星: 垂直同向, 水平同向移動
    let leftLittleImage = document.querySelector(".left-little-img");
    let leftLittleImageTop = 35 + y * 0.005 ;
    let leftLittleImageLeft = 10 + x * 0.005;
    leftLittleImage.style.top = leftLittleImageTop + "vh";
    leftLittleImage.style.left = leftLittleImageLeft + "vw";
    
    //報價流程-右側背景圖: 垂直同向, 水平反向移動
    let rightImage = document.querySelector(".right-img");
    let rightImageTop = 10 + y * 0.005;
    let rightImageRight = 5 + x * 0.005;
    rightImage.style.top = rightImageTop + "vh";
    rightImage.style.right = rightImageRight + "vw";

    
    //服務項目-右側背景圖: 垂直同向, 水平同向移動
    let LeftImage = document.querySelector(".left-img");
    let LeftImageTop = 10 + y * 0.005 ;
    let LeftImageLeft = 15 + x * 0.005;
    LeftImage.style.top = LeftImageTop + "vh";
    LeftImage.style.left = LeftImageLeft + "vw";

    //服務項目-logo背景圖: 垂直同向, 水平反向移動
    let rightLogo = document.querySelector(".right-logo");
    let rightLogoTop = 40 + y * 0.002;
    let rightLogoRight = 14 + x * 0.002;
    rightLogo.style.top = rightLogoTop + "%";
    rightLogo.style.right = rightLogoRight + "%";

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
