import { PlusOutlined } from "@ant-design/icons";
import { useState, useCallback } from "react";
import ImagesZoom from "./ImagesZoom";

const PostImages = ({ images }) => {
  const [showImageZoom, setShowImageZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImageZoom((prev) => true);
  }, []);
  const onClose = useCallback(() => {
    setShowImageZoom((prev) => false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
          style={{ width: "50%", display: "inline-block" }}
        />
        <img
          role="presentation"
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
          style={{ width: "50%", display: "inline-block" }}
        />
        {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  return (
    <div>
      <img
        role="presentation"
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
        style={{ width: "50%" }}
      />
      <div
        role="presentation"
        style={{
          display: "inline-block",
          width: "50%",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
      {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
    </div>
  );
};

export default PostImages;
