import React , {useEffect , useState} from 'react'
import { json, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../Footer/Footer'
import FooterTop from '../Footer/FooterTop'
import Navbar from '../NavBar/Navbar'
import Cookie from 'js-cookie';
import Banner from "../../ui-site/No data-rafiki.png"
import Remove from '../../ui-site/icons8-remove-48.png'
import Payment from "../../ui-site/icons8-pay-30.png"
const Basket = () => {
const Swal = require('sweetalert2')
const Cook=Cookie.get('TokenLogin1')
const [Product , setProduct]=useState([])
// console.log(Product);
const navigate=useNavigate();
const { state } = useLocation();

  const Deletuser= async(item)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        const response =  fetch(`http://192.168.1.2:7007/api/Basket/DeleteBasket`,{
          method: 'POST',
          body:  item.courseId ,
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cook,
          }
        });
        const data=  response.json();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  useEffect(() => {
    const GetData= async ()=>{
      const response=await fetch('http://192.168.1.2:7007/api/Basket/GetBasket', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + Cook,
        }
      });
     const data = await response.json();
    //  console.log(data)
     setProduct(data)
    }
    GetData()
  },[Deletuser]);
  let Price = Product.reduce((acc,cur) =>  acc = acc + parseInt(cur.price) , 0 )

  const HandellPage=()=>{
    navigate('/courses')
  }

  const separate = (Number)=> 
    {
      // return Number;
      // alert(typeof Number)
      // console.log((Number/10))
      // const Number_sring = Number.toString();
      let fraction =''

      if(Number.split('.').length>1){

        fraction = "/" + Number.split('.')[1]
      }else{

        // fraction = '/0'
      }

      Number = Number.split('.')[0]

      const n = Number.length;
      // let i = 1
      let output = ''
      Number = Number.split('').reverse().join('')
      for (let index = 1; index < n+1; index++) {
        // let temp = Number%10;
        // let x = Math.floor(2.3);
        // Number = Number/10;
        let temp = Number.charAt(index-1)
        if (index%3 === 0 && index !==n){
          output = output + temp +','
        }else{
          output = output + temp
        }
      }
      return output.split('').reverse().join('')+fraction;
    }


   
    const separated = (Number)=> 
    {
      // return Number;
      // alert(typeof Number)
      // console.log((Number/10))
      const Number_sring = Number.toString();
      let fraction =''

      if(Number_sring.split('.').length>1){

        fraction = "/" + Number_sring.split('.')[1]
      }else{

        // fraction = '/0'
      }

      Number = Number_sring.split('.')[0]

      const n = Number_sring.length;
      // let i = 1
      let output = ''
      Number = Number_sring.split('').reverse().join('')
      for (let index = 1; index < n+1; index++) {
        // let temp = Number%10;
        // let x = Math.floor(2.3);
        // Number = Number/10;
        let temp = Number.charAt(index-1)
        if (index%3 === 0 && index !==n){
          output = output + temp +','
        }else{
          output = output + temp
        }
      }
      return output.split('').reverse().join('')+fraction;
    }

    // Product.userCourse.courseId

    let CourseId=Product.map((item)=>item)
    const [ItemProduct, SetItemProduct] = useState([]);
    useEffect(() => {
      const getDAta = async () => {
        const response = await fetch(`http://192.168.1.2:7007/api/Account/GetCourse/${state.St}`);
        const data = await response.json();
        setProduct(data);
        console.log(data);
      };
      getDAta();
    }, []);

      const [Token , setToken]=useState();
      useEffect(()=>{
         const GetData= async()=>{
          console.log("psa")
          const response = await fetch(`http://192.168.1.2:7007/api/Basket/Payment`,{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + Cook,
            }
          });
          const data = await response.json();
          setToken(data)
        }
        GetData();
      },[])
      
        const [Basket , SetBasket]=useState();
        const SendPyment= async ()=>{
          console.log(Token.token);
          const res = await fetch(`http://192.168.1.2:7007/api/Basket/SendTokenIPG/${Token.token}`,{
             method: 'POST',
            headers: {'Accept': 'application/json','Content-Type': 'application/json' , 'Authorization': 'Bearer ' + Cook}
          });
          const data = await res.json();
          SetBasket(data)
          if(res.ok){
    navigate("/Dargah", { state: { data } });
          }
          console.log(data)
        }
          

      
  return (
    <div>
        <Navbar/>
        <div dir='rtl' className='w-full h-screen  bg-[#EFEFEF] flex font-KALAMEHBOLD  items-center'>
        <div className='w-full h-full sm:h-fit justify-center items-center flex '>
        {!Cook && 
          <div className='w-[40%] sm:w-[65%] mt-10  h-[70%] '>
            <div className='w-full text-center'>
              <h1 className='font-bold text-2xl '>
              متاسفانه سبد خرید شما خالی است!
              </h1>
            </div>
              <div className='w-full h-[420px] mt-5 rounded-xl'>
                <img src={Banner}  className="w-full h-full" alt="" />
              </div>
              <div className='w-full text-center mt-5'>
              <button onClick={HandellPage} className="bg-violet-700 rounded-xl text-white py-2 w-64  ">ثبت نام و شروع برنامه نویسی</button>
            </div>
                
        </div>
        }
        {
          Cook && 
          <div className='w-[60%] sm:w-[80%] relative mt-14  rounded-2xl  h-fit bg-white'>
            <div className='w-full  rounded-t-xl  h-14 '>
              <h1 className='font-bold absolute mt-4  mr-5 text-xl '>
                سبد خرید
              </h1>
            </div>
              <hr className='bg-black '></hr>
            <div className='w-full h- h-96'>
            {Product.map((item)=>(
              <>
              <div className='w-[90%] mr-4  h-20 mt-5 rounded-xl flex items-center'>
              <div className='w-[85%] flex items-center h-full rounded-xl justify-around bg-gray-500 '>
                <div className='w-24  mr-2 h-14 rounded-xl bg-blue-200'>
                <img className='w-full h-full rounded-xl' src="" alt="" />
                <h1>{item.id}</h1>
                </div>
                <div className='w-24  mr-2 h-14 rounded-xl bg-blue-200'>
                <img />
                </div><div className='w-24  mr-2 h-14 rounded-xl bg-blue-200'>
                <img />
                </div>
                <h1>{` ${separate(item.price)} تومان`}</h1>
              </div>
              <h1></h1>
                <button onClick={()=>Deletuser(item)} className="relative flex justify-center items-center w-16 rounded-lg h-20 bg-red-500 right-14 ">
                  <img src={Remove} alt="" className='w-10 h-10' />
                </button>
              </div>
              </>
            ))}
            </div>
            <>
            <div className='w-[90%] mr-4  h-20 mt-5 mb-10 rounded-xl flex  items-center  '>
            <div className='w-[85%] flex items-center h-full rounded-xl justify-around bg-gray-500 '>
                <div className='w-24 h-14 rounded-xl flex items-center relative left-16'>
                <h1 className='text-xl'>مجموع کل :</h1>
                </div>
                <h1  className='relative right-24'>{` ${separated(Price)} تومان`}</h1>
              </div>
              <h1>{""}</h1>
                <button onClick={SendPyment} className="relative flex justify-center items-center  w-16 rounded-lg h-20 bg-red-700 right-14 ">
                  <img src={Payment} alt="" />
                </button>
                </div>
            </>
        </div>
        }
        </div>
        </div>
        <FooterTop/>
        <Footer/>
    </div>
  )
}

export default Basket