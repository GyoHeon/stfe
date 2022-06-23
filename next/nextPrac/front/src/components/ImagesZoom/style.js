import styled, { createGlobalStyle } from "styled-components";

export const ImagesZoomWrapper = styled.div`
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
      position: absolute;
      right: 8px;
      top: 8px;
    }
  }
`;
export const SlickWrapper = styled.div`
  height: clac(100% - 44px);
  background: #090909;

  img {
    margin: 0 auto;
    max-height: 750px;
  }
`;
export const Global = createGlobalStyle`
.slick-slide{
  display: inline-block;
}`;
