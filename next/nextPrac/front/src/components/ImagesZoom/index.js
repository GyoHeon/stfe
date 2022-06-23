import Slick from "react-slick";
import { useState } from "react";
import styled from "styled-components";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Images = images.map((image) => (
    <div className="img" key={image.src}>
      <img src={image.src} alt={image.src} />
    </div>
  ));

  return (
    <ImagesZoomWrapper>
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
          >
            {Images}
          </Slick>
        </div>
      </SlickWrapper>
    </ImagesZoomWrapper>
  );
};

const ImagesZoomWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  header {
    height: 44px;
    background: white;
    postion: relative;
    padding: 0;
    text-align: center;

    button {
      background: cornflowerblue;
    }
  }
`;
const SlickWrapper = styled.div`
  height: clac(100% - 44px);
  background: #090909;

  img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

export default ImagesZoom;
