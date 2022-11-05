import React, { Fragment  } from 'react';
import Logo from "../../image/logo.jpg";
import shop from '../../image/icons8-shopping-cart-100.png'
import CartS from '../../image/icons8-shopping-cart-30.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// const Ul = styled.ul`
//     position:absolute;
//     margin: 0px;
//     flex-direction: column;
//     background: red;
//     transition: all 0.3s linear;
//     transform: ${(props) =>
//      props.open ? "translateX(50%)" : "translateY(-120%)"};
//     height: 250px;
//     width: 300px;
//     color: white;
// `;
const navbar=()=>  {
    return (
      <div dir="rtl" className="w-full fixed bg-stone-50 z-10 font-yekan text-sm h-20 top-0 flex justify-between  items-center">
    <Link to={'/app'}>
      <div  className=" w-20 sm:hidden h-20 rounded-full mr-20  mt-6 flex ">
      <img  className="w-14 cursor-pointer h-14" src={Logo} alt="logo" />
      </div>
    </Link>  
        <ul className="flex  mt-1 sm:hidden sm:mt-56  items-center">
        <Link to='/app'><li className="  border-b-2 cursor-pointer  m-8 p-1.5 border-violet-800"><a href="#">صفحه اصلی</a></li></Link>
      <Link target='_self' to='/courses'>  <li className=" m-8 hover:border-b-2 p-1.5  cursor-pointer  border-violet-800 "><a href="../Card/">دوره ها </a>
      </li></Link>
      <Menu as="div" className="relative inline-block text-right">
      <div>
        <Menu.Button className="inline-flex justify-center outline-none border-violet-800 m-8 bold  hover:border-b-2 p-1.5 cursor-pointer  ">
          مدرسین
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
        <Menu.Items className="absolute right-0 z-10 w-32 origin-top-right rounded-md bg-slate-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
             <Link to='/Register-Teacher'>
              <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-300 text-gray-900' : 'text-gray-900',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  ثبت نام
                </a>
             
             </Link>  
              )}
            </Menu.Item>
          </div>
          <Link  to='/Cards'>
            <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-300 text-gray-900' : 'text-gray-900',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 ورود 
                </a>
              )}
            </Menu.Item>
          </div></Link>  
        </Menu.Items>
      </Transition>
    </Menu>

      <Link to='/student-comments'>  <li className=" m-8 hover:border-b-2 p-1.5 cursor-pointer  border-violet-800 "><a href="#">نظرات داشنشجویان</a></li></Link>
       <Link to='/About-us'> <li className=" m-8 hover:border-b-2 p-1.5 cursor-pointer  border-violet-800"><a href="#">درباره ما</a></li></Link>
        
      </ul>
      <div className="w-48 h-12  ml-28 rounded-3xl flex text-lg  text-white justify-center ">
      <button  className="px-6  ml-5  flex justify-center items-center  rounded-lg">
        {/* <button onMouseOver={this.Clicke} onMouseOut={this.ClearPage} open={this.state.open} className="px-6  ml-5  flex justify-center items-center  rounded-lg"> */}
        <img  alt="icon" className="absolute  w-8 h-8" src={CartS}/>
        {/* <Main open={this.state.open}/> */}
        </button>
        <Menu as="div" className="relative inline-block text-right">
      <div>
        <Menu.Button className="inline-flex w-full  rounded-md border border-gray-300 bg-violet-700 text-white px-4 mt-1.5 py-2 text-sm font-medium shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
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
        <Menu.Items className="absolute z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div dir='rtl' className="py-1">

            <form method="POST" action="#">
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
                   ورود
                  </button>
               </Link>  
                )}
              </Menu.Item>
            </form>

              <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <Link to='/sign-up'>
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2  text-sm'
                    )}
                  >
                  ثبت نام
                  </button>
                  </Link>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      </div>
    </div>
    );
    }

export default navbar;



