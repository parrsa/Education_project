import React from 'react';
// import Course from './Api/GetCourse/Course';
// import Login from './Api/PostLogin/Login';
import Navbar from './Api/NavBar/navbar';
import Banner from './Api/Banner/banner';
  import Card from './Api/Card/cards'
import RegisterTeacher from './Api/Register/RegisterUser'
import Loogin from './Api/PostLogin/Login'
import RegisterL from './Api/Register/RegisterUser'
const App = () => {
  return (
    <div className=' overflow-hidden'>
      <Navbar/>
      <Banner/>
      <Card/>
      {/* <Loogin/> */}
      {/* <RegisterL/> */}
      {/* <Loogin/>
      <RegisterL/> */}
      {/* <RegisterTeacher/> */}
    </div>
  )
}

export default App
