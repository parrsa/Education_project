import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// ---------------------------------------------------
import App from './App';
// import Login from './Api/PostLogin/Login'
// import RegisterUser from './Api/Register/RegisterUser';
// import LoginTeacher from './Api/RegisterTeacher/LoginTeacher';
// ---------------------------------------------------
import {createRoot} from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// ---------------------------------------------------
root.render(<App/>)
