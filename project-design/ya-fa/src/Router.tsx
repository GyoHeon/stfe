import { createBrowserRouter } from "react-router-dom";
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
            path: "gallery",
            element: <Gallery />,
          },
        ],
      },
    ],
  },
]);
