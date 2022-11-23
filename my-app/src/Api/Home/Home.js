import React, { Component } from 'react';
import Navbar from '../NavBar/Navbar';
import Banner from '../Banner/Banner';
import Card from '../Card/Cards';
import Footer from '../Footer/Footer';
import NewProducts from '../Card/NewProducts';
import BannerBootm from '../Banner/BannerBootm';
import FooterTop from '../Footer/FooterTop';
class Home extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div className='overflow-hidden bg-[#EFEFEF]'>
         <Navbar />
         <Banner/>
         <Card/>
         <NewProducts/>
         <BannerBootm/>
         <FooterTop/>
         <Footer/>
      </div>
    );
  }
}

export default Home;
