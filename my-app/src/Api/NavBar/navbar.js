import React, { Component } from 'react';
import Logo from "../../image/logo.jpg";
import shop from '../../image/icons8-shopping-cart-100.png'
import CartS from '../../image/icons8-shopping-cart-30.png'
import style from 'styled-components';
class navbar extends Component {
  render() {
    return (
      <div dir="rtl" className="w-full fixed bg-slate-50 z-10 font-serif h-20 flex justify-between  items-center ">
      <div className=" w-20 sm:hidden h-20 rounded-full mr-20  mt-6 flex ">
      <img className="w-14 cursor-pointer h-14" src={Logo} alt="logo" />
      </div>
        <ul className="flex  mt-1 sm:hidden sm:mt-56  items-center">
        <li className=" bold border-b-2 cursor-pointer text-lg m-8 p-1.5 border-violet-800"><a href="#">صفحه اصلی</a></li>
        <li className=" m-8 hover:border-b-2 p-1.5  cursor-pointer hover:text-lg border-violet-800 "><a href="#">دوره ها</a> </li>
        <li className=" m-8 hover:border-b-2 p-1.5 cursor-pointer hover:text-lg border-violet-800 "><a href="#">مدرسین</a></li>
        <li className=" m-8 hover:border-b-2 p-1.5 cursor-pointer hover:text-lg border-violet-800 "><a href="#">نظرات داشنشجویان</a></li>
        <li className=" m-8 hover:border-b-2 p-1.5 cursor-pointer hover:text-lg border-violet-800"><a href="#">درباره ما</a></li>
      </ul>
      <div className="w-48 h-12  ml-28 rounded-3xl flex text-lg  text-white justify-center ">
        <button onClick={this.ClickHandeler} className="px-6  ml-5  flex justify-center items-center  rounded-lg">
        <img alt="icon" className="absolute  w-8 h-8" src={CartS}/>

        </button>
        <button className="px-6 hover:bg-violet-800 shadow-violet-400 hover:shadow-violet-500 shadow-md ml-5 bg-violet-700 flex justify-center items-center rounded-lg">
          ورود
        </button>
        <button className="px-6 ml-3  hover:bg-violet-800 shadow-violet-400 hover:shadow-violet-500 shadow-md bg-violet-700 flex justify-center items-center rounded-lg">
          عضویت
        </button>
     <p>s</p>
      </div>
    </div>
    );
  }
}

export default navbar;



