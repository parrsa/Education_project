import React from 'react';
import { Route, Router, Routes ,useRoutes } from 'react-router-dom';
import Cookie from 'js-cookie';
import router from './Routes';
const App = () => {
  let Routes=useRoutes(router)
  const Cook = Cookie.get('TokenLogin1')
  return (
    <div className='' >
    {Routes}
    </div>
  )
}
export default App
