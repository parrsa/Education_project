import { React, useState, useEffect, Link, useParams, Routes, Route } from '../../Static_import/Import'
import Footer from '../Footer/Footer'
import FooterTop from '../Footer/FooterTop'
import Navbar from '../NavBar/Navbar'
import Cookie from 'js-cookie';
import { data } from 'autoprefixer'
export const Information = () => {
  const Cook = Cookie.get('TokenLogin1')
  const [UserData, SetUserData] = useState("");
  const [City, SetCity] = useState("");
  const [State, SetState] = useState("")
  useEffect(() => {
    const GetInformationUser = async () => {
      const response = await fetch('http://192.168.1.2:7007/api/Admins/GetUser', {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + Cook,
        }
      })
      const data = await response.json();
      SetUserData(data)
    }
    GetInformationUser();

    const GetCity = async () => {
      const response = await fetch(`http://192.168.1.2:7007/api/Account/GetCity/${UserData.cityId}`);
      const data = await response.json();
      SetCity(data)
      console.log(data);
    }
    GetCity();

    // const GetState=async()=>{
    //   const response=await fetch(`http://192.168.1.2:7007/api/Account/GetState/${City.stateId}`)
    //   const data =await response.json();
    //   SetState(data)
    //   console.log(data)
    // }
    // GetState();
  }, []);
  const params = useParams();
  console.log(UserData);
  return (
    <div>نمایش اطلاعات شما
      <Navbar />
      <div className='w-full h-screen bg-[#EFEFEF] font-KALAMEHBOLD flex justify-center items-center'>
        <div className='w-[70%] h-4/5 mt-10 bg-white rounded-2xl'>
          <div dir='rtl' className='w-full h-16 flex items-center  justify-start  rounded-t-2xl '>
            <ul className="flex sm:bg-[#9161F8] sm:shadow-sm sm:shadow-[#9161F8] text-black  ">

              <Link to={`/information/${1}`}>
                <li className="relative mr-10 sm:hover:bg-slate-100 hover:text-violet-800 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:text-2xl cursor-pointer transition-all  p-1.5">
                  <a href="#">
                    نمایش اطلاعات شما
                  </a>
                </li>
              </Link>
              <Link to={`/information/${2}`}>
                <li className="relative mr-10 sm:hover:bg-slate-100 hover:text-violet-800 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:text-2xl cursor-pointer transition-all  p-1.5 ">
                  <a href="#">
                    ویرایش اطلاعات
                  </a>
                </li>
              </Link>

              <Link to={`/information/${3}`}>
                <li className="relative mr-10 sm:hover:bg-slate-100 hover:text-violet-800 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:text-2xl cursor-pointer transition-all  p-1.5 ">
                  <a href="#">
                    درس های من
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <hr className='bg-black'></hr>

          {params.id == 1 &&
            <div className='w-full grid grid-cols-3  grid-rows-2 h-[90%]  rounded-b-2xl '>
              <div className="col-span-2  flex  justify-center items-center row-span-2 sm:col-span-2 sm:row-span-2 ">
                <div className='w-[90%] h-96 rounded-xl'>
                  <div class="flex flex-col ">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full  text-center">
                            <tbody className='p-24'>

                              <tr class="border-b  bg-gray-200 ">
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                  {UserData.name}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  :
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  نام
                                </td>
                              </tr>

                              <tr class="border-b relative  bg-transparent ">
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                  {UserData.family}
                                </td>
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">

                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  نام خانوادگی
                                </td>
                              </tr>

                              <tr class="border-b bg-gray-200 ">
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                  {UserData.mobile}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  :
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  شماره موبایل
                                </td>
                              </tr>

                              <tr class="border-b  bg-transparent ">
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                  {UserData.email}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  ایمیل
                                </td>
                              </tr>

                              <tr class="border-b  bg-gray-200 ">
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                  {"State.name"}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  :
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  استان
                                </td>
                              </tr>

                              <tr class="bg-transparent ">
                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                  {City.name}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  شهرستان
                                </td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* box2-right */}
              <div className='col-span-1 row-span-2 flex justify-center items-center sm:row-span-1  sm:col-span-2 '>
                {/* box-image */}
                <div className='w-72 h-64 rounded-2xl shadow-lg shadow-violet-400 bg-white mb-10 '>
                  <div className='w-28 h-28 ml-[88px] mt-3 bg-violet-700 rounded-full'></div>
                  <div className='w-64 h-20  ml-5 mt-5 flex justify-center '>
                    <h1>{UserData.name}</h1>
                    <h1 className='mt-5 absolute'>{UserData.email}</h1>
                    <h1 className='mt-5 absolute'>{UserData.city}</h1>
                  </div>
                </div>
              </div>
            </div>
          }

          {params.id == 2 &&
            <div className='w-full grid grid-cols-3 h-[90%]  rounded-b-2xl '>
              <div className="col-span-3 bg-red-800 flex  justify-center items-center row-span-2 sm:col-span-2 sm:row-span-1 ">
                <div className='w-full h-full  bg-green-600'>
                  <h1>parsa2</h1>
                </div>
              </div>
            </div>
          }

          {params.id == 3 &&
            <div className='w-full grid grid-cols-3  grid-rows-2 h-[90%]  rounded-b-2xl '>
              <div className="col-span-2 bg-red-800 flex  justify-center items-center row-span-2 sm:col-span-2 sm:row-span-1 ">
                <div className='w-[90%] h-96 rounded-xl bg-green-600'>
                  <h1>parsa3</h1>
                </div>
              </div>
              {/* box2-right */}
              <div className='col-span-1 row-span-2 bg-blue-700 flex justify-center items-center sm:row-span-1 sm:col-span-2 '>
                {/* box-image */}
                <div className='w-72 h-72 rounded-2xl  bg-green-700'>
                  <div className='w-24 h-24 ml-24 bg-red-200 rounded-full'></div>
                  <div className='w-64 h-44 ml-5  bg-blue-500'></div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  )
}

export default Information