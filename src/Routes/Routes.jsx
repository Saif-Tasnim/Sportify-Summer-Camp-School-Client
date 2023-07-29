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
import EnrolledClass from "../Pages/Student/EnrolledClass/EnrolledClass";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";
import InstructorRoutes from "./InstructorRoutes";

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
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'manageClass',
        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
      },
      {
        path: 'addClass',
        element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
      },
      {
        path: 'myClass',
        element: <InstructorRoutes><MyClass></MyClass></InstructorRoutes>
      },
      {
        path: 'mySelectClass',
        element: <PrivateRoutes><SelectedClass></SelectedClass></PrivateRoutes>

      },
      {
        path: 'mySelectClass/payment/:id',
        element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
      },
      {
        path: 'myEnrolledClass',
        element: <PrivateRoutes><EnrolledClass></EnrolledClass></PrivateRoutes>
      }
    ]

  },


])

