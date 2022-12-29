import React , {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Routes , Route } from 'react-router-dom'
import Footer from '../Footer/Footer'
import FooterTop from '../Footer/FooterTop'
import Navbar from '../NavBar/Navbar'
export const Information = () => {
  const params=useParams();
  return (
    <div>نمایش اطلاعات شما
        <Navbar/>
        <div className='w-full h-screen bg-[#EFEFEF] font-KALAMEHBOLD flex justify-center items-center'>
            <div className='w-[70%] h-4/5 mt-10 bg-white rounded-2xl'>
                <div dir='rtl' className='w-full h-16 flex items-center  justify-start  rounded-t-2xl '>
            <ul className="flex sm:bg-[#9161F8] sm:shadow-sm sm:shadow-[#9161F8] text-black  ">

            <Link to={`/information/${1}`}>
      <li className="relative mr-10 sm:hover:bg-slate-100 hover:text-violet-800 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:text-2xl cursor-pointer transition-all  p-1.5">
          <a href="#">
            نمایش اطلاعات شما
            </a>
          </li>
          </Link>
      <Link to={`/information/${2}`}>
        <li className="relative mr-10 sm:hover:bg-slate-100 hover:text-violet-800 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:text-2xl cursor-pointer transition-all  p-1.5 ">
          <a href="#">
            ویرایش اطلاعات
            </a>
          </li> 
      </Link>    

      <Link to={`/information/${3}`}>
           <li className="relative mr-10 sm:hover:bg-slate-100 hover:text-violet-800 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:text-2xl cursor-pointer transition-all  p-1.5 ">
          <a href="#">
            درس های من
            </a>
          </li>
          </Link>
         </ul>
            </div>
              <hr className='bg-black'></hr>

                {params.id == 1 && 
                 <div className='w-full grid grid-cols-3  grid-rows-2 h-[90%]  rounded-b-2xl '>
                <div className="col-span-2  flex  justify-center items-center row-span-2 sm:col-span-2 sm:row-span-1 ">
                  <div className='w-[90%] h-96 rounded-xl bg-green-600'></div>
                </div>
                {/* box2-right */}
                    <div className='col-span-1 row-span-2 flex justify-center items-center sm:row-span-1 sm:col-span-2 '>
                      {/* box-image */}
                      <div className='w-72 h-72 rounded-2xl shadow-xl shadow-slate-100  '>
                        <div className='w-24 h-24 ml-24 bg-violet-700 rounded-full'>parsa1</div>
                        <div className='w-64 h-44 ml-5  bg-blue-500'></div>
                      </div>
                    </div>
                </div>
                }

                { params.id == 2 && 
                <div className='w-full grid grid-cols-3  grid-rows-2 h-[90%]  rounded-b-2xl '>
                <div className="col-span-2 bg-red-800 flex  justify-center items-center row-span-2 sm:col-span-2 sm:row-span-1 ">
                  <div className='w-[90%] h-96 rounded-xl bg-green-600'>
                  <h1>parsa2</h1>
                  </div>
                </div>
                {/* box2-right */}
                <div className='col-span-1 row-span-2 bg-blue-700 flex justify-center items-center sm:row-span-1 sm:col-span-2 '>
                      {/* box-image */}
                    <div className='w-72 h-72 rounded-2xl  bg-green-700'>
                        <div className='w-24 h-24 ml-24 bg-zinc-500 rounded-full'></div>
                        <div className='w-64 h-44 ml-5  bg-blue-500'></div>
                    </div>
                </div>
                </div>
                }

                {params.id ==3 && 
                  <div className='w-full grid grid-cols-3  grid-rows-2 h-[90%]  rounded-b-2xl '>
                <div className="col-span-2 bg-red-800 flex  justify-center items-center row-span-2 sm:col-span-2 sm:row-span-1 ">
                  <div className='w-[90%] h-96 rounded-xl bg-green-600'>
                  <h1>parsa3</h1>
                  </div>
                </div>
                {/* box2-right */}
                    <div className='col-span-1 row-span-2 bg-blue-700 flex justify-center items-center sm:row-span-1 sm:col-span-2 '>
                      {/* box-image */}
                      <div className='w-72 h-72 rounded-2xl  bg-green-700'>
                        <div className='w-24 h-24 ml-24 bg-red-200 rounded-full'></div>
                        <div className='w-64 h-44 ml-5  bg-blue-500'></div>
                      </div>
                    </div>
                </div>
                }   


            </div>
        </div>
        <FooterTop/>
        <Footer/>
    </div>
  )
}

export default Information