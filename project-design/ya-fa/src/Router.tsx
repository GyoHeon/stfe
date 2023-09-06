import { createBrowserRouter } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { MainLayout } from "./components/MainLayout";
import { Wiki } from "./components/Wiki";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        children: [
          {
            path: "/",
            element: <Home />,
          },
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
