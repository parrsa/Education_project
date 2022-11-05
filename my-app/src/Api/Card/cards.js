// import React, { Component } from "react";
// import Cards from "./Card";
// import logo from "../../image/icons8-course-32.png";
// import Navbar from "../NavBar/navbar";
// import Banner from "../Banner/banner";
// import Footere from "../Footer/Footer"
// class cards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       SendGet: [],
//     };
//   }
//   //176.65.252.189
//   componentDidMount() {
//     fetch("http://176.65.252.189:7007/api/Account/GetCourse")
//       .then((response) => response.json())
//       .then((data) => this.setState({ SendGet: data }));
//   }

//   render() {
//     return (
//       <>
//         <Navbar />
//         <div dir="rtl" className="w-full h-fit">
//           <div className="w-full flex justify-between items-center  h-24">
//             <h1 className="font-bold text-xl relative mr-28">
//               <img alt="logo" className="absolute -right-8" src={logo} />
//               دوره های Rebin
//             </h1>
//           </div>
//           <div className="flex justify-between mr-20 ">
//             <div  className="grid grid-cols-4 sm:grid-cols-1 sm:gap-8  gap-4">
//               {this.state.SendGet.map((item) => (
//                 <Cards key={item.id}
//                   item={item}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
// export default cards;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../NavBar/navbar'
import img from '../../image/3949076.png'
import icon from '../../image/icons8-user-64.png'
import icon1 from '../../image/icons8-course-32.png'
import icon2 from '../../image/icons8-query-30.png'
import icon3 from '../../image/icons8-price-30.png'
import logo from "../../image/icons8-course-32.png";
import Footer from '../Footer/Footer';

function Cards() {
  const [item, SetItems] = useState([]);
  
    useEffect(()=>{
      fetch("http://176.65.252.189:7007/api/Account/GetCourse")
     .then((response) => response.json())
     .then((data)=>SetItems(data))
 },[])


 const navigate = useNavigate();
 const navigateToProductDetail = (item) => {
  navigate('/Pro',{state:{item}});
};


  return (
    <>
    <Navbar/>
    <div dir="rtl" className='w-full font-yekan mb-20 bg-slate-50 h-fit'>
    <div className="w-full flex justify-between items-center  h-24">
             <h1 className="font-bold  text-xl relative mr-28">
               <img alt="logo" className="absolute -right-8" src={logo} />
               دوره های Rebin
             </h1>   </div>
       <div className="flex justify-between mr-20 ">
       <div  className="grid grid-cols-4 sm:grid-cols-1 sm:gap-8  gap-4"> 
      {item.map((item)=>(
        <div className='w-80  h-[420px]  rounded-xl bg-slate-100 shadow-violet-800 shadow-lg'>
        <div className='w-80 h-36 rounded-xl bg-green-700'>
        <img alt='img' className='rounded-xl' src={img}/>
        </div>
        <div dir='rtl' className='flex relative w-80 h-64 mt-7  rounded-xl justify-center items-center '>
        <h1 className='absolute top-5 '>{item.name}</h1>
        <h3 className='flex ml-40 mb-28 '><span className='absolute font-blod mr-6 text-sm'>مدرس دوره : {item.name}</span><img  alt='icon' className='w-5 h-5 ml-28 ' src={icon}/></h3>
        <h5 className='absolute ml-40 mb-14'><span className='font-blod w-48 absolute mr-6 text-sm'>سطح دوره : {item.courseLevel}</span> <img alt='icon' className='w-5 h-5 ml-28  ' src={icon1}/></h5>
        <h5 className='absolute ml-40  '><span className='font-blod w-52 absolute mr-6 text-sm'>وضعیت دوره : {item.courseStatus}</span> <img alt='icon' className='w-5 h-5 ml-28 mt-1 ' src={icon2}/></h5>
        <h5 className='absolute ml-40 mt-16 '><span className='font-blod w-52 absolute mr-6 text-sm'>قیمت : {item.price} تومان</span> <img alt='icon'className='w-5 h-5 ml-28 mt-1 ' src={icon3}/></h5>
        <div className='absolute flex w-full mt-48 h-12'>
    
       <button  className="px-8 h-8  text-sm text-white hover:bg-violet-900 mr-5 shadow-violet-800  transition-all  shadow-md bg-violet-700 flex justify-center items-center rounded-br-2xl rounded-tl-2xl ">
            ثبت نام 
        </button>
       
        <button onClick={()=>{navigateToProductDetail(item)}} className="px-8 h-8  text-sm text-white hover:bg-violet-900 mr-14 shadow-violet-800  transition-all  shadow-md bg-violet-700 flex justify-center items-center rounded-bl-2xl rounded-tr-2xl ">
            مشاهده 
        </button>
        </div>
        </div>
        </div>
      ))}
      </div>
      </div>
    </div>
    </>
    
  )
}
export default Cards