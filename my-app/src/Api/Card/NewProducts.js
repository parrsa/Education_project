import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate , Link } from 'react-router-dom';
import { useEffect ,useState } from 'react';
import img from '../../image/3949076.png'
import icon from "../../ui-site/Person.png";
import icon1 from "../../ui-site/Time Machine.png";
import icon2 from '../../image/icons8-query-30.png'
import icon3 from '../../image/icons8-price-30.png';
import { useLocation } from 'react-router-dom';
const NewProducts = (props) => {
  const [items, SetItems] = useState([]);
//   const [items2, SetItems2] = useState([]);

  useEffect(() => {
      const getDAta = async () => {
          const response = await fetch(
              "http://192.168.1.2:7007/api/Account/GetCourses"
              // "http://176.65.252.189:7007/api/Account/GetCourses"
              );
              const data = await response.json();
            //   SetItems(data)
              let items2 = data
              try {
                  SetItems([items2[0],items2[1],items2[2],items2[3]]) 
              } catch (error) {
              }
              
              if(response.status===200){
                  console.log("object");
                }else if(response.status===403){
                    console.log("first")
                }else{
                    console.log("1");
                }
        
                };
                getDAta();
  }, []); 
  const navigate = useNavigate();
  const navigateToProductDetail = (item) => {
    navigate("/Pro", { state: { item } });
  };

  return (
    <div dir="rtl" className="w-full flex justify-center  font-KALAMEHBOLD  mb-20  h-fit">
    <div className="w-11/12  h-fit">

    <div className="w-full flex justify-between items-center  h-24">
      <h1 className="font-bold  text-xl sm:text-base relative sm:mr-0 mr-32">
        <span className="text-[#9161F8] ml-2 ">- - - - - -</span>
       جدید ترین دوره های رایگان
      </h1>
      <h1 className="font-bold text-xl hover:text-violet-800 transition-all cursor-pointer text-[#9161F8] relative sm:left-0 left-20">
     <Link to='/courses'>
     <a>مشاهده همه دوره</a>
     </Link>  
      </h1>
    </div>
    <div className="flex justify-evenly mr-5 sm:-mr-5 ">
      <div  className="grid grid-cols-4 sm:grid-cols-2 sm:gap-4 sm:mr-4  gap-8">
      {items.map((item) => (
               <div onClick={()=>navigateToProductDetail(item)} className="w-64 sm:w-[170px] h-80 sm:h-[225px] sm:shadow-md sm:shadow-[#9161F8]  sm:rounded-md rounded-xl bg-white">
                <div className="w-64 sm:w-[170px]  h-40 sm:h-[100px] sm:rounded-md rounded-xl   ">
                  <img alt="img" className="rounded-xl  sm:w-full  sm:h-[100px] h-40" src={img}/>
                </div>
                <div dir="rtl" className="flex relative  w-64 h-64 sm:bottom-3  rounded-xl justify-center items-center ">
                  <h1 className="absolute top-5 text-center sm:-mr-20  ">{item.name}</h1>
                  <hr className="w-56 sm:w-36 sm:left-24 bg-gray-600 mb-36  sm:mb-40 absolute "></hr>
                  <h3 className="flex overflow-hidden ml-24 mb-28 sm:ml-28 sm:-mt-4  mt-5 ">
                    <span className="absolute  text-gray-700 mr-6 mt-1 text-sm">
                      مدرس دوره : {item.name}
                    </span>
                    <img alt="icon" className="w-5 h-5 ml-28 " src={icon} />
                  </h3>
                  <h5 className="absolute ml-24  -mb-4 sm:mb-8 sm:ml-28  ">
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
  );
}
export default NewProducts;
