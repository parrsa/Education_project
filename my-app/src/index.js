import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Drop from './Api/dropdown'
import Cards from "./Api/Card/Cards";
import Aboute from "./Api/about us/About"
import Login from "./Api/Membership/Login";
import Studentcomments from "./Api/Comment/studentcomments";
import Pro from './Api/Product/Product'
import SignIn from './Api/Membership/Register'
import LoginTeacher from './Api/RegisterTeacher/LoginTeacher'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
// import RegisterUser from "./Api/Membership/RegisterUser";
const router = createBrowserRouter([
{
  path:'/App',
  element:<App/>,
  
},
{
  path:'/courses',
  element:<Cards/>,
},

{
  path:'/Drop',
  element:<Drop/>,
},
{
  path:'/Login',
  element:<Login/>,
},
{
path:'/sign-up',
element:<SignIn/>
},
{
  path:'/About-us',
  element:<Aboute/>,
},
{
  path:'/student-comments',
  element:<Studentcomments/>
},
{
  path:'/Register-Teacher',
  element:<LoginTeacher/>
},
{
  path:'/Pro',
  element:<Pro/>
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
