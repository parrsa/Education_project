import React from 'react'
import Img from "../../ui-site/undraw_personal_notebook_re_d7dc 1.png";
const FooterTop = () => {
  return (
    <>
    <div className="w-full sm:h-[500px]  h-[385px] font-KALAMEHBOLD bg-[#D9D9D9]  ">
        <div className="grid grid-cols-3 grid-rows-3 sm:grid-rows-2  h-96">
          <div className="col-span-1  sm:hidden flex justify-center">
            <img
              alt="icon"
              className="w-80 md:w-72 mt-20 relative left-12 md:left-0 h-56"
              src={Img}
            />
          </div>
          <div dir="rtl" className="col-span-1 flex sm:justify-center sm:items-center sm:col-span-3 sm:row-span-1">
            <div className="mt-16 sm:mt-14 sm:mr-0 md:-mr-16 mr-10">
              <h1 className='sm:mr-32 text-xl sm:mt-5'>درمورد سایت</h1>

              <h4 className="w-80 mt-2 sm:w-[330px] text-gray-600">
                Web API یکی از موضوعات مهم در دنیای وب است. شما به عنوان یک
                برنامه نویس باید با آن آشنا باشید. برخی از موضوعات مهمی که در
                این دوره به آن‌ها خواهیم پرداخت عبارتند از، دریافت و دستکاری
                داده ها از api endpoints، استفاده از تزریق وابستگی (dependency
                injection) داخلی، کانفیگ فایل‌ها، اتصال به دیتابیس با EF Core،
                امنیت و غیره. وقتی این دوره را به اتمام برسانید همه دانش لازم و
                اصلی برای ساخت api با asp.net core 6 از ابتدا را یاد گرفته اید.
                برای آشنایی بهتر با این دوره،‌ پیشنهاد می کنیم ویدیو معرفی را
                مشاهده نمایید.
              </h4>
            </div>
          </div>
          <div dir="rtl" className="col-span-1 sm:col-span-3 flex justify-center sm:row-span-1">
          <div className="mt-16  sm:mr-56 mr-32">
              <h1 className='sm:text-xl'>لینک های مهم</h1>
              <ul className="w-80 mt-3 text-gray-600">
                <li className="mt-1 "><a href='#' className='cursor-pointer  transition-all  hover:text-violet-800'>آموزش</a></li>
                <li className="mt-1 "><a href='#' className='cursor-pointer  transition-all  hover:text-violet-800'>سنجش رضایتمندی</a></li>
                <li className="mt-1 "><a href='#' className='cursor-pointer  transition-all  hover:text-violet-800'>درباره ما</a></li>
                <li className="mt-1 "><a href='#' className='cursor-pointer  transition-all  hover:text-violet-800'>تماس با ما</a></li>
                <li className="mt-1 "><a href='#' className='cursor-pointer  transition-all  hover:text-violet-800'>حریم خصوصی</a></li>
                <li className="mt-1 "><a href='#' className='cursor-pointer  transition-all  hover:text-violet-800'>همکاری با ما</a></li>
                <li className="mt-1 "><a href='#' className='cursor-pointer  transition-all  hover:text-violet-800'>تدریس</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterTop