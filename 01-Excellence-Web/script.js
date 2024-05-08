
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
const closedfooter = portfolioBlockTop * 1.05;
const viewportHeight = window.innerHeight; // 取得當前設備 100vh 之 px
let scrollTop = 0;
let isTitleChangePriceWorkFlow = true;
let isTitleChangeServiceList = true;
let isTitleChangePortfolio = true;

/* 偵測 瀏覽器 改變寬度 */
window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;    
    let navCentent = document.querySelector(".nav-centent");
    if(screenWidth > 800 && !isNavClose) {
        navCentent.style.width = "660px";
    } else if(!isNavClose){
        navCentent.style.width = "350px";        
    }
    checkCloseIconPosition(navCentent);
    /* 導覽列nav 所在高度top, 與其 底線動畫判斷 */
    checkNavTop();

    /* 合作流程 輪播圖 流程 */
    if(screenWidth < 900) {
        clickFlowSlide(1);
    }

});


/* 重整瀏覽器時 標頭動畫 定位方式 */
window.addEventListener('DOMContentLoaded', () => {
    scrollTop = window.scrollY;
    if(headerAnimationTop <= scrollTop && scrollTop <= (priceWorkFlowTop * 0.5)) {
        scrollAndMoveSlogan();
        fixedHeader();
    } else {
        absoluteHeader();
    }

    /* 導覽列nav 所在高度top, 與其 底線動畫判斷 */
    checkNavTop();
});

/* -------- 偵測螢幕滾動 start -------- */
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
        fixedHeader();
    } else {
        absoluteHeader();
    }

    /* 導覽列nav 所在高度top, 與其 底線動畫判斷 */
    checkNavTop();

    /* 判斷 section h2 標題 */
    if(priceWorkFlowTop <= scrollTop && scrollTop <= serviceListTop && isTitleChangePriceWorkFlow) { 
        animationText(document.querySelector(".price-work-flow-title"));
        isTitleChangePriceWorkFlow = false; 
    }
    else if(serviceListTop <= scrollTop && scrollTop <= portfolioBlockTop && isTitleChangeServiceList) {
        animationText(document.querySelector(".service-list-title"))
        isTitleChangeServiceList = false;     
    }
    else if(portfolioBlockTop <= scrollTop && scrollTop <= (portfolioBlockTop + 1000) && isTitleChangePortfolio) { 
        animationText(document.querySelector(".portfolio-block-title"));
        isTitleChangePortfolio = false;
    }
}
/* -------- 偵測螢幕滾動 end -------- */
/* ======================== scroll end ======================== */


/* ======================== 網頁標頭 與 section 動畫效果 start ======================== */
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
function fixedHeader() {
    let headerAnimationTextContent = document.querySelector(".header-animation-text-content");
    headerAnimationTextContent.style.position = "fixed";
    let iconDoubleDownArr = document.querySelector(".icon-double-down-arr");
    iconDoubleDownArr.style.position = "fixed";
}
/* 滑鼠滾動時, 到下一個 區塊section  網頁標頭 動畫標題 absolute 鎖住 上一層 */
function absoluteHeader() {
    let headerAnimationTextContent = document.querySelector(".header-animation-text-content");
    headerAnimationTextContent.style.position = "absolute";
    let iconDoubleDownArr = document.querySelector(".icon-double-down-arr");
    iconDoubleDownArr.style.position = "absolute";
}
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
        }, 50 * i);
    }
}
/* h2 標題 底色變色 start */
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
/* ======================== 網頁標頭 與 section 動畫效果 end ======================== */





/* ======================== 導覽列nav start ======================== */
let previousNavIndex = 1; /* 上一個 nav index */
let currentNavIndex = 1;
let isCheckNavTop = true;
let isNavChangePriceWorkFlow = false;
let isNavChangeServiceList = true;
let isNavChangePortfolio = true;
let isNavFooter = true;
let isNavClose = false;

/* 導覽列nav 項目item 被點選 */
function clickNavItem(index) {
    currentNavIndex = index;

    /* 點選 item 後, 關閉 nav 高度top 偵測, 避免動畫重疊 */
    isCheckNavTop = false;
    moveBlueBottom();
    window.setTimeout(() => {
        /* 延遲開啟 */
        isCheckNavTop = true;
    }, 3500);
}


/* 藍色底線位移 */
function moveBlueBottom() {
    let textBounceBottomBox = document.querySelector(".text-bounce-bottom-box");
    let moveDefault = 150;
    let styleLeft = 55;
    let styleLeftSpace = 130;
    
    let deviceWidth = window.innerWidth;
    if(deviceWidth < 800) {
        styleLeft = 28.5;
        styleLeftSpace = 65;
        moveDefault = 80;
    } 

    textBounceBottomBox.style.left = (styleLeft + (currentNavIndex - 1) * styleLeftSpace) + "px";
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
}

