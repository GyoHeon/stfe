import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation } from "react-router-dom";
import { SIDE_ITEMS, SIDE_NAV, TCategory } from "../constants/layout";

export function SideBar() {
  const path = useLocation().pathname.split("/")[1] as TCategory;
  const menus = SIDE_ITEMS[path];

  return path.length > 0 ? (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[menus[0].title, menus[0].sub[0].title]}
        openKeys={[menus[0].title]}
        onClick={() => console.log(path)}
        style={{ height: "100%" }}
        items={SIDE_NAV(path)}
      />
    </Sider>
  ) : (
    <div></div>
  );
}
