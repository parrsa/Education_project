import React, { useState,useRef } from "react";
import { Link ,useNavigate } from "react-router-dom";
function LoginTeacher() {
  const Navigate= useNavigate();
  // ----------------------------------
  // Phone
  const [Phone, SetPhone] = useState("");
  function GetPhone(event) {
    SetPhone(event.target.value);
  }
  // ----------------------------------
  // Name
  const [Name, SetName] = useState("");
  function GetName(event) {
    SetName(event.target.value);
  }
  // ----------------------------------
  // Email
  const [Email, SetEmail] = useState("");
  function GetMail(event) {
    SetEmail(event.target.value);
  }
  // ----------------------------------
  // Address
  const [Address, SetAddress] = useState("");
  function GetAddress(event) {
    SetAddress(event.target.value);
  }
  // ----------------------------------
  // Description
  const [Description, SetDescription] = useState("");
  function GetDescription(event) {
    SetDescription(event.target.value);
  }
  // ----------------------------------
  // Password
  const [Password, SetPassword] = useState("");
  function GetPassword(event) {
    SetPassword(event.target.value);
  }
  // ----------------------------------
  // Confirm
  const [Confirm, SetConfirm] = useState("");
  function GetConfirm(event) {
    SetConfirm(event.target.value);
  }
  // ----------------------------------
  const onclickhandel=(e)=>{
    e.preventDefault()
    fileRef.current.click()
  }
  const [filename, setfilename] = useState("")
  const [myfile, setfile] = useState("");
  const fileRef = useRef();
  const handleChange = (e) => {
    const [file] = e.target.files;

    setfilename(file.name)
    setfile(e.target.files[0]
    )
    console.log(e.target.files[0]);
  };

  return (
    <div>
      <form encType="multipart/form-data" action="">
        <div className="container w-full  h-96 bg-cyan-500">
          <label>Mobile</label>
          <input value={Phone} type={"number"} onChange={GetPhone} ></input>

          <label>Name</label>
          <input value={Name} type={"text"}onChange={GetName} ></input>

          <label>Mail</label>
          <input value={Email} type={"email"} onChange={GetMail} ></input>

          <label>Address</label>
          <input value={Address} type={"text"} onChange={GetAddress} ></input>

          <label>Description</label>
          <input
            value={Description}
            onChange={GetDescription}
            type={"text"}
          ></input>

          <label>Password</label>
          <input
            value={Password}
            onChange={GetPassword}
            type={"password"}
          ></input>
          <br />
          <br />
          <label>ConfirmPassword</label>
          <input
            value={Confirm}
            type={"password"}
            onChange={GetConfirm}
          ></input>
          <br />
          <br />
          <button onClick={onclickhandel} className='w-36 h-8 bg-sara  border  text-white  justify-center items-center flex rounded-md' >
          انتخاب فایل</button>
        <input
          ref={fileRef}
          onChange={handleChange}
          multiple={false}
          type="file"
          hidden
        />    <input type="text" value={filename} className=" w-11/12 outline-none" readOnly></input>
          <br />
          <br />
        </div>
        <div className=""> <button className='' onClick={createuser} >
        ثبت درخواست</button></div>
      </form>
    </div>
  );
  function createuser(e) {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("Phone",Phone );
    form_data.append("name",Name );
    form_data.append("Mail", Email);
    form_data.append("Address",Address );
    form_data.append("Description",Description );
    form_data.append("Password",Password );
    form_data.append("ConfirmPassword",Confirm );
    if(myfile)
      form_data.append("FileToUpload", myfile,
        myfile.name);
    
        const requestOptions = {
            method: 'POST',
          //   headers: { "Content-Type": "multipart/form-data","enctype": "multipart/form-data" },
            body: form_data
          };
      
          fetch('http://192.168.1.2:7007/api/Account/RegisterTeacher', requestOptions)
            .then(async response => {
              const isJson = response.headers.get('content-type')?.includes('application/json');
              const data = isJson && await response.json();
      
              // check for error response
              console.log(data);
              localStorage.setItem('TokenTeacher',JSON.stringify(data.token))
              if (response.ok) {
                // router.push('/')
        Navigate('/Pro')
              } else {
                return alert("خطا در ثبت");
              }
            }).catch((error)=>console.log('sooooo',error))
        }
}
export default LoginTeacher;
