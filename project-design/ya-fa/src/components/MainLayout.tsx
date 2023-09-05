import { Layout } from "antd";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Foot } from "./Foot";
import { Head } from "./Head";
import { SideBar } from "./SideBar";

const { Content } = Layout;

export function MainLayout() {
  const path = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = path.pathname.split("/")[1];

    if (!pathname) {
      navigate("/Wiki");
    }
  }, [path]);

  return (
    <Layout style={{ height: "100vh" }}>
      <Head />
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0" }}>
          <SideBar />

          <div style={{ padding: "0 24px" }}>
            <Outlet />
          </div>
        </Layout>
      </Content>
      <Foot />
    </Layout>
  );
}
