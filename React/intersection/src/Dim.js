import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const Dim = () => {
  const standardRef = useRef(null);

  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((target) => setOpacity(target.intersectionRatio));
      },
      {
        threshold: [
          0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        rootMargin: "0px",
      }
    );
    if (standardRef.current) {
      observer.observe(standardRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [standardRef]);

  return (
    <DimWrapper opacity={opacity}>
      <div className="image" ref={standardRef} />
      <span>{opacity}</span>
    </DimWrapper>
  );
};

const DimWrapper = styled.div`
  background: tomato;
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  > .image {
    width: 100%;
    height: 300px;
    background-image: url(https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip);
    object-fit: cover;
  }
  .image:before {
    z-index: 2;
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 300px;
    background: #fff;
    opacity: ${(props) => 1 - props.opacity};
  }
`;

export default Dim;
