import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Shop from "../page/shop";
import MainLayout from "../layout/MainLayout";
import PlantCare from "../page/plant-care";
import Blogs from "../page/blogs";

export const RouterComponents = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/plant-care",
        element: <PlantCare />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      
    ],
  },
]);
