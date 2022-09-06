import React from "react";
import BannerImage from "../../image/19362653.jpg";
const banner = () => {
  return (
    <div className="w-full mt-20  h-full ">
      <div className="grid grid-cols-2  h-full">
        <div className=" grid col-span-1 sm:col-span-2  sm:left-20 bg-blue-800">
        <img className="w-full h-full" alt="Banner" src={BannerImage} />
        </div>
        <div dir="rtl" className=" grid  sm:col-span-2 col-span-1 ">
          <div className=" w-5/6 h-96   flex justify-start items-center relative top-14  sm:-top-10 sm:left-10 mr-20">
           <h1 className=" absolute bottom-60 float-right font-semibold text-3xl ">
              {" "}
              آموزش برنامه نویسی با تیم Rebin
            </h1>
            <h4 className="relative font-extralight text-lg mt-8">
              آموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی
              دائمی جزو استاندارد های آموزشی تیم Rebin است که بدون شک باعث ورود
              شما به بازار کار خواهد شد
            </h4>
            <div className="w-3/4 h-20 sm:right-10  absolute flex justify-center items-center top-72">
              <button className=" w-52 sm:px-11 sm:text-sm flex justify-center items-center rounded-2xl py-3 hover:bg-violet-800 shadow-violet-400 shadow-md bg-violet-700 text-lg text-white">
                مشاهده دوره
              </button>
              <button className="w-52 sm:px-11 flex justify-center items-center hover:bg-violet-800 shadow-md shadow-violet-400 mr-7 py-3 rounded-2xl pr-5 text-white text-lg bg-violet-700">
                نظرات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default banner;
