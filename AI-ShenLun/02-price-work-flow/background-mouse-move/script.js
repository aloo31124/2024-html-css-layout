



document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    //緊跟游標
    const cursor = document.querySelector(".cursor");
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";

    //同向移動
    const mouseMove = document.querySelector(".mouse-move");
    mouseMoveTop = 100 + (y*0.1);
    mouseMoveLeft = 100 + (x*0.1);
    if(mouseMoveTop<150 || mouseMoveLeft<150) {
        mouseMove.style.top = mouseMoveTop + "px";
        mouseMove.style.left = mouseMoveLeft + "px";
    }    
    
    //水平反向移動
    const revertMouseMove = document.querySelector(".revert-mouse-move");
    mouseRevertMoveTop = 100 + (y*0.1);
    mouseRevertMoveLeft = 500 + (x*0.1);
    if(mouseRevertMoveTop<150 || mouseRevertMoveLeft<550) {
        revertMouseMove.style.top = mouseRevertMoveTop + "px";
        revertMouseMove.style.right = mouseRevertMoveLeft + "px";
    }

});



