import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App'
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import Cards from "./Api/Card/Cards";
// import Login from "./Api/Membership/Login";
// import Pro from './Api/Product/Product'
// import SignIn from './Api/Membership/Register'
// import MainTeacher from './Api/RegisterTeacher/Main'
// import RegisterTeacher from './Api/RegisterTeacher/Register'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   // Route,
// } from "react-router-dom";
// // import RegisterUser from "./Api/Membership/RegisterUser";
// const router = createBrowserRouter([
// {
//   path:'/App',
//   element:<App/>,
  
// },
// {
//   path:'/courses',
//   element:<Cards/>,
// },

// {
//   path:'/Login',
//   element:<Login/>,
// },
// {
// path:'/sign-up',
// element:<SignIn/>
// },

// {
//   path:'/Main',
//   element:<MainTeacher/>
// },
// {
//   path:'/Pro',
//   element:<Pro/>
// },
// {
//   path:'Register-Teacher',
//   element:<RegisterTeacher/>
// }
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
