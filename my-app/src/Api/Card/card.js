import React from 'react';
// import { Link } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';
import img from '../../image/3949076.png'
import icon from '../../image/icons8-user-64.png'
import icon1 from '../../image/icons8-course-32.png'
import icon2 from '../../image/icons8-query-30.png'
import icon3 from '../../image/icons8-price-30.png'

const Card = (props) => {
   const navigate = useNavigate();
   
   const{item}=props;
   
   const navigateToProductDetail = (item) => {
    // 👇️ navigate to /contacts
    navigate('/Pro',{state:{item}});
  };

  return (
      <div className='w-80 h-[420px]  rounded-xl bg-slate-100 shadow-violet-800 shadow-lg'>
      <div className='w-80 h-36 rounded-xl bg-green-700'>
      <img alt='img' className='rounded-xl' src={img}/>
      </div>
      <div dir='rtl' className='flex relative w-80 h-64 mt-7  rounded-xl justify-center items-center '>
      <h1 className='absolute top-5 '>{item.name}</h1>
      <h3 className='flex ml-40 mb-28 '><span className='absolute font-blod mr-6 text-sm'>مدرس دوره : {item.name}</span><img  alt='icon' className='w-5 h-5 ml-28 ' src={icon}/></h3>
      <h5 className='absolute ml-40 mb-14'><span className='font-blod w-48 absolute mr-6 text-sm'>سطح دوره : {item.courseLevel}</span> <img alt='icon' className='w-5 h-5 ml-28  ' src={icon1}/></h5>
      <h5 className='absolute ml-40  '><span className='font-blod w-52 absolute mr-6 text-sm'>وضعیت دوره : {item.courseStatus}</span> <img alt='icon' className='w-5 h-5 ml-28 mt-1 ' src={icon2}/></h5>
      <h5 className='absolute ml-40 mt-16 '><span className='font-blod w-52 absolute mr-6 text-sm'>قیمت : {item.price} تومان</span> <img alt='icon'className='w-5 h-5 ml-28 mt-1 ' src={icon3}/></h5>
      <div className='absolute flex w-full mt-48 h-12'>
     
     
     <button  className="px-8 h-8  text-sm text-white hover:bg-violet-900 mr-5 shadow-violet-800  transition-all  shadow-md bg-violet-700 flex justify-center items-center rounded-br-2xl rounded-tl-2xl ">
          ثبت نام 
      </button>
     
    
   {/* <Link to={`/Pro/${item}`}>
      </Link> */}
      <button onClick={()=>{navigateToProductDetail(item)}} className="px-8 h-8  text-sm text-white hover:bg-violet-900 mr-14 shadow-violet-800  transition-all  shadow-md bg-violet-700 flex justify-center items-center rounded-bl-2xl rounded-tr-2xl ">
          مشاهده 
      </button>
      </div>
      </div>
      </div>
  );
}
export default Card;
