import { StrictMode } from "react";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
//ReactDOM
import ReactDOM from "react-dom/client"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Components
import { Home, Form, Consult } from "./pages";
import { FrontLayout } from "./components";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <FrontLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/consult",
          element: <Consult />,
        },
      ],
    },
  ],
);

//Se creó la ruta con ReactDOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
