import { CalendarOutlined } from "@ant-design/icons";
import { Button, Menu, Modal } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MAIN_TITLE, NAV_MENU } from "../constants/layout";
import { TimeModal } from "./TimeModal";

export function Head() {
  const path = useLocation().pathname.split("/")[1];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        color: "white",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        <h1>{MAIN_TITLE}</h1>
      </Link>

      <Menu
        style={{ width: "190px", marginLeft: "auto" }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["Wiki"]}
        items={NAV_MENU}
        selectedKeys={[path]}
      />

      <Button
        type="primary"
        shape="round"
        size="large"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <CalendarOutlined />
        commute
      </Button>

      <Modal
        open={isModalOpen}
        width={550}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <TimeModal />
      </Modal>
    </Header>
  );
}
