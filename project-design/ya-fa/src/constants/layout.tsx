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
import { Link, NavLink } from "react-router-dom";

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

export type TCategory = "Wiki" | "commute" | "gallery";

export const SIDE_ITEMS = {
  Wiki: [
    {
      title: "회사생활",
      icon: UserOutlined,
      sub: [
        { title: "회사내규", url: "rules" },
        { title: "팀 소개", url: "information" },
        { title: "조직도", url: "team" },
      ],
    },
    {
      title: "프로젝트",
      icon: LaptopOutlined,
      sub: [
        { title: "진행중인 프로젝트", url: "ongoing" },
        { title: "예정된 프로젝트", url: "scheduled" },
        { title: "완료된 프로젝트", url: "completed" },
      ],
    },
    {
      title: "온보딩",
      icon: NotificationOutlined,
      sub: [
        { title: "신입사원 필독서", url: "must-read" },
        { title: "온보딩 주제", url: "onboarding" },
      ],
    },
  ],
  commute: [
    {
      title: "출퇴근",
      icon: CalendarOutlined,
      sub: [
        { title: "남은 시간", url: "time" },
        { title: "출/퇴근 기록부", url: "record" },
      ],
    },
  ],
  gallery: [
    {
      title: "사진첩",
      icon: CameraOutlined,
      sub: [
        { title: "하마", url: "hippo" },
        { title: "불독", url: "booldog" },
        { title: "판다", url: "panda" },
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
    label: <Link to={`?${title}`}>{title}</Link>,

    children: sub.map(({ title, url }) => ({
      key: title,
      label: <Link to={`?item=${url}`}>{title}</Link>,
    })),
  }));
};
