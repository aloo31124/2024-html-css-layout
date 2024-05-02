
/* h2 標題 底色變色 start */
const text = document.querySelector(".fancy");
const text2 = document.querySelector(".fancy2");

animationText(text);
animationText(text2);

function animationText(text) {
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for(let i=0; i<splitText.length; i++ ) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }
    
    let char = 0;
    let itmer = setInterval(onTick, 300);
    
    function onTick() {
        const span = text.querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        if(char === splitText.lengths) {
            complete();
            return;
        }
    }
    
    function complete() {
        clearInterval(itmer);
    }
}
/* h2 標題 底色變色 end */