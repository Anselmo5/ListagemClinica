import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App"
import Consulta from "./components/Consulta";
import Agendar from "./components/Agendar";
import "./index.css"
import { dadosrender } from "./context/dadosrender";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "agendar",
    element: <Agendar/>,
  },

  {
    path: "/consulta",
    element:<Consulta/>,
  },
 
  
]);

createRoot(document.getElementById("root")).render(

  <dadosrender>
       <RouterProvider router={router} />
  </dadosrender>
 
);