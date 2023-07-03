import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Class_Detail from "../pages/Class_Detail/Class_Detail";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Instructor_Details from "../pages/Instructor_Details/Instructor_Details";
import All_Class_Details from "../pages/All_Class_Details/All_Class_Details";
import Dashboard from "../pages/Dashboard/Dashboard"

import FeedBack from "../pages/Dashboard/Admin/FeedBack/FeedBack";
import Common_Dashboard from "../pages/Dashboard/Common_Dashboard";
import EditClass from "../pages/Dashboard/Instructor/EditClass/EditClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import MyPay from "../pages/Dashboard/User/MyPay/MyPay";
import EnrolledClasses from "../pages/Dashboard/User/enrolledClasses/enrolledClasses";
import Paymenthstory from "../pages/Dashboard/User/Paymenthstory/Paymenthstory";
import RouteInstructor from "../RouteInstructor/RouteInstructor";
import Route_Admins from "../Route_Admins/Route_Admins";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>

        },
        {
          path: "/classes",
          element: <Class_Detail></Class_Detail>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/instructor",
          element: <Instructor_Details></Instructor_Details>
        },
        {
          path: "/class",
          element: <All_Class_Details></All_Class_Details>
        },
      ]
    },
    
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
       
        {
          path: "home",
          element: <Common_Dashboard></Common_Dashboard> ,
        },
       
        {
          path: "myclasses",
          element: <RouteInstructor>
            <MyClasses></MyClasses>
          </RouteInstructor>  ,
        },
        {
          path: "enrolledClasses",
          element: <EnrolledClasses></EnrolledClasses> ,
        },
        {
          path: "paymenthstory",
          element: <Paymenthstory></Paymenthstory> ,
        },

        
        

      ],
    },
    {
      path: "/editclass/:id",
      element:<RouteInstructor>
        <EditClass></EditClass>
      </RouteInstructor>,
      loader : ({params}) => fetch(`https://assignment-12-kids-world-server.vercel.app/InstructorsClass/${params.id}`)
    },
    {
      path: "/FeedBack/:id",
      element: <Route_Admins>
        <FeedBack></FeedBack>
      </Route_Admins> ,
      loader: ({params}) => fetch(`https://assignment-12-kids-world-server.vercel.app/art_class/${params.id}`)
  
    },
    {
      path: "myPay/:id",
      element: <MyPay></MyPay>,
      loader : ({params}) => fetch(`https://assignment-12-kids-world-server.vercel.app/userpayment/${params.id}`)
    },
  ]);