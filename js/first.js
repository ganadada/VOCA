const slides1 = document.querySelector("#slideShow1 .img-container");
const sliderImg1 = document.querySelectorAll("#slideShow1 .img-container li");
let currentIdx1 = 0;
const slideCount1 = sliderImg1.length;
const before1 = document.querySelector(".before");
const after1 = document.querySelector(".after");
const arrowWrap = document.querySelector(".arrow-wrap");

before1.addEventListener("click", function () {
  if (currentIdx1 > 0) {
    currentIdx1--;
    moveSlide1(currentIdx1);
  }
});

after1.addEventListener("click", function () {
  if (currentIdx1 < slideCount1 - 1) {
    currentIdx1++;
    moveSlide1(currentIdx1);
  }
});

function moveSlide1(idx) {
  slides1.style.left = -idx * 100 + "%";
  currentIdx1 = idx;
}

after1.addEventListener("mouseenter", () => {
  arrowWrap.style.opacity = 1;
});

after1.addEventListener("mouseleave", () => {
  arrowWrap.style.opacity = 0;
});

before1.addEventListener("mouseenter", () => {
  arrowWrap.style.opacity = 1;
});

before1.addEventListener("mouseleave", () => {
  arrowWrap.style.opacity = 0;
});

slides1.addEventListener("mouseenter", () => {
  arrowWrap.style.opacity = 1;
});

slides1.addEventListener("mouseleave", () => {
  arrowWrap.style.opacity = 0;
});
moveSlide1(0);
