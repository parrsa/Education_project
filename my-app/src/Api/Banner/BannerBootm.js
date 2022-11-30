import React from 'react'
import Bannerimg from '../../ui-site/undraw_educator_re_ju47 1.png'
const BannerBootm = () => {
  return (
    <div className='w-full  h-[450px] font-KALAMEHBOLD '>
        <div className='grid relative   grid-cols-2  grid-rows-2 '>
            <div className='col-span-1 mt-14 sm:mt-0  sm:row-span-1 sm:col-span-2 text-[#9161F8] h-fit'>
            <h1 className="leading-10 mt-14 sm:mt-10 sm:top-44 relative text-center  font-semibold text-4xl">
           تدریس در سایت ما
            </h1>

            <h4 className="relative mt-6 sm:mt-48 text-black text-center font-extralight text-lg ">
                برای همکاری آموزشی،تدیس و ارایه آموزش و پیوستن به آن به عنوان <br/> عضو هیات علمی، به لینک زیر مراجعه کنید
            </h4>

            <button className='px-10 py-2 mt-10 sm:mt-5  relative sm:left-28  left-72 md:left-36 transition-all hover:bg-violet-800 bg-[#9161F8] text-white rounded-2xl'>
                اطلاعات بیشتر
            </button>
            </div>
            <div className='col-span-1  sm:col-span-2 sm:absolute sm:row-span-1 sm:mt-0  mt-14 h-fit'>
            <img src={Bannerimg} alt="" className='w-[500px]  sm:w-[300px]  ml-10 md:ml-0 ' />
            </div>
        </div>
    </div>
  ) 
}

export default BannerBootm