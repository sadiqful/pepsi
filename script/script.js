const pepsi = document.querySelector('.pepsi');
const pepsiBlue = document.querySelector('.pepsi-blue');
const pepsiSilver = document.querySelector('.pepsi-silver');
const pepsiBlack = document.querySelector('.pepsi-black');

const slider = (pepsiType) => {
    pepsi.src = pepsiType;
}

const changeBg = (color) => {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

pepsiBlue.addEventListener('click', () => {
    slider('../images/pepsi001.png');
    changeBg('#0262be');
});

pepsiSilver.addEventListener('click', () => {
    slider('../images/pepsi002.png');
    changeBg('#e60c2c');
});

pepsiBlack.addEventListener('click', () => {
    slider('../images/pepsi003.png');
    changeBg('#1e1e1e');
});