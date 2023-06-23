import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Landing from "./Landing.tsx";
import Contacto from "./Contacto.tsx"
import Aboutus from "./AboutUs.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Landing
      },
      {
        path: "/contacto",
        Component: Contacto
      },
      {
        path: "/acerca-de-nosotros",
        Component: Aboutus
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
