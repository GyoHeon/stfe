import Slick from "react-slick";
import { useState } from "react";
import { Global, ImagesZoomWrapper, SlickWrapper } from "./style";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Images = images.map((image) => (
    <div className="img" key={image.src}>
      <img src={image.src} alt={image.src} />
    </div>
  ));

  return (
    <ImagesZoomWrapper>
      <Global />
      <header>
        <h1>상세 이미지</h1>
        <button onClick={onClose}>X</button>
      </header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
            dots
          >
            {Images}
          </Slick>
        </div>
      </SlickWrapper>
    </ImagesZoomWrapper>
  );
};

export default ImagesZoom;
