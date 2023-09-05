import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { Wiki } from "./components/Wiki";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "wiki",
        element: <Wiki />,
      },
      {
        path: "commute",
        element: <div>출퇴근</div>,
      },
      {
        path: "gallery",
        element: <div>갤러리</div>,
      },
    ],
  },
]);
