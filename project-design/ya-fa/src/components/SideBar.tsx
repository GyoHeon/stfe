import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { SIDE_NAV } from "../constants/layout";

export function SideBar() {
  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["회사생활", "회사내규"]}
        defaultOpenKeys={["회사생활"]}
        style={{ height: "100%" }}
        items={SIDE_NAV}
      />
    </Sider>
  );
}
