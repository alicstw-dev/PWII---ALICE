import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import CadastroPage from "./pages/CadastroPage.jsx";
import DetalhePage from "./pages/DetalhePage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cadastro",
        element: <CadastroPage />,
      },
      {
        path: "anuncio/:id",
        element: <DetalhePage />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
