import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation } from "react-router-dom";
import { SIDE_NAV } from "../constants/layout";

export function SideBar() {
  const path = useLocation().pathname.split("/")[1] as keyof typeof data;

  const data = {
    Wiki: {
      defaultSelectedKeys: ["회사생활", "회사내규"],
      defaultOpenKeys: ["회사생활"],
      items: SIDE_NAV("Wiki"),
    },
    commute: {
      defaultSelectedKeys: ["출퇴근"],
      defaultOpenKeys: ["1"],
      items: SIDE_NAV("commute"),
    },
    gallery: {
      defaultSelectedKeys: ["사진첩"],
      defaultOpenKeys: ["하마"],
      items: SIDE_NAV("gallery"),
    },
  } as const;

  return (
    <Sider width={200}>
      <Menu mode="inline" style={{ height: "100%" }} {...data[path]} />
    </Sider>
  );
}
