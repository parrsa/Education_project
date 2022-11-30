import React from "react";
import Footer from "../Footer/Footer";
import FooterTop from "../Footer/FooterTop";
import Navbar from "../NavBar/Navbar";
import Img from "../../ui-site/undraw_personal_notebook_re_d7dc 1.png";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import Upload from "../../ui-site/Upload1.png";
import BannerImage from '../../ui-site/undraw_reading_time_re_phf7 1.png'
const Register = () => {
  const [Count, SetCount] = useState(1);
  const Navigate = useNavigate();
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
  const onclickhandel = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  const [filename, setfilename] = useState("");
  const [myfile, setfile] = useState("");
  const fileRef = useRef();
  const handleChange = (e) => {
    const [file] = e.target.files;

    setfilename(file.name);
    setfile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  function createuser(e) {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("Phone", Phone);
    form_data.append("name", Name);
    form_data.append("Mail", Email);
    form_data.append("Address", Address);
    form_data.append("Description", Description);
    form_data.append("Password", Password);
    form_data.append("ConfirmPassword", Confirm);
    if (myfile) form_data.append("FileToUpload", myfile, myfile.name);

    const requestOptions = {
      method: "POST",
      //   headers: { "Content-Type": "multipart/form-data","enctype": "multipart/form-data" },
      body: form_data,
    };

    fetch("http://192.168.1.2:7007/api/Account/RegisterTeacher", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // check for error response
        console.log(data);
        if (response.ok) {
          Cookies.set('TokenRegisterTeacher' , data.token ,{
            expires: 0.10/24,
        secure: true,
        sameSite:'strict',
        path:'/'
          })
        Navigate('/')
        } else {
          return alert("خطا در ثبت");
        }
      })
      .catch((error) => console.log("sooooo", error));
  }
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen font-KALAMEHBOLD flex justify-center">
        <div className="w-full h-11/12">
          <div className="grid grid-cols-2 grid-rows-2 h-full bg-[#9161F8] ">
            <div className="col-span-1 flex  justify-center items-center row-span-2 sm:hidden">
              <img alt="icon" className="w-[400px] relative left-20 h-[400px]" src={BannerImage} />
            </div>
            <div className="col-span-1 flex  justify-center mt-24 row-span-2 sm:row-span-2 sm:col-span-2">
              <div className="w-[55%] sm:w-[95%] h-fit rounded-xl overflow-hidden shadow-lg shadow-violet-800  bg-white">
                <h1 className="text-center text-2xl mt-3">ثبت نام</h1>
                {Count === 1 && (
                  <div dir="rtl" className="text-lg">
                    <div id="hide">
                      <div className="mr-10">
                        <label for="name" class="mt-10 text-gray-900 ">
                          نام
                        </label>
                        <input
                          type={"text"}
                          value={Name}
                          onChange={GetName}
                          className="block w-11/12   mt-2 px-2 py-1  bg-white border rounded-md focus:border-purple-800
                           focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      {/* <div className="mr-10">
                        <label for="fname" class="mt-10 xt-gray-900 ">
                          نام خانوادگی
                        </label>
                        <input
                          type={"text"}
                          className="block w-11/12 mt-1 px-2 py-1  bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div> */}
                      <div className="mr-10">
                        <label for="mobile" class="mt-10 text-gray-900 ">
                          شماره موبایل
                        </label>
                        <input
                          value={Phone}
                          onChange={GetPhone}
                          type={"number"}
                          className="block w-11/12 mt-2 px-2 py-1  bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="mr-10">
                        <label for="email" class="mt-10 text-gray-900 ">
                          آدرس ایمیل
                        </label>
                        <input
                          type={"email"}
                          value={Email}
                          onChange={GetMail}
                          className="block w-11/12 mt-2 px-2 py-1  bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="mr-10">
                        <label for="password" class="mt-10 ext-gray-900 ">
                          رمز عبور
                        </label>
                        <input
                          type={"password"}
                          value={Password}
                          onChange={GetPassword}
                          className="block w-11/12 mt-2 px-2 py-1  bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="mr-10">
                        <label for="password" class="mt-10 text-gray-900 ">
                          تایید رمز عبور
                        </label>
                        <input
                          type={"password"}
                          value={Confirm}
                          onChange={GetConfirm}
                          className="block w-11/12 mt-2 px-2 py-1   bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                    </div>
                    <div className="mr-10 mt-8">
                      <button
                        type="submit"
                        class="w-11/12 text-white bg-[#9161F8] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={() => SetCount(2)}
                      >
                        ادامه
                      </button>
                    </div>
                    <p class=" text-sm mt-4 mb-3 text-center text-black">
                      قبلا ثبت نام کرده اید؟{" "}
                     <Link to='/Login'><a
                        href="#"
                        class=" text-primary-600 hover:underline dark:text-primary-500"
                      >
                        رفتن به صفحه ورود
                      </a></Link> 
                    </p>
                  </div>
                )}

                {Count === 2 && (
                  <div dir="rtl" className="text-lg ">
                    <div className="">
                      <div className="mr-10">
                        <label for="text" class="mt-10 ext-gray-900 ">
                          آدرس
                        </label>
                        <input
                          type={"text"}
                          value={Address}
                          onChange={GetAddress}
                          className="block w-11/12 mt-1 px-2 py-1  bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="آدرس را وارد کنید"
                        />
                      </div>
                      <div className="mr-10">
                        <label for="text" class="mt-10 text-gray-900 ">
                          توضیحات
                        </label>

                        <textarea
                          value={Description}
                          onChange={GetDescription}
                          name=""
                          id=""
                          cols="10"
                          rows="5"
                          className="block overflow-auto w-11/12 mt-1 px-2 py-1   bg-white border rounded-md focus:border-purple-800
                        focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        ></textarea>
                      </div>
                        <div className="grid grid-cols-2 h-48 ">
                            <div className=" col-span-1"></div>
                            <div className="   col-span-1">
                            <div  className=" flex -mr-4 justify-center rounded-md border-2 border-dashed w-48 sm:w-44 mt-10 items-center h-32 border-gray-300 px-6 pt-5 pb-6">
                        <button
                          onClick={onclickhandel}
                          className="w-20 h-20 mt-5 relative bottom-5 text-white  justify-center  flex rounded-md"
                        >
                         <img className="w-full h-full" src={Upload}/>
                        </button>
                        <input
                          ref={fileRef}
                          onChange={handleChange}
                          multiple={false}
                          type="file"
                          hidden
                        >
        
                        </input>
                        <br/>
                        <input
                          type="text"
                          value={filename}
                          className="w-24 h-8 mr-4 outline-none absolute mt-24"
                          readOnly
                        />
                      </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-10 mt-5 mb-10">
                      <button
                        onClick={createuser}
                        type="submit"
                        class="w-11/12 text-white bg-[#9161F8] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        ثبت نام
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
};

export default Register;
