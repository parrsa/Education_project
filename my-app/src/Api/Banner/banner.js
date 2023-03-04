// import React , {useState , useEffect} from "react";
// import { useNavigate } from "react-router-dom";
import {React,useEffect,useState,useNavigate} from '../../Static_import/Import'

import BannerImage from "../../ui-site/undraw_education_f8ru 1.png";
import Time from "../../ui-site/Time.png";
import Money from '../../ui-site/Money.png'
import Support from "../../ui-site/Technical Support.png";
import Certificate from '../../ui-site/Certificate.png';
import Search from '../../ui-site/Search.png';
import Cookie from 'cookie'
const Banner = () => {
  const [SearchValue,SetSearch]=useState("");
  const SetValue=(e)=>{
    SetSearch(e.target.value);
  }
    const navigate = useNavigate();
    useEffect(()=>{
      navigate('' , {state : {SearchValue}})
    },[SearchValue])


  return (
    <div className="w-full mt-20 h-[560px] font-KALAMEHBOLD bg-[#9161F8]  ">
      <div className="grid grid-cols-2 grid-rows-2   h-96">
        <div className="col-span-1  sm:col-span-2 flex justify-start relative md:left-10 sm:left-[30px] top-10 left-56 mt-2  ">
          <img alt="BannerImage" className="w-96 sm:w-72 sm:h-64  h-72" src={BannerImage} />
        </div>
        <div dir="rtl" className="grid sm:col-span-2 col-span-1 ">
          <div className=" w-5/6 h-96 text-white md:mr-10 md:top-20 flex justify-start items-center relative top-16 sm:top-14  sm:left-28  mr-40">
            <h1 className=" absolute bottom-60 leading-10 sm:leading-3 float-right font-semibold sm:text-3xl text-4xl">
              دوره های آموزشی خودآموزی ،<br /><span className="text-2xl relative sm:top-4 sm:mr-10">کسب تجربه،ورود به بازار کار</span>
            </h1>
            <h4 className="relative   sm:hidden font-extralight text-lg ">
              آموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی
              دائمی جزو استاندارد های آموزشی تیم Rebin است که بدون شک باعث ورود
              شما به بازار کار خواهد شد
            </h4>
          </div>
        </div>
      </div>
        <div dir="rtl" className="w-3/6 md:left-28 md:w-[70%] left-96 sm:left-0 sm:mt-10 sm:w-80 h-24 flex justify-center items-center -mt-10 absolute  ">
        <div className='w-4/5  mr-20  relative left-16 '>
       <img alt='Icon' onClick={"acCC"} className='w-5 h-5 mt-4 mr-3  absolute' src={Search}/>
       <input value={SearchValue}  onChange={SetValue} type="text" name="" className='w-full outline-none text-white  bg-transparent border-2 border-gray-300 placeholder-white py-3 px-10 rounded-3xl' 
       placeholder='جستجو' id="" />
      </div>

      </div>
      <div className="w-4/5 left-40 sm:hidden md:left-6 mt-20  h-44 grid grid-cols-4  absolute gap-20  z-10">
        <div className="w-56 h-44 bg-white flex justify-center items-center rounded-3xl">
          <div className="w-40 h-36 ">
            <div className="w-20 h-20 ml-10 flex justify-center items-center rounded-full bg-[#9161F8]">
              <img alt="time" className="w-16 h-16" src={Time} />
            </div>
            <h1 className="ml-8 mt-4">صرفه جویی در زمان</h1>
          </div>
        </div>

        <div className="w-56 h-44 bg-white flex justify-center items-center rounded-3xl">
          <div className="w-40 h-36 ">
            <div className="w-20 h-20 ml-10 flex justify-center items-center rounded-full bg-[#9161F8]">
              <img alt="time" className="w-16 h-16" src={Certificate} />
            </div>
            <h1 className="ml-10 mt-4">گواهی پایان دوره</h1>
          </div>
        </div>

        <div className="w-56 h-44 bg-white flex justify-center items-center rounded-3xl">
          <div className="w-40 h-36 ">
            <div className="w-20 h-20 ml-10 flex justify-center items-center rounded-full bg-[#9161F8]">
              <img alt="time" className="w-16 h-16" src={Money} />
            </div>
            <h1 className="ml-8 mt-4">صرفه جویی در هزینه</h1>
          </div>
        </div>

        <div className="w-56 h-44 bg-white flex justify-center items-center rounded-3xl">
          <div className="w-40 h-36 ">
            <div className="w-20 h-20 ml-10 flex justify-center items-center rounded-full bg-[#9161F8]">
              <img alt="time" className="w-16 h-16" src={Support} />
            </div>
            <h1 className="ml-8 mt-4">پشتیبانی 24 ساعته</h1>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Banner;
