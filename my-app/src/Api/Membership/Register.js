import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Register = () => {

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
    const [City,setCity]=useState("");
    function SendCity(e){
    setCity(e.target.value)
  }
// ----------------------------------
    const [State,setState]=useState("");
    function SendState(e){
    setState(e.target.value)
  }
// ----------------------------------

    function CreateUser(){
    const body= JSON.stringify({
    Name:Name,
    Family:Family,
    Email:Email,
    Mobile:Mobile,
    Password:Passwod,
    ConfirmPassword:Confirm,
    State:State,
    City:City,
  })
    fetch('http://176.65.252.189:7007/api/Account/Register',{
        method:"POST",
        body:body,
        headers:{ 
            "Content-type": "application/json; charset=UTF-8",
          }
    })
    .then(response=>response.json())
    .then((data)=>{
        localStorage.setItem('TokenRegisterUser', JSON.stringify(data.token))
        console.log(data)
    })
}

  return (
    <div>
<div class="min-h-screen  p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
    <h2 class="font-semibold relative right-10 text-xl text-gray-600">Sign up Form</h2>
    <Link to='/app'>
    <p  class="text-gray-500 mb-6">Back</p>
    </Link>  

      <div class="bg-white rounded-2xl relative bottom-16 sm:w-11/12 sm:relative sm:right-16 shadow-xl ml-20 shadow-violet-600 p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 ml-56 sm:ml-0 text-sm grid-cols-1 lg:grid-cols-3">
          
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type={"text"}  value={Name}  onChange={SendName} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"></input>

              </div>

              <div class="md:col-span-5">
                <label for="email">Family</label>
                <input value={Family} type={"text"} onChange={SendFamily} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"></input>
              </div>

              <div class="md:col-span-3">
                <label for="address">Email</label>
                <input value={Email} type={"email"} onChange={SendEmail} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" ></input>
              </div>

              <div class="md:col-span-2">
                <label for="city">Mobile</label>
                <input value={Mobile} type={"number"} onChange={SendMobile} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"></input>
              </div>

              <div class="md:col-span-2">
                <label for="city">Password</label>
                <input value={Passwod} type={"password"} onChange={SendPass} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"></input>
              </div>

              <div class="md:col-span-2">
                <label for="city">ConfirmPass</label>
                <input value={Confirm} type={"password"} onChange={SendConfirm} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"></input>

              </div>

              <div class="md:col-span-2">
                <label for="city">City</label>
                <input  value={City} type={"text"} onChange={SendCity} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"></input>
              </div>


              <div class="md:col-span-2">
                <label for="city">State</label>
                <input value={State} type={"text"} onChange={SendState} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"></input>
              </div>

              <div class="md:col-span-5">
                <div class="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                  <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                </div>
              </div>

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button onClick={CreateUser} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
    </div>

  )
}

export default Register