import React, { Fragment, useState , useEffect ,useContext } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { click } from '@testing-library/user-event/dist/click';
import Cookie from 'js-cookie';
import Style from './Style.css'
import Footer from '../Footer/Footer';
import Logo from "../../ui-site/Student Male.png";
import Search from '../../ui-site/Search.png';
import Account from '../../ui-site/Verified account.png'
import Person from '../../ui-site/Person.png';
import P from "../../ui-site/icons8-buying-64.png";
import { redirect } from 'react-router-dom';
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
const Navbar=()=>{
  const [roll , SetRoll]=useState();
    const Cook= Cookie.get('TokenLogin1')
    useEffect(() => {
      const getDAta = async () => {
          const response = await fetch(`http://192.168.1.2:7007/api/TokenCheck/CheckToken`,{
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + Cook,
            }
          });
          const data = await response.json();
          SetRoll(data)
      };
      getDAta()
    },);
  const Navigate = useNavigate();
    return (
  <div dir="rtl" className="w-full fixed bg-[#9161F8]   sm:z-50 md:z-50 z-10 font-KALAMEHBOLD  h-20 top-0 flex justify-between items-center">
       <Link to={'/'}>
      <div   className=" w-20 sm:hidden mr-32 md:mr-0  h-20 z-10 flex  rounded-full mt-6 ">
      <img  className="w-14 cursor-pointer mr-10 h-14" src={Logo} alt="logo" />
      </div>
       </Link>  
        <div onClick={ShowDrop} onDoubleClick={()=>{const d=document.querySelector('ul');d.style.display="none"; }} className='relative hidden -z-10 sm:left-20 sm:block  left-20'>
        <div class="space-y-2">
      <span class="block w-8 h-0.5 bg-black"></span>
      <span class="block w-8 h-0.5 bg-black"></span>
      <span class="block w-8 h-0.5 bg-black"></span>
    </div>
        </div>
         <ul className="flex absolute  sm:bg-[#9161F8] sm:shadow-sm sm:shadow-[#9161F8] text-white  sm:mr-0 mr-40 md:mr-0 p-20 
         sm:w-64 sm:h-80 sm:top-20  sm:-translate-y-[490PX]   ">
          
        <Link to='/'><li className="relative mr-10 sm:hover:bg-slate-100 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:text-2xl cursor-pointer transition-all  hover:text-violet-800  p-1.5 ">
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
         <li className=" sm:p-0  mr-7  sm:w-52 sm:-mt-7  sm:-mr-14  p-1.5 cursor-pointer transition-all sm:text-2xl  hover:text-violet-800 "><a href="#">تدریس در سایت</a></li>
         </Link> } {!Cook && <Link to='/Main'>
         <li className=" p-1.5 sm:hover:bg-slate-100 sm:w-52 w-56 sm:-mt-7 absolute sm:-mr-14 sm:p-0 sm:text-2xl  cursor-pointer transition-all mr-10   hover:text-violet-800 "><a href="#">تدریس در سایت</a></li>
         </Link>  }
         </ul>

         {/* Basket */}
         {Cook && <Link to="/Basket">
      <div className='cursor-pointer relative md:mr-0 md:right-56 right-96 mr-56 sm:mr-0 mt-2 sm:right-7 sm:mt-2 bg-transparent  w-8 h-fit'>
        <img className='w-full' src={P}/>
      </div>
         </Link>}
         {!Cook && <Link to="/Basket">
      <div className='cursor-pointer relative right-80 md:right-44 sm:right-0 sm:ml-5 bg-transparent  w-8 h-fit'>
        <img className='w-full' src={P}/>
      </div>
         </Link> }
      
          
      {Cook==null && 
      <Link to='/Login'>
        <div className='w-32 h-2 left-40 md:-left-4 sm:-left-7 absolute '>
          <span className='absolute -mt-3 -mr-2'><img className='w-10 -mr-3' alt="icon" src={Account}/></span>
          <ul className='text-white'>
         <li className=" m-3 transition-all  hover:text-violet-800  -mt-3 cursor-pointer "><a href="#">ورود/ثبت نام</a></li>
          </ul>
         </div>
         </Link>
         }
      

         {/* response */}
      {Cook &&
            <Menu as="div" className="relative ml-36  sm:ml-10 inline-block text-right">
      <div>
        <Menu.Button className=" w-full flex justify-center rounded-md border absolute border-gray-300 bg-violet-700 text-white px-8 -mt-4 -mr-12 py-2 text-sm font-medium ">
          پروفایل
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
        <Menu.Items className="absolute z-10 mt-5 w-36 -mr-20 sm:-mr-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                   جزئِیات حساب کاربری
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
                  ویرایش اطلاعات
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
                  onClick={()=>{Cookie.remove('TokenLogin1') && Navigate('/')}}
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

        </div> 
    
   
    );
    }

export default Navbar;