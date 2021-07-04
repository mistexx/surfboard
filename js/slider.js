const buttonLeft = document.querySelector("#sliderLeft")
const buttonRight = document.querySelector("#sliderRight")
const itemsList = document.querySelector("#slider")
const item = document.querySelector(".assortment__item")

const step = 940;
const minRight = 0;
const maxRight = 940;

let currentRight = 0;

itemsList.style.right = currentRight;

buttonRight.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = '${currentRight}px';
    }
});

buttonLeft.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight > maxRight) {
        currentRight -= step;
        itemsList.style.right = '${currentRight}px';
    }
});