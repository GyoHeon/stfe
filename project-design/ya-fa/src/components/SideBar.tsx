import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { SIDE_ITEMS, SIDE_NAV } from "../constants/layout";
import { usePath } from "../hooks/usePath";

export function SideBar() {
  const path = usePath();
  const menus = SIDE_ITEMS[path];

  return path.length > 0 ? (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[menus[0].title, menus[0].sub[0].title]}
        openKeys={[menus[0].title]}
        style={{ height: "100%" }}
        items={SIDE_NAV(path)}
      />
    </Sider>
  ) : (
    <div></div>
  );
}
