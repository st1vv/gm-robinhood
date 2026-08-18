import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/app/layout/layout";
import { Home } from "@/app/home/home";
import { Collection } from "@/app/collection/collection";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/collection", element: <Collection /> },
    ],
  },
]);
