import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getOutItRouter } from "@/frontend/apps/router.tsx";
import ErrorPage from "@/frontend/apps/pages/ErrorPage.tsx";
import "./main.css";

const router = createBrowserRouter([
  {
    children: [
      {
        errorElement: <ErrorPage />,
        children: [...getOutItRouter],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
