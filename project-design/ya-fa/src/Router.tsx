import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/wiki",
        element: <div>Wiki</div>,
      },
      {
        path: "/commute",
        element: <div>출퇴근</div>,
      },
      {
        path: "/gallery",
        element: <div>갤러리</div>,
      },
    ],
  },
]);
