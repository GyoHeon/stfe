import { createBrowserRouter } from "react-router-dom";
import { Commute } from "./components/Commute";
import { Gallery } from "./components/Gallery";
import { MainLayout } from "./components/MainLayout";
import { Wiki } from "./components/Wiki";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: "/",
        children: [
          {
            path: "wiki",
            element: <Wiki />,
          },
          {
            path: "commute",
            element: <Commute />,
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
