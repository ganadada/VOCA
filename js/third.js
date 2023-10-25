const slides3 = document.querySelector("#slideShow3 .img-container");
const sliderImg3 = document.querySelectorAll("#slideShow3 .img-container li");
let currentIdx3 = 0;
const slideCount3 = sliderImg3.length;
const before3 = document.querySelector(".before3");
const after3 = document.querySelector(".after3");
const arrowWrap3 = document.querySelector(".arrow-wrap3");

before3.addEventListener("click", function () {
  if (currentIdx3 > 0) {
    currentIdx3--;
    moveSlide3(currentIdx3);
  }
});

after3.addEventListener("click", function () {
  if (currentIdx3 < slideCount3 - 1) {
    currentIdx3++;
    moveSlide3(currentIdx3);
  }
});

function moveSlide3(idx) {
  slides3.style.left = -idx * 100 + "%";
  currentIdx3 = idx;
}

after3.addEventListener("mouseenter", () => {
  arrowWrap3.style.opacity = 1;
});

after3.addEventListener("mouseleave", () => {
  arrowWrap3.style.opacity = 0;
});

before3.addEventListener("mouseenter", () => {
  arrowWrap3.style.opacity = 1;
});

before3.addEventListener("mouseleave", () => {
  arrowWrap3.style.opacity = 0;
});

slides3.addEventListener("mouseenter", () => {
  arrowWrap3.style.opacity = 1;
});

slides3.addEventListener("mouseleave", () => {
  arrowWrap3.style.opacity = 0;
});

moveSlide3(0);
