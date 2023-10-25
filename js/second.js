const slides2 = document.querySelector("#slideShow2 .img-container");
const sliderImg2 = document.querySelectorAll("#slideShow2 .img-container li");
let currentIdx2 = 0;
const slideCount2 = sliderImg2.length;
const before2 = document.querySelector(".before2");
const after2 = document.querySelector(".after2");
const arrowWrap2 = document.querySelector(".arrow-wrap2");

before2.addEventListener("click", function () {
  if (currentIdx2 > 0) {
    currentIdx2--;
    moveSlide2(currentIdx2);
  }
});

after2.addEventListener("click", function () {
  if (currentIdx2 < slideCount2 - 1) {
    currentIdx2++;
    moveSlide2(currentIdx2);
  }
});

function moveSlide2(idx) {
  slides2.style.left = -idx * 100 + "%";
  currentIdx2 = idx;
}

after2.addEventListener("mouseenter", () => {
  arrowWrap2.style.opacity = 1;
});

after2.addEventListener("mouseleave", () => {
  arrowWrap2.style.opacity = 0;
});

before2.addEventListener("mouseenter", () => {
  arrowWrap2.style.opacity = 1;
});

before2.addEventListener("mouseleave", () => {
  arrowWrap2.style.opacity = 0;
});

slides2.addEventListener("mouseenter", () => {
  arrowWrap2.style.opacity = 1;
});

slides2.addEventListener("mouseleave", () => {
  arrowWrap2.style.opacity = 0;
});
