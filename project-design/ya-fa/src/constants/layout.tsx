import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { createElement } from "react";

export const MAIN_TITLE = "Wiki for FastCampus";

const NAV_ITEMS = ["Wiki", "프로젝트", "온보딩"];
export const NAV_MENU: MenuProps["items"] = NAV_ITEMS.map((menu) => ({
  key: menu,
  label: <a href={`/${menu}`}>{menu}</a>,
}));

const SIDE_ITEMS = [
  {
    title: "회사생활",
    icon: UserOutlined,
    sub: [
      { title: "회사내규", icon: UserOutlined },
      { title: "팀 소개", icon: UserOutlined },
      { title: "조직도", icon: UserOutlined },
    ],
  },
  {
    title: "프로젝트",
    icon: LaptopOutlined,
    sub: [
      { title: "진행중인 프로젝트", icon: UserOutlined },
      { title: "예정된 프로젝트", icon: UserOutlined },
      { title: "완료된 프로젝트", icon: UserOutlined },
    ],
  },
  {
    title: "온보딩",
    icon: NotificationOutlined,
    sub: [
      { title: "신입사원 필독서", icon: UserOutlined },
      { title: "온보딩 주제", icon: UserOutlined },
    ],
  },
];

export const SIDE_NAV: MenuProps["items"] = SIDE_ITEMS.map(
  ({ title, icon, sub }) => ({
    key: title,
    icon: createElement(icon),
    label: title,

    children: sub.map(({ title }) => ({
      key: title,
      label: title,
    })),
  })
);
