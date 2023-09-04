import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useLocation } from "react-router-dom";
import { MAIN_TITLE, NAV_MENU } from "../constants/layout";

export function Head() {
  const path = useLocation().pathname.split("/")[1];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        color: "white",
      }}
    >
      <h1>{MAIN_TITLE}</h1>
      <Menu
        style={{ width: "400px" }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["Wiki"]}
        items={NAV_MENU}
        selectedKeys={[path]}
      />
    </Header>
  );
}
