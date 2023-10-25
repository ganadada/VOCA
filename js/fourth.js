const slides4 = document.querySelector("#slideShow4 .img-container");
const sliderImg4 = document.querySelectorAll("#slideShow4 .img-container li");
let currentIdx4 = 0;
const slideCount4 = sliderImg4.length;
const before4 = document.querySelector(".before4");
const after4 = document.querySelector(".after4");
const arrowWrap4 = document.querySelector(".arrow-wrap4");

before4.addEventListener("click", function () {
  if (currentIdx4 > 0) {
    currentIdx4--;
    moveSlide4(currentIdx4);
  }
});

after4.addEventListener("click", function () {
  if (currentIdx4 < slideCount4 - 1) {
    currentIdx4++;
    moveSlide4(currentIdx4);
  }
});

function moveSlide4(idx) {
  slides4.style.left = -idx * 100 + "%";
  currentIdx4 = idx;
}

after4.addEventListener("mouseenter", () => {
  arrowWrap4.style.opacity = 1;
});

after4.addEventListener("mouseleave", () => {
  arrowWrap4.style.opacity = 0;
});

before4.addEventListener("mouseenter", () => {
  arrowWrap4.style.opacity = 1;
});

before4.addEventListener("mouseleave", () => {
  arrowWrap4.style.opacity = 0;
});

slides4.addEventListener("mouseenter", () => {
  arrowWrap4.style.opacity = 1;
});

slides4.addEventListener("mouseleave", () => {
  arrowWrap4.style.opacity = 0;
});
