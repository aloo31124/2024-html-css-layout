

let navbar = document.querySelector(".navbar");
let cartItem = document.querySelector(".cart-items-container");
let searchForm = document.querySelector(".search-form");

/* 清除全部 icon active 效果 */
function removeAllIconActive() {
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
    searchForm.classList.remove("active");
}



/* 導覽列切換 */
document.querySelector("#menu-btn").onclick = () => {
    removeAllIconActive();
    navbar.classList.toggle("active");
}

/* 商城列切換 */
document.querySelector("#car-btn").onclick = () => {
    removeAllIconActive();
    cartItem.classList.toggle("active");
}

/* 搜尋外框切換 */
document.querySelector("#search-btn").onclick = () => {
    removeAllIconActive();
    searchForm.classList.toggle("active");
}


window.scroll = () => {
    removeAllIconActive();
}


