import { createBrowserRouter } from "react-router-dom";
import { Gallery } from "./components/Gallery";
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
        element: <Gallery />,
      },
    ],
  },
]);
