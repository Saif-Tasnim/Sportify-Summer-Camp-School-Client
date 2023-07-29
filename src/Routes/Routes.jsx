import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import ManageUsers from "../Pages/Admin/ManageUsers/ManageUsers";
import AddClass from "../Pages/Instructor/AddClass/AddClass";
import MyClass from "../Pages/Instructor/MyClass/MyClass";
import AllClass from "../Pages/AllClass/AllClass";
import SelectedClass from "../Pages/Student/SelectedClass/SelectedClass";
import ManageClass from "../Pages/Admin/ManageClass/ManageClass";
import AllInstructor from "../Pages/AllInstructors/AllInstructor";
import Payment from "../Pages/Student/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'classes',
        element: <AllClass></AllClass>
      },
      {
        path: 'instructors',
        element: <AllInstructor></AllInstructor>
      }
    ]
  },
  {
    path: '/login',
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
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'manageClass',
        element: <ManageClass></ManageClass>
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myClass',
        element: <MyClass></MyClass>
      },
      {
        path: 'mySelectClass',
        element: <SelectedClass></SelectedClass>,
    
      },
      {
        path: 'mySelectClass/payment/:id',
        element: <Payment></Payment>
      }
    ]

  },


])

