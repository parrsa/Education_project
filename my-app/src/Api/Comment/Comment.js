import React from "react";
import img from "../../image/3949076.png";
import icon from "../../image/icons8-user-64.png";
import icon1 from "../../image/icons8-course-32.png";
import icon2 from "../../image/icons8-query-30.png";
import icon3 from "../../image/icons8-price-30.png";
import BannerP from "../../image/13038.jpg";
import Footer from "../Footer/Footer";

const Comment = (props) => {
  const {name,Studente,Description}=props;
  return (
    <div >
      <div className="w-full h-fit grid grid-cols-1 font-yekan font-bold sm:grid-cols-1 border-none outline-none rounded-3xl bg-slate-50">
        <div className="w-full flex items-center justify-start  h-80 border-none outline-none rounded-2xl shadow-lg shadow-violet-800 bg-slate-50 ">
          <div className= "flex w-80 h-80   mr-14">
            <div className=" rounded-full mt-10 w-14 h-14 ">
              <img className="w-10 h-10" alt="icon" src={icon}></img>
          </div>
          <p className=" mt-10  ">
          {name}
          </p>
          <p className=" text-xs  mr-14 absolute mt-16 font-light">
          {Studente}
          </p>
          <p className="absolute font-BzarBold font-bold  text-gray-800 leading-7 mt-24 sm:w-80 w-96">
            {Description}
          </p>
          </div>
        </div> 
      </div>
     
    </div>
  );
};

export default Comment;
