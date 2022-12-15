import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import FooterTop from "../Footer/FooterTop";
import Navbar from "../NavBar/Navbar";
import ImgBanner from '../../ui-site/undraw_educator_re_ju47 1.png'
const Main = () => {
    const Navigate=useNavigate();
    const Handeler=()=>{
    Navigate('/Register-Teacher')
    }
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-[#EFEFEF] flex font-KALAMEHBOLD justify-center">
        <div className="w-full h-10/12 ">
        <div className="grid grid-cols-2  grid-rows-2 h-full " >    
            <div className="col-span-1 flex  justify-center items-center row-span-2 sm:col-span-2 sm:row-span-1 ">
                <img alt="icon" className="sm:w-96   mt-20 sm:mt-24" src={ImgBanner}/>
            </div> 
            <div dir="rtl" className=" col-span-1 flex justify-center items-center row-span-2 sm:col-span-2 sm:row-span-1 ">
            <div className="grid sm:  mt-56 grid-rows-2">
             <div className="w-[450px]  sm:w-[350px] row-span-1  h-fit">
            <p className=" leading-8">
            آموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی
              دائمی جزو استاندارد های آموزشی تیم Rebin است که بدون شک باعث ورود
              شما به بازار کار خواهد شدآموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی
              دائمی جزو استاندارد های آموزشی تیم Rebin است که بدون شک باعث ورود
              شما به بازار کار خواهد شدآموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی
              دائمی جزو استاندارد های آموزشی تیم Rebin است که بدون شک باعث ورود
              شما به بازار کار خواهد شد
            </p>
            </div>
            <div className="row-span-1">
            <button onClick={Handeler} className="mt-5 mr-12 w-64 h-10 bg-[#9161F8] hover:bg-violet-800 text-white rounded-xl">به اشتراک گذاری آموزش هارو شروع کن</button>
            </div>
            </div>
            </div>
        </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
};

export default Main;
