import React, { useState } from "react";
import Styled from 'styled-components';
const Login = () => {
  const [Phone,setPhone]=useState("");
function GetNumber(event){
  setPhone(event.target.value)
}
const [Pass,setPassword]=useState("");
function GetPass(event){
  setPassword(event.target.value)
}

function HandelSendApi(){
  const body=JSON.stringify({
Mobile:Phone,
    Password:Pass
  })
  const Headers={
    "Content-type": "application/json; charset=UTF-8",
  }
  fetch("http://192.168.1.2:7007/api/Account/Login",{
    method:"POST",
    body:body,
    headers:Headers
  })
  .then(response=>response.json())
  .then((data)=>{
    localStorage.setItem('TokenLogin',JSON.stringify(data.token));
    console.log(data)
  })
  .catch((error) => console.log("ssssss", error));
}

  return (
    <div className=" w-full flex justify-center items-center h-screen bg-blue-700">
      <div className="w-80 h-96 flex justify-center items-center  rounded-xl bg-emerald-500">
      <input onChange={GetNumber} value={Phone} type={"number"} className="mb-20" ></input>
        <input
          className=" absolute mb-20 mt-20"
          value={Pass}
          onChange={GetPass}
          type={"password"}
        ></input>
        <button onClick={HandelSendApi} className="mt-20 absolute px-14 py-1 bg-red-500">Send</button>
      </div>
    </div>
    )
}

export default Login