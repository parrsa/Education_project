import React from 'react';
import Navbar from './Api/NavBar/Navbar';
import Home from './Api/Home/Home';
import Cards from './Api/Card/Cards';
import Login from './Api/Membership/Login'
import SignIn from './Api/Membership/Register'
import MainTeacher from './Api/RegisterTeacher/Main'
import RegisterTeacher from './Api/RegisterTeacher/Register'
import Pro from './Api/Product/Product'
import Basket from './Api/Basket/Basket';
import { Route,Router,Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className='' >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Cards/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignIn/>}/>
        <Route path='/Main' element={<MainTeacher/>}/>
        <Route path='/Register-Teacher' element={<RegisterTeacher/>}/>
        <Route path='/Pro' element={<Pro/>}/>
        <Route path='/Basket' element={<Basket/>}></Route>
      </Routes>
    </div>
  )
}

export default App
