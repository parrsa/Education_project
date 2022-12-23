import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cookie from "cookie";
import Cookies from "js-cookie";
import FooterTop from "../Footer/FooterTop";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import BannerImage from "../../ui-site/undraw_reading_time_re_phf7 1.png";
const Main = () => {
  const [Count, SetCount] = useState(1);
  const [Phone, SetPhone] = useState("");
  function PostMobile(e) {
    SetPhone(e.target.value);
  }
  const [Password, SetPassword] = useState("");
  function PostPassword(e) {
    SetPassword(e.target.value);
  }
  const NavigateParsa = useNavigate();
  const getData = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Mobile: Phone, Password: Password }),
    };
    fetch("http://192.168.1.2:7007/api/Account/Login", requestOptions)
      .then(async (response) => {

        const isJson = response.headers.get('Content-Type')?.includes("application/json");
        const data = isJson && (await response.json()); console.log(data)
        if (response.status === 200) {
          Cookies.set('TokenLogin1', data.token, {
            expires: 0.20 / 24,
            secure: true,
            sameSite: 'strict',
            path: '/',
          })
          NavigateParsa('/')
        }
      })
  }
  // End-Login-api

  // Start-Api
  const [Name, setName] = useState("");
  function SendName(e) {
    setName(e.target.value)
  };

  // ----------------------------------
  const [Family, setFamily] = useState('');
  function SendFamily(e) {
    setFamily(e.target.value)
  }
  // ----------------------------------
  const [Email, SetEmail] = useState("");
  function SendEmail(e) {
    SetEmail(e.target.value)
  }
  // ----------------------------------
  const [Mobile, setMobile] = useState("");
  function SendPhone(e) {
    setMobile(e.target.value)
  }
  // ----------------------------------
  const [Passwod, setPassword] = useState("");
  function SendPass(e) {
    setPassword(e.target.value)
  }
  // ----------------------------------
  const [Confirm, setConfirm] = useState("");
  function SendConfirm(e) {
    setConfirm(e.target.value)
  }
  // ----------------------------------
  const [SelectCity, SetSelectCity] = useState("");
  const SendCity = (id) => {
    SetSelectCity(id)
  }
  // ---------------- ------------------

  function CreateUser() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: Name,
        Family: Family,
        Email: Email,
        Mobile: Mobile,
        Password: Passwod,
        ConfirmPassword: Confirm,
        cityId: SelectCity,
      })
    };
    fetch('http://192.168.1.2:7007/api/Account/Register', requestOptions)
      .then(async (response) => {
        const isJson = response.headers.get('Content-Type')?.includes("application/json");
        const data = isJson && (await response.json());
        if (response.status === 200) {
          Cookies.set('TokenRegister', data.token, {
            expires: 0.20 / 24,
            secure: true,
            sameSite: 'strict',
            path: '/',
          })
          NavigateParsa('/')
        }
      })
    console.error('There was an error!');
  }

  const [State, SetState] = useState()
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch
        ('http://192.168.1.2:7007/api/Account/GetStates');
      const data = await response.json();
      SetState(data)
      if(data.length>0){
        CreateSelectbox(data[0].id);
      }
    }
    getData();
  }, []);


  const [City, SetCity] = useState([]);
  const CreateSelectbox = async (id) => {
    // alert(item.name)
    const res = await fetch(`http://192.168.1.2:7007/api/Account/GetCities/${id}`)
    const data = await res.json();
    SetCity(data)
    // alert('parsa')
  }
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen font-KALAMEHBOLD flex justify-center">
        <div className="w-full h-11/12">
          <div className="grid grid-cols-2 grid-rows-2 h-full bg-[#9161F8] ">
            <div className="col-span-1 flex  justify-center items-center row-span-2 sm:hidden">
              <img
                alt="icon"
                className="w-[400px] md:left-10 relative left-20 h-[400px]"
                src={BannerImage}
              />
            </div>
            {Count === 1 && (
              <div className="col-span-1 flex  justify-center mt-52  row-span-2 sm:row-span-2 sm:col-span-2">
                <div className="w-[55%] md:w-[75%] md:left-5 md:-mt-10 relative sm:w-[95%] h-[75%] sm:h-[60%] md:h-[85%] rounded-xl overflow-hidden shadow-lg shadow-violet-800  bg-white">
                  <h1 className="text-center text-2xl mt-3">ورود</h1>
                  <div dir="rtl" className="text-lg">
                    <div>
                      <div className="mr-10 md:mr-5">
                        <label for="mobile" class="mt-10 text-gray-900 ">
                          شماره موبایل
                        </label>
                        <input
                          value={Phone}
                          onChange={PostMobile}
                          type={"number"}
                          className="block w-11/12 mt-2 md:mt-1 px-2  py-2 bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="mr-10 md:mr-5">
                        <label
                          for="password"
                          class="relative top-7 ext-gray-900 "
                        >
                          رمز عبور
                        </label>
                        <input
                          type={"password"}
                          value={Password}
                          onChange={PostPassword}
                          className="block w-11/12 mt-8  px-2  py-2 bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="mr-10 md:mr-5 md:mt-5 mt-10">
                        <button
                          type="submit"
                          class="w-11/12 text-white bg-[#9161F8] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          onClick={getData}
                        >
                          ادامه
                        </button>
                      </div>
                      <p class=" text-sm mt-3 md:ml-2 md:mt-2 text-center text-black">
                        <Link to="/Login">
                          <a
                            onClick={() => SetCount(2)}
                            href="#"
                            class=" text-primary-600 hover:underline dark:text-primary-500"
                          >
                            رفتن به صفحه ثبت نام
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sign Up */}

            {Count === 2 && (
              <div className="col-span-1 flex  justify-center mt-24 row-span-2 sm:row-span-2 sm:col-span-2">
                <div className="w-[55%] md:w-[80%] sm:w-[95%] h-[96%] rounded-xl overflow-hidden shadow-lg shadow-violet-800  bg-white">
                  <h1 className="text-center text-2xl mt-3 md:mt-1">ثبت نام</h1>
                  <div dir="rtl" className="text-lg">
                    <div id="hide">
                      <div className="mr-10">
                        <label for="name" class="mt-10  text-gray-900 ">
                          نام
                        </label>
                        <input
                          type={"text"}
                          value={Name}
                          onChange={SendName}
                          className="block w-11/12 mt-1 px-2   bg-white border rounded-md focus:border-purple-800
                        focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="mr-10">
                        <label for="fname" class="mt-10 xt-gray-900 ">
                          نام خانوادگی
                        </label>
                        <input
                          value={Family}
                          onChange={SendFamily}
                          type={"text"}
                          className="block w-11/12 mt-1 px-2  bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="mr-10">
                        <label for="mobile" class="mt-10 text-gray-900 ">
                          شماره موبایل
                        </label>
                        <input
                          value={Mobile}
                          onChange={SendPhone}
                          type={"number"}
                          className="block w-11/12 mt-1 px-2   bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="mr-10">
                        <label for="email" class="mt-10 text-gray-900 ">
                          آدرس ایمیل
                        </label>
                        <input
                          type={"email"}
                          value={Email}
                          onChange={SendEmail}
                          className="block w-11/12 mt-1 px-2   bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="mr-10">
                        <label for="password" class="mt-10 ext-gray-900 ">
                          رمز عبور
                        </label>
                        <input
                          type={"password"}
                          value={Passwod}
                          onChange={SendPass}
                          className="block w-11/12 mt-1 px-2   bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="mr-10">
                        <label for="password" class="mt-10 text-gray-900 ">
                          تایید رمز عبور
                        </label>
                        <input
                          type={"password"}
                          value={Confirm}
                          onChange={SendConfirm}
                          className="block w-11/12 mt-1 px-2    bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="flex">

                        <div className="mr-10">
                          <form>
                            <label for="password" class="mt-10 text-gray-900 ">
                              استان
                            </label>

                            <select onChange={(event)=>{CreateSelectbox(event.target.value)}} className=" block full mt-1 px-2  bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                              {State.map(item => (
                                <option value={item.id} >
                                  {item.name}
                                </option>
                              ))}
                            </select>

                          </form>
                        </div>
                        <div className="mr-10">
                          <label for="password" class="mt-10 text-gray-900 ">
                            شهرستان
                          </label>
                          <select onChange={(event)=>{SendCity(event.target.value)}} className=" block full mt-1 px-2  bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                              {City.map(item => (
                                <option value={item.id} >
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          {/* <select
                            className="block w-full mt-1 px-2 bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          >
                            {City.map((item) => (
                              <option onClick={() => SendCity(item)}  >{item.name}</option>
                            ))}
                          </select> */}
                        </div>

                      </div>
                    </div>
                    <div className="mr-10 mt-10 md:-mt-0">
                      <button
                        type="submit"
                        class="w-11/12 text-white bg-[#9161F8] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={CreateUser}
                      >
                        تایید
                      </button>
                    </div>
                    <p class=" text-sm mt-3 text-center text-black">
                      قبلا ثبت نام کرده اید؟{" "}
                      <Link to="/Login">
                        <a
                          onClick={() => SetCount(1)}
                          href="#"
                          class=" text-primary-600 hover:underline dark:text-primary-500"
                        >
                          رفتن به صفحه ورود
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
};

export default Main;
