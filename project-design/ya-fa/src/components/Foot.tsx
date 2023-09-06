import { Footer } from "antd/es/layout/layout";

export function Foot() {
  return (
    <Footer
      style={{
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      FastCampus ©2023
    </Footer>
  );
}
