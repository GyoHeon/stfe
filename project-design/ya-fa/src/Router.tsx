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
        path: "/",
        children: [
          {
            path: "wiki",
            children: [
              {
                path: ":id",
                element: <Wiki />,
              },
            ],
          },
          {
            path: "commute",
            children: [
              {
                path: ":id",
                element: <Wiki />,
              },
            ],
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
        ],
      },
    ],
  },
]);
