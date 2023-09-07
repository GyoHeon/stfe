import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Foot } from "./Foot";
import { Head } from "./Head";
import { SideBar } from "./SideBar";

const { Content } = Layout;

export function MainLayout() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Head />
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ height: "100%", padding: "24px 0" }}>
          <SideBar />

          <div style={{ width: "100%", height: "100%", padding: "0 24px" }}>
            <Outlet />
          </div>
        </Layout>
      </Content>
      <Foot />
    </Layout>
  );
}
