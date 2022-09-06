import React,{useState} from "react";
import img1 from "../../image/img2.jpg";
import img2 from "../../image/person-mit-laptop_53876-95246.jpg";
import img3 from "../../image/img3.jpg";
import img4 from "../../image/icons8-google-48.png";
import img5 from "../../image/icons8-facebook-circled-48.png";
import img6 from '../../image/icons8-left-arrow-50.png'
const RegisterUser = () => {
  // ----------------------------------
  const [Name,setName]=useState("");
  function SendName(e){
    setName(e.target.value)
  };
  // ----------------------------------
  const [Family,setFamily]=useState('');
  function SendFamily(e){
    setFamily(e.target.value)
  }
  // ----------------------------------
  const [Email,SetEmail]=useState("");
  function SendEmail(e){
    SetEmail(e.target.value)
  }
  // ----------------------------------
  const [Mobile,setMobile]=useState("");
  function SendMobile(e){
      setMobile(e.target.value)
  }
  // ----------------------------------
  const [Passwod,setPassword]=useState("");
  function SendPass(e){
    setPassword(e.target.value)
  }
  // ----------------------------------
  const [Confirm,setConfirm]=useState("");
  function SendConfirm(e){
    setConfirm(e.target.value)
  }
  // ----------------------------------
  const [State,setState]=useState("");
  function SendState(e){
    setState(e.target.value)
  }
  // ----------------------------------
  const [City,setCity]=useState("");
  function SendCity(e){
    setCity(e.target.value)
  }
  // ----------------------------------
  function CreateUser(){
    const body=JSON.stringify({
    Name:Name,
    Family:Family,
    Email:Email,
   Mobile:Mobile,
    Password:Passwod,
    ConfirmPassword:Confirm,
    State:State,
    City:City,
    })
    fetch('http://192.168.1.2:7007/api/Account/Register',{
    method:"POST",
    body:body,
    headers:{ 
      "Content-type": "application/json; charset=UTF-8",
    }
    })
    .then(respone=>respone.json())
    .then(data=>{
      localStorage.setItem('TokenCreate',JSON.stringify(data.token));
      console.log(data)
    })
  }
  return (
    <div className="w-full h-screen flex overflow-hidden ">
      <div className=" w-full bg-slate-100 rounded-l-3xl grid grid-cols-5 h-full overflow-hidden">
        {/* ------------------------------------------------------------------------------------ */}
        <div className=" col-span-2 bg-gray-900">
          <img
            className="h-full bg-cover sm:hidden bg-center"
            src={img1}
            alt="pa"
          />
        </div>
        {/* ------------------------------------------------------------------------------------ */}
        {/* Div-Form */}
        <div className="col-span-3 bg-transparent overflow-hidden">
          <button className=" ml-2 w-44 flex mt-6 h-5">
            <img className=" w-6 mt-2 h-7" alt="p" src={img6} />
            <p className="absolute ml-6 mt-2.5 text-sm">Back</p>
          </button>
          <div className="  w-11/12    h-5/6 flex justify-center  ml-8 mt-8 ">
            {/* ------------------------------------- */}
            {/* headers page */}
            <div className=" w-5/6  h-20 flex justify-center absolute   items-center">
              {/* ------------------------------------------- */}
              <button className=" w-56 h-12 rounded-lg flex items-center bg-white">
                <div className=" w-10 h-10 rounded-full">
                  <img src={img4} />
                </div>
                <h6 className="ml-3">sign up google</h6>
              </button>
              {/* ------------------------------------------- */}
              <button className=" w-56 h-12 ml-10 rounded-lg flex items-center bg-white">
                <div className=" w-10 h-10 rounded-full ">
                  <img src={img5}/>
                </div>
                <h6 className="ml-3">sign up facebook</h6>
              </button>
            </div>
            {/* ------------------------------------------- */}
            <div className="  w-96 absolute -translate-x-52    mt-36  h-fit">
              <form className=" flex absolute justify-between">

              <label className="ml-2">Name:</label>
              <input value={Name} type={"text"} onChange={SendName} className=" w-80 ml-3 border-none"></input>

              <label className="ml-2">Family:</label>
              <input value={Family} type={"text"} onChange={SendFamily} className="w-80 ml-2"></input>

              <label className="absolute mt-20 ml-2 ">Email:</label>
              <input value={Email} type={"email"} onChange={SendEmail} className="absolute mt-20 ml-16 w-80"></input>

              <label className=" absolute left-2/4 mt-20 ml-2" >Mobile:</label>
              <input value={Mobile} type={"number"} onChange={SendMobile} className="absolute left-2/4 mt-20 ml-16 w-80"></input>

              <label className=" absolute mt-40 ">Password:</label>
              <input value={Passwod} type={"password"} onChange={SendPass} className="absolute mt-40 ml-16 w-80"></input>

              <label className=" absolute left-2/4 mt-40 ">Confirm:</label>
              <input value={Confirm} type={"password"} onChange={SendConfirm} className=" absolute left-2/4 mt-40 ml-16 w-80"></input>
              
              <label className=" absolute mt-60 ml-2">State:</label>
              <input value={State} type={"text"} onChange={SendState} className=" absolute mt-60 ml-16 w-80"></input>

              <label className=" absolute left-2/4 mt-60 ml-2">City:</label>
              <input  value={City} type={"text"} onChange={SendCity} className=" absolute left-2/4 mt-60 ml-16 w-80"></input>
              
              </form>
               <button className=" absolute mt-80 left-2/4 px-40 flex py-2 bg-green-400 text-white rounded-xl" onClick={CreateUser}>CreateAccount</button>
            </div>
           
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------ */}
      </div>
    </div>
  );
};

export default RegisterUser;
