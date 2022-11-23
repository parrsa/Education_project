import React from "react";
import Img from "../../ui-site/undraw_personal_notebook_re_d7dc 1.png";
import Telegram from "../../ui-site/Telegram.png"
import Instagram from '../../ui-site/Instagram.png'
import Twitter from "../../ui-site/Twitter Circled.png"
import Whatsapp from "../../ui-site/WhatsApp.png"
import Youtube from "../../ui-site/YouTube.png"
const Footer = () => {
  return (
    <>
      <div className="w-full h-16  sm:h-[70px]  flex justify-center items-center bg-[#9161F8] ">
            <div className="w-12 h-12 m-5 mt-8">
                <a href="#">
                    <img src={Telegram} alt="icon" />
                </a>
            </div>
            <div className="w-12 h-12 m-5 mt-8">
                <a href="#">
                    <img src={Whatsapp} alt="icon" />
                </a>
            </div>
            <div className="w-12 h-12 m-5 mt-8">
                <a href="#">
                    <img src={Youtube} alt="icon" />
                </a>
            </div>
            <div className="w-12 h-12 m-5 mt-8">
                <a href="#">
                    <img src={Twitter} alt="icon" />
                </a>
            </div>
            <div className="w-12 h-12 m-5 mt-8">
                <a href="#">
                    <img src={Instagram} alt="icon" />
                </a>
            </div>
      </div>
    </>
  );
};

export default Footer;
