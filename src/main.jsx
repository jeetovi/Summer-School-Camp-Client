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
import PrivetRouter from "./Components/PrivetRouter/PrivetRouter";
import Dasbord from "./Components/DashBords/Dasbord";

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
        element:  <PrivetRouter><Instroctor></Instroctor></PrivetRouter>
       },
       {
        path:'/class',
        element: <PrivetRouter><Class></Class></PrivetRouter>
       },
       {
        path:'/dasbord',
        element:<Dasbord></Dasbord>
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