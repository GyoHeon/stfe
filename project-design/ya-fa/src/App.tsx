import { Layout } from "antd";
import { Foot } from "./components/Foot";
import { Head } from "./components/Head";
import { MainContent } from "./components/MainContent";
import { SideBar } from "./components/SideBar";

const { Content } = Layout;

export function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Head />
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0" }}>
          <SideBar />

          <MainContent />
        </Layout>
      </Content>
      <Foot />
    </Layout>
  );
}
