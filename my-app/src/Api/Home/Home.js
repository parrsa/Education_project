// import React from 'react';
// import Navbar from '../NavBar/navbar';
// import Banner from '../Banner/banner';
// import Card from '../Card/cards'
// import { useRef } from 'react';
// import Footer from '../Footer/Footer';
// const Home = () => {
//   return (
//     <div>
//         <Navbar />
//         <Banner/>
//         <Card/>
//          <br/>
//         <Footer/>
        
//         {/* <Footer/> */}
//         {/* <Index/> */}
//     </div>
//   )
// }

// export default Home
import React, { Component } from 'react';
import Navbar from '../NavBar/navbar';
import Banner from '../Banner/banner';
import Card from '../Card/Cards';
import Footer from '../Footer/Footer';
class Home extends Component {
  constructor(){
    super();

  }
  render() {
    return (
      <div className='bg-slate-50 '>
         <Navbar />
         <Banner/>
         <Card/>
        
         <Footer/>
      </div>
    );
  }
}

export default Home;
