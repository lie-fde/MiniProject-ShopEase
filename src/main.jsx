import * as React from "react";
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Mainsite from "./pages/Mainsite/Mainsite.jsx"
import Loginmain from "./pages/Logsign/Lsig.jsx"
import Register from "./pages/Logsign/Register.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainsite/>,
  },
  {
    path: "/Login",
    element: <Loginmain/>,
  },
  {
    path: "/Signup",
    element: <Register/>,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

