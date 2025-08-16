import React from "react";
import Logo from "../../../common/Logo/Logo";

import ButtonBlueBottom from "../../../common/ButtonBlue/ButtonBlueBottom";
import FooterLinks from "./FooterLinks";

function FooterSide1(props) {
  return (
    <section className="w-screen pt-20 h-auto bg-gray-300 flex justify-center items-center flex-col pb-20">
      <div className="w-[60%] h-full flex justify-center items-center ">
        <div className="w-[50%] h-full flex justify-start items-center">
          <Logo />
        </div>
        <div className="w-[50%] h-full flex justify-end items-center ">
          <a href="#Top" className=" w-max h-max flex justify-center items-center rounded-xl" id="#Top">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="55" height="55" rx="7.5" stroke="#4E91E6"></rect>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.707 26.7071C32.3165 27.0976 31.6834 27.0976 31.2928 26.7071L28.9999 24.4142L28.9999 34C28.9999 34.5523 28.5522 35 27.9999 35C27.4477 35 26.9999 34.5523 26.9999 34L26.9999 24.4142L24.707 26.7071C24.3165 27.0976 23.6834 27.0976 23.2928 26.7071C22.9023 26.3166 22.9023 25.6834 23.2928 25.2929L27.2928 21.2929C27.6834 20.9024 28.3165 20.9024 28.707 21.2929L32.707 25.2929C33.0976 25.6834 33.0976 26.3166 32.707 26.7071Z" fill="#4E91E6"></path>
                </svg>
          </a>
        </div>
      </div>
      <div className="w-[80%] h-auto flex justify-center items-center pt-20 max-md:flex-col max-md:w-full ">
        <div className="flex justify-center items-center w-[50%] h-full max-md:w-[80%]">
           <FooterLinks />
        </div>
        <div className="flex justify-center items-center w-[50%] h-full flex-col max-md:w-[80%]">
          <h6 className="text-3xl font-bold text-center" >بلو؛ بانک ولی دوست‌داشتنی</h6>
          <div className="w-[50%] h-full">
               <ButtonBlueBottom />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSide1;
