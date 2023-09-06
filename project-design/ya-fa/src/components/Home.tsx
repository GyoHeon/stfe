import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  top: 0,
  padding: "50px",
  height: "300px",
  color: "#fff",
  lineHeight: "1.5em",
  position: "absolute",
};

export function Home() {
  return (
    <>
      <h1>FastCampus 공지</h1>
      <Carousel autoplay>
        <div style={{ position: "relative" }}>
          <img
            src="https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202307/094135-397/변환-삼성-강남-mo.webp"
            height={250}
          />
          <h1 style={contentStyle}>
            삼성 강남과 함께하는
            <br />
            패캠 원데이클래스
          </h1>
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202309/172722-1019/0-depth-banner-mob.png"
            height={250}
          />
          <h1 style={contentStyle}>
            하반기 공채 지원?
            <br />
            합격 비결은 공채 패키지
          </h1>
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202309/112250-964/0-depth-banner-mob.webp"
            height={250}
          />
          <h1 style={contentStyle}>
            이번 주엔 누구나 1+1
            <br />
            쿠폰 100% 당첨
          </h1>
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202305/043836-964/5번-0-depth-banner-mob.webp"
            height={250}
          />
          <h1 style={contentStyle}>
            백엔드 개발자라면?
            <br />
            핀테크 프로젝트는 못참지!
          </h1>
        </div>
      </Carousel>
    </>
  );
}
