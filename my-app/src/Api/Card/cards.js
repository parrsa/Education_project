import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate , Routes , Route } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import img from "../../image/3949076.png";
import icon from "../../ui-site/Person.png";
import icon1 from "../../ui-site/Time Machine.png";
import icon2 from "../../image/icons8-query-30.png";
import icon3 from "../../image/icons8-price-30.png";
import logo from "../../image/icons8-course-32.png";
import Footer from "../Footer/Footer";
import Cookie from 'js-cookie'
const Cards=()=> {
  const [item, SetItems] = useState([]); 

  const [search, setSearch] = useState("")
  const location = useLocation();

   const navigate = useNavigate();
  const navigateToProductDetail = (item) => {
    navigate("/Pro", { state: { item } });
  };

  useEffect(() => {
    const getDAta = async () => {
        const response = await fetch(
          "http://192.168.1.2:7007/api/Account/GetCourses"
          // "http://176.65.252.189:7007/api/Account/GetCourses"
        );

        const data = await response.json();
        SetItems(data)
          // console.log(SetItems)
          // console.log(location);
          setSearch(location.state.SearchValue)
        // console.log(data[0]);
        if(response.status===200){
          // console.log("object");
        }else if(response.status===403){
          console.log("first")
        }else{
        console.log("1");
        }  
    };
    getDAta()
  }, [location]);
    const SearchC=item.filter(product => product.name.toLowerCase() .includes(search.toLocaleLowerCase().slice(0,6)));
  return (
    <>
      <Navbar />
      <div dir="rtl" className="w-full flex justify-center  font-KALAMEHBOLD mb-20 mt-20 sm:mt-5 h-fit">
        <div className="w-11/12  h-fit">

        <div className="w-full flex justify-between items-center  h-24">
          <h1 className="font-bold  text-xl sm:text-base sm:font-bold relative sm:mr-3 mr-32 md:mr-3">
            <span className="text-[#9161F8] ml-2 ">- - - - - -</span>
           کل دوره های آموزشی
          
          </h1>
          <h1 className="font-bold text-xl hover:text-violet-800 transition-all cursor-pointer text-[#9161F8] relative sm:left-0 left-20 md:left-0">
         <Link to='/courses'>
         <a >مشاهده همه دوره</a>
         </Link>  
          </h1>
        </div>
        <div className="flex  justify-evenly mr-5 md:-mr-4 sm:-mr-5 ">
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 sm:mr-4  gap-8">
          
            {SearchC.map((item) => item <= 3  ( 
               <div onClick={()=>navigateToProductDetail(item)} className="w-64 sm:w-[170px] h-80 sm:h-[225px] sm:shadow-md sm:shadow-[#9161F8]  sm:rounded-md rounded-xl bg-white shadow-md">
                <div className="w-64 sm:w-[170px]  h-40 sm:h-[100px] sm:rounded-md rounded-xl   ">
                  <img alt="img" className="rounded-xl  sm:w-full  sm:h-[100px] h-40" src={img}/>
                </div>
                <div dir="rtl" className="flex relative  w-64 h-64 sm:bottom-3    rounded-xl justify-center items-center ">
                  <h1 className="absolute top-5 text-center sm:-mr-20  ">{item.name}</h1>
                  <hr className="w-56 sm:w-36 sm:left-24 bg-gray-600 mb-36  sm:mb-40 absolute "></hr>
                  <h3 className="flex overflow-hidden ml-24 mb-28 sm:ml-28 sm:-mt-4  mt-5 ">
                    <span className="absolute  text-gray-700 mr-6 mt-1 text-sm">
                      مدرس دوره : {item.name}
                    </span>
                    <img alt="icon" className="w-5 h-5 ml-28 " src={icon} />
                  </h3>
                  <h5 className="absolute ml-24 -mb-4 sm:mb-8 sm:ml-28  ">
                    <span className=" w-48 absolute mr-8 sm:mr-6 text-sm">
                      30 : 24 : 11
                    </span>{" "}
                    <img alt="icon" className="w-5 h-5 ml-28 sm:w-4 sm:h-4" src={icon1} />
                  </h5>
                  <h5 className="absolute  sm:ml-[75px] sm:mb-12 ">
                    <span className=" w-48 absolute mr-8 sm:mr-0  text-sm">
                      {` ${item.price}تومان`}
                    </span>{" "}
                  </h5>
                </div>

              </div>
            ))}
          </div>
        </div>

        </div>
        
      </div>
    </>
  );
}
export default Cards;
