// import React, { Component } from 'react';
// import Producte from './ProductDetils';
// class Product extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //       SendGet: [],
//     //     };
//     //   }

//     //   // smartrebin.ir
//     //   // componentDidMount() {
//     //   //   fetch("http://176.65.252.189:7007/api/Account/GetCourse")
//     //   //     .then((response) => response.json())
//     //   //     .then((data) => this.setState({ SendGet: data }));
//     //   // }

//     // render() {
//     //     return (
//     //         <div  className='w-52 h-fit bg-red-500 text-black'>
//     //             {this.state.SendGet.map((item)=>(
//     //             <Producte  id={item.id} name={item.name} price={item.price}/>))}
//     //         </div>
//     //     );
//     // }
//     render(){

//     }
// }

// export default Product;

import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/navbar";
import Footer from "../Footer/Footer";
import img from '../../image/3949076.png'
import video from '../../Video/React30-landing-page-project.mp4'

const Product = () => {
  const { state } = useLocation();

  const [item, setItem] = useState({});

  // const change = () => {
  //   // alert('change name')
  //   let newItem = JSON.parse(JSON.stringify(item));
  //   newItem.courseLevel = "متوسط";
  //   setItem(newItem);
  // };

  useEffect(() => {
    setItem(state.item);
  }, []);

  return (
    <div>
      <Navbar />
      <div dir="rtl" className="container bg-white w-full h-fit ">
        <div className="flex  justify-center  items-center ">
          <div className="w-8/12 sm:w-11/12 h-fit">
            {/* Box-1 */}
            <div className="w-full grid grid-cols-4 sm:grid-cols-1 sm:grid-rows-4  h-[440px] sm:h-[650px] 
             rounded-3xl outline-none  shadow-xl shadow-violet-500 mt-24">
              {/* Box-right */}

              <div className=" col-span-2 sm:row-span-2 ">
                <div className="flex justify-start  h-72 mt-16 mr-10">
                  <div className="w-20 h-20 rounded-full bg-black">
                    <img alt="logo" className="w-full h-full rounded-full" src={img}/>
                  </div>
                  <h1 className="text-xl absolute mt-24 font-Titr ">{` دوره مقدماتی تا پیشرفته  ${item.name}`}</h1>
                  <p className="absolute font-yekan  leading-7 mt-36 sm:w-80 w-96">
                    {item.discription}
                  </p>
                </div>
                <div className="flex justify-start z-10  mt-3 h-20 sm:top-60  relative  mr-10">
                  <button className="px-8 h-8  text-base font-yekan text-white hover:bg-violet-900  shadow-violet-800  transition-all  shadow-md bg-violet-700  rounded-xl">ثبت نام </button>
                 <h1 className="mr-56  sm:mr-44 text-lg font-Titr">{` ${item.price} تومان`}</h1>
                </div>
              </div>

              {/* End-Box */}

              {/* Box-Left */}
              <div className="col-span-2 sm:bottom-28 relative sm:row-span-2 ">
                <div className="w-11/12 h-72  mt-16 mr-5 rounded-3xl ">
                  <video
                    src={video}
                    className="w-full h-64 sm:h-56 rounded-3xl"
                    controls
                  ></video>
                </div>
                <div className="w-11/12 mr-5  bg-red-600 sm:bottom-12  relative h-16"></div>
              </div>
            </div>
            {/* End-Box */}

            {/* Box-2 */}
            <div className="w-full  grid grid-cols-1 grid-rows-8 h-80 rounded-3xl outline-none bg-blue-700 mt-10"></div>

            {/* End-Box */}
          </div>
        </div>
<br/>
      <Footer />
      </div>
    </div>
  );
};

export default Product;
