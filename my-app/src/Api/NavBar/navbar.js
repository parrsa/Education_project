import React, { Fragment, useState } from 'react';
import Logo from "../../ui-site/Student Male.png";
import Search from '../../ui-site/Search.png';
import Account from '../../ui-site/Verified account.png'
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import Cookie from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Person from '../../ui-site/Person.png';
import Style from './Style.css'
import { click } from '@testing-library/user-event/dist/click';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const ShowDrop=()=>{
  const d=document.querySelector('ul');
  d.style.display="block";
  d.style.transform="translateY(0)";
  d.style.transition="all 0.7s linear";
  d.addEventListener(click=>{
    d.style.display="none"
  })
}
const Navbar=()=>  {
 
  const Cook= Cookie.get('TokenLogin1')
  const Navigate = useNavigate();
    return (
      <div dir="rtl" className="w-full fixed bg-[#9161F8]  sm:z-50 z-10 font-KALAMEHBOLD  h-20 top-0 flex justify-between items-center">
       <Link to={'/app'}>
      <div   className=" w-20 sm:hidden  mr-32  h-20 z-10 flex  rounded-full mt-6 ">
      <img  className="w-14 cursor-pointer mr-10 h-14" src={Logo} alt="logo" />
      </div>
       </Link>  
        <div onClick={ShowDrop} onDoubleClick={()=>{const d=document.querySelector('ul');d.style.display="none"; }} className='relative hidden -z-10 sm:left-36 sm:block left-20'>
        <div class="space-y-2">
      <span class="block w-8 h-0.5 bg-black"></span>
      <span class="block w-8 h-0.5 bg-black"></span>
      <span class="block w-8 h-0.5 bg-black"></span>
    </div>
        </div>
         <ul className="flex absolute  sm:bg-[#9161F8] sm:shadow-sm sm:shadow-[#9161F8] text-white  sm:mr-0 mr-40 p-20 
         sm:w-64 sm:h-80 sm:top-20  sm:-translate-y-[490PX]   ">
          
        <Link to='/app'><li className="relative mr-10 sm:hover:bg-slate-100 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:text-2xl cursor-pointer transition-all  hover:text-violet-800  p-1.5 ">
          <a href="#">
            خانه</a>
          </li>
          </Link>

      <Link  to='/courses'> 
       <li  className="relative mr-10 sm:hover:bg-slate-100 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:mt-5 p-1.5 cursor-pointer sm:text-2xl  transition-all  hover:text-violet-800">
        <a href="../Card/">دوره ها </a>
      </li>
      </Link>

        {Cook && <Link to='/Main'>
         <li className="sm:mr-0 sm:p-0  p-1.5 cursor-pointer transition-all sm:text-2xl  hover:text-violet-800 "><a href="#">تدریس در سایت</a></li>
         </Link> } {!Cook && <Link to='/Main'>
         <li className=" p-1.5 sm:hover:bg-slate-100 sm:w-52 w-56 sm:-mt-7 absolute sm:-mr-14 sm:p-0 sm:text-2xl  cursor-pointer transition-all mr-10   hover:text-violet-800 "><a href="#">تدریس در سایت</a></li>
         </Link>  }
         </ul>
   

      {Cook==null && 
      <Link to='/Login'>
        <div className='w-32 h-2 left-40 sm:-left-7 absolute '>
          <span className='absolute -mt-3 -mr-2'><img className='w-10 -mr-3' alt="icon" src={Account}/></span>
          <ul className='text-white'>
         <li className=" m-3 transition-all  hover:text-violet-800  -mt-3 cursor-pointer "><a href="#">ورود/ثبت نام</a></li>
          </ul>
         </div>
         </Link>
         }
      

         {/* response */}
      {Cook &&
            <Menu as="div" className="relative m-28 inline-block text-right">
      <div>
        <Menu.Button className=" w-full flex justify-center rounded-md border absolute border-gray-300 bg-violet-700 text-white px-8 -mt-4 -mr-12 py-2 text-sm font-medium ">
          عضویت
          {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-5 w-36 -mr-20  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div dir='rtl' className="py-1 text-right">

            <Menu.Item>
                {({ active }) => (
               <Link to='/Login'>
                <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2  text-sm'
                    )}
                  >
                   کیف پول من
                  </button>
               </Link>  
                )}
              </Menu.Item>


              <Menu.Item>
                {({ active }) => (
               <Link to='/Login'>
                <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2  text-sm'
                    )}
                  >
                   جزئِیات حساب کاربری
                  </button>
               </Link>  
                )}
              </Menu.Item>



              <Menu.Item>
                {({ active }) => (
               <Link to='/Login'>
                <li
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2  text-sm'
                    )}
                  >
                   دوره های خریداری شده
                  </li>
               </Link>  
                )}
              </Menu.Item>

              <form action="#">
              <Menu.Item>
                {({ active }) => (
                  <button 
                  onClick={()=>{Cookie.remove('TokenLogin1') && Navigate('/App')}}
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2  text-sm'
                    )}
                  >
                    خروج از سیستم
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
         }
          {/* Login */}
      {/* <Menu dir='rtl' as="div" className="absolute text-center transition-all mr-14 hidden sm:inline-block">
      <div>
        <Menu.Button className=" w-full flex  justify-center rounded-md  absolute  text-white px-8 -mt-4 -mr-12 py-2  ">
        <div class="space-y-1.5">
        <div class="w-8 h-0.5 bg-black"></div>
        <div class="w-8 h-0.5 bg-black"></div>
        <div class="w-8 h-0.5 bg-black"></div>
        </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  z-10 mt-5 w-72 h-screen -mr-14 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div dir='rtl' className="py-1">

            <Menu.Item>
                {({ active }) => (
               <Link to='/app'>
                <li
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2  text-xl'
                    )}
                  >
                خانه
                  </li>
               </Link>  
                )}
              </Menu.Item>


              <Menu.Item>
                {({ active }) => (
               <Link to='/courses'>
                <li
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2  text-xl'
                    )}
                  >
               دوره ها
                  </li>
               </Link>  
                )}
              </Menu.Item>



          </div>
        </Menu.Items>
      </Transition>
    </Menu> */}
        </div> 
   
    );
    }

export default Navbar;