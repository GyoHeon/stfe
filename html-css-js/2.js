const kindWrap = document.querySelector(".kind_wrap");
const slider = kindWrap.querySelector(".slider");
const slideLis = slider.querySelectorAll("li");
const moveButton = document.querySelector(".arrow");
slider.append(slideLis[2].cloneNode(true));

const liWidth = slideLis[0].offsetWidth;
const sliderWidth = liWidth * slideLis.length;
let moveDist = 0;
let speedTime = 500;

slider.style.width = sliderWidth + "px";
slider.style.left = 0;

moveButton.addEventListener("click", moveSlide);

function moveSlide(ev) {
  ev.preventDefault();
  let sliderLeft = slider.style.left;

  slider.style.transition = `all ${speedTime}ms ease`;

  if (ev.target.className === "next") {
    if (sliderLeft === "-3200px") {
      setTimeout(() => {
        slider.style.transition = `none`;
        moveDist = -800;
      }, speedTime);
    } else {
      moveDist -= liWidth;
    }
  } else {
    if (sliderLeft >= "0px") {
      slider.style.transition = `none`;
      moveDist = -3200;
    } else {
      moveDist += liWidth;
    }
  }
  (function () {
    slider.style.left = `${moveDist}px`;
  })();
  console.log(moveDist);
}
