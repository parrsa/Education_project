import React from "react";
import Navbar from "../NavBar/navbar";
import Comment from "./Comment";
import Footere from '../Footer/Footer'
const studentcomments = () => {
  return (
    <div className="">
    <div className="w-full  h-screen ">
      <Navbar />
      <div dir="rtl" className="w-full h-full">
        <div className="flex  justify-center ">
          <div className="w-2/5  sm:w-4/5 h-full">
            <div className="w-full mt-24 relative grid grid-cols-1   rounded-3xl outline-none  gap-8">
              <Comment
                name={"پارسا سلیمان نیا"}
                Studente={"دانشجویی رشته جاوااسکریپت و ری اکت"}
                Description={
                "این دوره قطعا یکی از بهترین دوره هایی بود که من تا الان دیده بودم و همه چی داخلش توضیح داده شده و یکی از امکانات خوبی که این دوره داره اینه که پشتیبانی آنلاین داره و میتونیم هر سوالی راجب هر مبحثی رو بپرسیم."
                }
              />
                  <Comment
                name={"کسری اخوان"}
                Studente={"دانشجوی ریکت و گیت"}
                Description={
                "ریکت حرف نداره، صفر تا صد کارو خیلی سلیس و روون توضیح داده. در مورد پشتیبانی هم اینکه هر وقت پیام بدین تو کوتاه ترین زمان ممکن جوابتون رو میده."
                }
              />
              
              <Comment
                name={"سمیرا فرخ نژاد(ساکن استرالیا)"}
                Studente={"دانشجویی رشته جاوااسکریپت و ری اکت"}
                Description={
                  "من سه ماه پیش دوره های ریکت و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد."
                }
              />

<Comment
                name={"سمیرا فرخ نژاد(ساکن استرالیا)"}
                Studente={"دانشجویی رشته جاوااسکریپت و ری اکت"}
                Description={
                  "من سه ماه پیش دوره های ریکت و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد."
                }
              />
    <Footere/>
            </div>
          </div>
        </div>
            {/* <Footere></Footere> */}
      </div>
    </div>
   </div>

  );
};

export default studentcomments;
