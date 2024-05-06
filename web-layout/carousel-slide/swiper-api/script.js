

let swiperTest = new Swiper('.swiper', {
  
    /* 輪流 */
    /* loop: true, */

    /* 自動輪播 */
/* 
    autoplay: {
      delay: 2000,
    },

     */
    
    /* 方向: 水平:horizontal, 垂直:vertical  */
    direction: 'horizontal',
  
    /* 下方按鈕 可能自動點選 */
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // 左右按鈕 (上/下一頁), css 綁定
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // 下方進度 bar css 綁定
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


/* 

  it文章:
    https://ithelp.ithome.com.tw/articles/10321773
  討論文章  
    https://stackoverflow.com/questions/32945099/how-to-detect-current-slide-in-swiper-js
 */
function slideTab(index) {
  console.log(index);
  swiperTest.activeIndex = index;
  //swiper.realIndex = index;
}



swiper.on('slideChange', function (e) {
  // alert("slideChange e", e);  // e ==> event 無
});

