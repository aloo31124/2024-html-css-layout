

const swiper = new Swiper('.swiper', {
  
    /* 輪流 */
    loop: true,

    /* 自動輪播 */
    autoplay: {
      delay: 2000,
    },
    
    /* 方向: 水平:horizontal, 垂直:vertical  */
    direction: 'horizontal',
  
    /* 下方按鈕 可能自動點選 */
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

