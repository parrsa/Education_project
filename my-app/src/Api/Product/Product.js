import React, { useState, useEffect, Fragment } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';
import Navbar from "../NavBar/Navbar";
import FooterTop from "../Footer/FooterTop";
import Footer from "../Footer/Footer";
import Profile from "../../ui-site/Profile.png";
import Time from "../../ui-site/Time Circle.png";
import Video from "../../ui-site/Video.png";
import ProductCategory from "./ProductCategory";
import Comment from "./Comment";
const Product = () => {
 const navigate=useNavigate();
 const Cook= Cookie.get('TokenLogin1')
  function classNames(...classes) {
    return classes.filter(Boolean).join("");
  }
  const { state } = useLocation();
  const [item, setItem] = useState({});
  useEffect(() => {
    const getDAta = async () => {
      setItem(state.item);
      const response = await fetch(`http://192.168.1.2:7007/api/Account/GetCourse/${state.item.id}`
      );
      const data = await response.json();
      setItem(data);
    };
    getDAta();
  }, []);

//   function CreateUser(){
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' ,   'Authorization': 'Bearer ' + Cook },
//       body: JSON.stringify({ 
//         courseId : item.id ,
//         accountPriceId : 6
//       })
//   };
//   fetch('http://192.168.1.2:7007/api/Basket/AddBasket', requestOptions)
//       .then(async (response) => {
//         const isJson = response.headers .get('Content-Type') ?.includes("application/json");
//         const data = isJson && (await response.json()); 
//         console.log(data)
//       })
//           console.error('There was an error!');
// }
const Swal = require('sweetalert2')
const CreateUser = async () => {
  if(Cook){
    const response = await fetch(`http://192.168.1.2:7007/api/Basket/AddBasket`,{
    method: 'POST',
    body: JSON.stringify({
      courseId : item.id ,
        accountPriceId : 6
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cook,
    }
  });
const data = await response.json();
console.log(data)
Swal.fire({
  position: 'top-end',
  icon: 'success',
  text: 'دوره به سبد خرید افزوده شد',
  showConfirmButton: false,
  timer: 1500
})
  }
  else{
    Swal.fire(
      {
      position: 'top-end',
      icon: 'error',
      text: 'برای خرید در دوره  وارد حساب کاربری خود شوید ',
      showConfirmButton: false,
      timer: 1500
    }
    )
    // Swal.fire({
    //   title: 'Custom animation with Animate.css',
    //   showClass: {
    //     popup: 'animate__animated animate__fadeInDown'
    //   },
    //   hideClass: {
    //     popup: 'animate__animated animate__fadeOutUp'
    //   }
    // })
    setTimeout(()=>{
navigate('/login')
    },2000)
    
  }
  
};

// const Click= ()=>{
//   if(Cook){
//     const requestOptions ={
//       method : "POST",
//       headers: { "Content-Type": "application/json" },
//       body:{courseId:item.id , accountPriceId : 6}
//     }
//     fetch('http://192.168.1.2:7007/api/Basket/AddBasket' , requestOptions)
//   .then( response =>{
//     const isJson = response.headers .get('Content-Type') ?.includes("application/json");
//     const data = isJson &&response.json();
//      console.log(data)
//   })
//   }
// }
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full mt-20 h-ful  font-KALAMEHBOLD bg-[#EFEFEF] ">
          <div className="grid grid-cols-3 sm:grid-rows-2">
            <div className="col-span-1 sm:mt-[700px] sm:top-80 mt-5 sm:col-span-3 flex justify-center relative">
              <div className=" w-[330px] sm:relative h-[400px]  sm:z-10 flex justify-center  border border-black relative top-10 rounded-2xl">
                <button className="w-28 text-white rounded-lg mt-8 h-8 transition-all hover:bg-violet-800 bg-[#9161F8]">
                  اطلاعات دوره
                </button>
                <div className="w-80 h-44 top-20 absolute flex justify-center">
                  <div className="w-14 h-14 m-6 rounded-full flex justify-center border border-black">
                    <img className="w-8 h-8 mt-2" alt="icon" src={Video} />
                    <p className="absolute mt-14   text-gray-700 text-sm">
                      تعداد ویدیو
                    </p>
                    <p className="absolute mt-20   text-sm">20</p>
                  </div>

                  <div className="w-14 h-14 m-6 rounded-full flex justify-center border border-black">
                    <img className="w-8 h-8 mt-2" alt="icon" src={Time} />

                    <p className="absolute mt-14 text-gray-700 text-sm">
                      مدت دوره
                    </p>
                    <p className="absolute mt-20  text-sm">10:30:00</p>
                  </div>

                  <div className="w-14 h-14 m-6 rounded-full border flex justify-center border-black">
                    <img className="w-8 h-8 mt-2" alt="icon" src={Profile} />
                    <p className="absolute mt-14 text-gray-700 text-sm">
                      مدرس دوره
                    </p>
                    <p className="absolute mt-20  text-sm">{item.name}</p>
                  </div>

                  <hr className="w-64 sm:w-36 sm:left-24 bg-gray-600 mt-36 sm:mb-40 absolute "></hr>
                </div>
                <div className="w-72 h-36 top-60 flex justify-center items-center absolute">
                  <div className="w-72 h-8 flex justify-end absolute mb-28 ">
                    <p className="mr-3">:خرید دوره</p>

                    <p className="absolute text-red-500 right-52">
                      {item.price}
                    </p>
                  </div>

                  <div className="w-72 flex justify-end h-8 mb-4 absolute ">
                    <p className="mr-3">: تخفیف</p>

                    <p className="absolute  right-60">ندارد</p>
                  </div>
                  <button onClick={CreateUser} className="w-64 h-8 mt-28 text-white rounded-xl transition-all hover:bg-violet-800  bg-[#9161F8]">
                    خرید این دوره
                  </button>
                </div>
              </div>
            </div>

            <div
              dir="rtl"
              className="grid sm:col-span-3 sm:absolute col-span-2 "
            >
              <div className=" w-11/12 sm:w-full sm:mr-3 mr-20 h-fit  text-black   flex justify-start items-center relative  top-10 ">
                <h4 className=" absolute sm:leading-3 bottom-[410px] sm:mr-3 float-right font-semibold sm:text-2xl text-2xl">
                  {` آموزش مقدماتی تا پیشرفته ${item.name}`}
                </h4>
                <div className="w-11/12 h-[400px] mt-5 rounded-2xl  bg-white">
                  <video
                    className="w-full h-full  rounded-2xl"
                    controls
                    src={item.videoCourses}
                  ></video>
                </div>
              </div>
              <div className="mt-20 mr-20  rounded-2xl mb-10 sm:mt-10 sm:mr-5 sm:row-span-1 w-10/12 h-fit">
                <div className="w-80 h-fit rounded-t-2xl ">
                  <h1 className="mt-10 text-2xl sm:text-3xl ">توضیحات</h1>
                  <h1 dir="rtl" className="mt-10 sm:mt-5 sm:w-[350px] overflow-hidden  w-[800px] h-fit z-10 text-black text-2xl">
                  {item.discription}
                  </h1>
                </div>
                <div className="w-full h-96 sm:h-fit   mt-10  sm:mr-2 ">
                  {/* box1 */}
                  {/* <div className="w-full  bg-white shadow-lg rounded-3xl shadow-slate-200 h-14 "></div> */}
                  <ProductCategory  name={item.coursePicture} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterTop />
        <Footer />
      </div>
    </>
  );
};
export default Product;