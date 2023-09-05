import {
  CalendarOutlined,
  CameraOutlined,
  ContainerOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { createElement } from "react";
import { NavLink } from "react-router-dom";

export const MAIN_TITLE = "Wiki for FastCampus";

const NAV_ITEMS = [
  { title: "Wiki", icon: ContainerOutlined },
  { title: "commute", icon: CalendarOutlined },
  { title: "gallery", icon: CameraOutlined },
];
export const NAV_MENU: MenuProps["items"] = NAV_ITEMS.map(
  ({ title, icon }) => ({
    key: title,
    icon: createElement(icon),
    label: <NavLink to={`/${title}`}>{title}</NavLink>,
  })
);

type TCategory = "Wiki" | "commute" | "gallery";

const SIDE_ITEMS = {
  Wiki: [
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
  ],
  commute: [
    {
      title: "출퇴근",
      icon: CalendarOutlined,
      sub: [
        { title: "1", icon: CalendarOutlined },
        { title: "2", icon: UserOutlined },
      ],
    },
  ],
  gallery: [
    {
      title: "사진첩",
      icon: CameraOutlined,
      sub: [
        { title: "1", icon: UserOutlined },
        { title: "2", icon: UserOutlined },
      ],
    },
  ],
};

export const SIDE_NAV: (category: TCategory) => MenuProps["items"] = (
  category: TCategory
) => {
  return SIDE_ITEMS[category].map(({ title, icon, sub }) => ({
    key: title,
    icon: createElement(icon),
    label: title,

    children: sub.map(({ title }) => ({
      key: title,
      label: title,
    })),
  }));
};
