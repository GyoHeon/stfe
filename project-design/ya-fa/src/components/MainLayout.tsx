import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Foot } from "./Foot";
import { Head } from "./Head";
import { MainContent } from "./MainContent";
import { SideBar } from "./SideBar";

const { Content } = Layout;

export function MainLayout() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Head />
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0" }}>
          <SideBar />

          <MainContent />
          <Outlet />
        </Layout>
      </Content>
      <Foot />
    </Layout>
  );
}
