import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { SIDE_ITEMS, SIDE_NAV } from "../constants/layout";
import { useParam } from "../hooks/useParam";
import { usePath } from "../hooks/usePath";

export function SideBar() {
  const path = usePath();
  const item = useParam("item");
  const isEditing = useParam("edit");
  const menus = SIDE_ITEMS[path];

  const showSide = path.length > 0 && !isEditing;

  return showSide ? (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[menus[0].title, item || menus[0].sub[0].title]}
        openKeys={menus.map(({ title }) => title)}
        style={{ height: "100%" }}
        items={SIDE_NAV(path)}
        selectedKeys={[item || menus[0].sub[0].title]}
      />
    </Sider>
  ) : (
    <div></div>
  );
}
