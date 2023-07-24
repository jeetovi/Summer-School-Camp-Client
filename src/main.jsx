import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Components/Home/Main";
import Home from "./Components/Home/Home";
import Login from "./Components/Regesters/Login";
import Regester from "./Components/Regesters/Regester";
import Instroctor from "./Components/Instoctors/Instroctor";
import Class from "./Components/Clesses/Class";
import AuthPorvidets from "./Components/PrivetRouter/AuthPorvidets";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
       {
        path:'/login',
       element: <Login></Login>
      
       },
       {
        path:"/reg",
        element: <Regester></Regester>
       }
       ,{
        path:'/ins',
        element: <Instroctor></Instroctor>
       },
       {
        path:'/class',
        element:<Class></Class>
       }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthPorvidets>
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</AuthPorvidets>
);