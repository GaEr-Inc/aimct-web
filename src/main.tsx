import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Landing from "./Landing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Landing
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
