function slider(targetImgSrc){
    document.querySelector('.pepsi').src = `./images/${targetImgSrc}`;
}

function changeBg(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}