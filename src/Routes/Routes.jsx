import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import ManageUsers from "../Pages/Admin/ManageUsers/ManageUsers";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'manageUsers',
        element: <ManageUsers></ManageUsers>
      }
    ]
    
  },
  
  
])

