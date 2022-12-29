import React from 'react';
// import Navbar from './Api/NavBar/Navbar';
import Home from './Api/Home/Home';
import Cards from './Api/Card/Cards';
import Login from './Api/Membership/Login'
import SignIn from './Api/Membership/Register'
import MainTeacher from './Api/RegisterTeacher/Main'
import RegisterTeacher from './Api/RegisterTeacher/Register'
import Pro from './Api/Product/Product'
import Basket from './Api/Basket/Basket';
import { Route, Router, Routes } from 'react-router-dom';
import Cookie from 'js-cookie';
import Information from './Api/UserControll/Information.js';
import Notfound from './Api/NotFound/Notfound';
import Dargah from './Api/ApiKhanm/Dargah';
const App = () => {
  const Cook = Cookie.get('TokenLogin1')
  return (
    <div className='' >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Cards />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/sign-up' element={<SignIn />} />
        <Route path='/Main' element={<MainTeacher />} />
        <Route path='/Register-Teacher' element={<RegisterTeacher />} />
        <Route path='/Pro' element={<Pro />} />
        <Route path='/Basket' element={<Basket />}></Route>
        <Route path='*' element={<Notfound />} />
        <Route  path='information' element={<Information />} />
        <Route  path='/information/:id' element={<Information />} />
        <Route path='/Dargah' element={<Dargah/>}/>
      </Routes>
    </div>
  )
}
export default App
