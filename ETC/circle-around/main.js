let center = 0;

const allAlbums = document.querySelectorAll(".album");
const setAllAlbumsPosition = (x) => {
  allAlbums.forEach((album, index) => {
    album.style.transform = `rotate(${(index + x) * -36}deg)
    translateY(700px)
    `;
  });
};
setAllAlbumsPosition(0);
const setAllAlbumsTransition = (x) => {
  allAlbums.forEach((album) => {
    album.style.transition = x;
  });
};

const draggable = document.querySelector(".draggable");
let firstPosition = 0;
let accPosition = 0;
let isDrawing = false;

const setAccPosition = (pos) => {
  if (pos <= 0 && pos >= -2000) return pos;
  return (pos - 2000) % 2000;
};
const getPosition = (x, x0, accPosition) => {
  let position = (x - x0 + accPosition) / 400;
  if (position > 0) {
    position -= 5;
  }
  center = Math.round(position) % 10;
  setAllAlbumsPosition(position);
};

draggable.addEventListener("mousedown", (e) => {
  firstPosition = e.offsetX;
  isDrawing = true;
  setAllAlbumsTransition("none");
});
draggable.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    getPosition(e.offsetX, firstPosition, accPosition);
    setAlbumDotsActive(center);
  }
});
draggable.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    setAllAlbumsTransition("transform 0.3s ease");
    setAllAlbumsPosition(center);
    setAlbumDotsActive(center);
    isDrawing = false;
    accPosition = setAccPosition(center * 400);
  }
});

const albumDots = document.querySelectorAll(".album-dot");
albumDots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    setAllAlbumsTransition("transform 0.3s ease");
    center = -index;
    accPosition = setAccPosition(center * 400);
    setAllAlbumsPosition(center);
    setAlbumDotsActive(center);
  });
});
const setAlbumDotsActive = (activeIndex) => {
  albumDots.forEach((dot, index) => {
    if (index === -activeIndex % 5) {
      return dot.classList.add("active");
    }
    return dot.classList.remove("active");
  });
};

setAlbumDotsActive(center);