/* 導覽列nav 所在高度top, 與其 底線動畫判斷 */
function checkNavTop() {
    if((priceWorkFlowTop * 0.65)<=scrollTop && scrollTop<=(priceWorkFlowTop * 0.8) && !isNavClose) {
        /* scroll 到 合作流程 前, 導覽列 自動縮小 */
        navClose();
    }

    if(!isCheckNavTop) {
        return; /* 關閉 nav 高度判斷 */
    }
    let padding = 0.8;
    if(priceWorkFlowTop*padding <= scrollTop && scrollTop <= serviceListTop*padding && isNavChangePriceWorkFlow) { 
        defaultCheck();
        currentNavIndex = 1;
        moveBlueBottom();
        isNavChangePriceWorkFlow = false; 
    }
    else if(serviceListTop*padding <= scrollTop && scrollTop <= portfolioBlockTop*padding && isNavChangeServiceList) {
        defaultCheck();
        currentNavIndex = 2;
        moveBlueBottom();
        isNavChangeServiceList = false;     
    }
    else if(portfolioBlockTop*padding <= scrollTop && scrollTop <= closedfooter && isNavChangePortfolio) { 
        defaultCheck();
        currentNavIndex = 3;
        moveBlueBottom();
        isNavChangePortfolio = false;
    }
    else if(closedfooter <= scrollTop && isNavFooter) { 
        defaultCheck();
        currentNavIndex = 4;
        moveBlueBottom();
        isNavFooter = false;
    }
    function defaultCheck() {
        isNavChangePriceWorkFlow = true;
        isNavChangeServiceList = true;
        isNavChangePortfolio = true;
        isNavFooter = true;
    }
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


    let textBottomContainer = document.querySelector(".text-bounce-bottom-container");
    textBottomContainer.style.display = "none";
    let closeIcon = document.querySelector(".fa-close");
    closeIcon.style.display = "none";
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

    navCentent.style.width = '60px';
    navCentent.style.height = '60px';
    // 關閉 icon , 上下 間距一樣
    
    /* 關閉後, top, right 調整 */    
    navShowIcon.style.display = "flex";
    isNavClose = true;
    checkCloseIconPosition(navCentent);
}

/* 關閉後, top, right 調整 */
function checkCloseIconPosition(navCentent) {
    if(!isNavClose) {
        return;
    }

    let deviceWidth = window.innerWidth;
    if(1500 < deviceWidth) {
        navCentent.style.transform = 'translateX(46vw)';  
    }
    else if(800<=deviceWidth && deviceWidth<=1500) {
        navCentent.style.transform = 'translateX(44vw)';  
    }
    else if(deviceWidth<=800) {
        navCentent.style.transform = 'translateX(41vw)';  
    }    
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
    let closeIcon = document.querySelector(".fa-close");
    closeIcon.style.display = "flex";
    let textBottomContainer = document.querySelector(".text-bounce-bottom-container");
    textBottomContainer.style.display = "flex";    
    let textBounceBottomBox = document.querySelector(".text-bounce-bottom-box");
    textBounceBottomBox.style.display = "flex";

    moveBlueBottom(currentNavIndex);
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
function clickFlowSlide(index) {
    let deviceWidth = window.innerWidth;
    if(deviceWidth <= 800) {
        /* 小設備無 click事件 */
        return;
    }

    moveIndex = index;
    moveFlowSlide();
}
function moveFlowSlide() {
    defaultStyle();
    setStyle();
    slideMove();
    showSlideList();
}
/* 初始樣式 */
function defaultStyle() {
    const svgImg1 = document.querySelector("#svgImg1");
    const svgImg1click = document.querySelector("#svgImg1click");
    const svgImg2 = document.querySelector("#svgImg2");
    const svgImg2click = document.querySelector("#svgImg2click");
    const svgImg3 = document.querySelector("#svgImg3");
    const svgImg3click = document.querySelector("#svgImg3click");
    const svgImg4 = document.querySelector("#svgImg4");
    const svgImg4click = document.querySelector("#svgImg4click");
    const flowIcon1 = document.querySelector("#flowIcon1");
    const flowIcon2 = document.querySelector("#flowIcon2");
    const flowIcon3 = document.querySelector("#flowIcon3");
    const flowIcon4 = document.querySelector("#flowIcon4");

    svgImg1.style.display = "flex";
    svgImg2.style.display = "flex";
    svgImg3.style.display = "flex";
    svgImg4.style.display = "flex";

    svgImg1click.style.display = "none";
    svgImg2click.style.display = "none";
    svgImg3click.style.display = "none";
    svgImg4click.style.display = "none";

    flowIcon1.style.width = "10px";
    flowIcon2.style.width = "10px";
    flowIcon3.style.width = "10px";
    flowIcon4.style.width = "10px";
}
defaultStyle();
setStyle();

/* 位移前 相關 tab, icon 變色,樣式改變 */
function setStyle(){
    const svgImg1 = document.querySelector("#svgImg1");
    const svgImg1click = document.querySelector("#svgImg1click");
    const svgImg2 = document.querySelector("#svgImg2");
    const svgImg2click = document.querySelector("#svgImg2click");
    const svgImg3 = document.querySelector("#svgImg3");
    const svgImg3click = document.querySelector("#svgImg3click");
    const svgImg4 = document.querySelector("#svgImg4");
    const svgImg4click = document.querySelector("#svgImg4click");
    const flowIcon1 = document.querySelector("#flowIcon1");
    const flowIcon2 = document.querySelector("#flowIcon2");
    const flowIcon3 = document.querySelector("#flowIcon3");
    const flowIcon4 = document.querySelector("#flowIcon4");

    if(moveIndex == 1) {
        svgImg1click.style.display = "flex";
        svgImg1.style.display = "none";
        flowIcon1.style.width = "20px";
    }
    else if(moveIndex == 2) {
        svgImg2click.style.display = "flex";
        svgImg2.style.display = "none";
        flowIcon2.style.width = "20px";
    }
    else if(moveIndex == 3) {
        svgImg3click.style.display = "flex";
        svgImg3.style.display = "none";
        flowIcon3.style.width = "20px";
    }
    else if(moveIndex == 4) {
        svgImg4click.style.display = "flex";
        svgImg4.style.display = "none";
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
    let moveDefault = 150;

    let styleLeft = 25;
    let styleLeftSpace = 98;

    textBounceBottomBox.style.left = (styleLeft + (moveIndex - 1) * styleLeftSpace) + "px";
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
}



/* 報價流程 輪播圖 拖曳  
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
            if (newX > previousX) {
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
            } else if (newX < previousX) {  
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
*/

