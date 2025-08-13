import React, { useState } from "react";
import Logo from "../../common/Logo/Logo";
import ButtonBlue from "../../common/ButtonBlue/ButtonBlue";

import DropDown from "./dropdown/DropDown";


function XlHeader(props) {
  const [openbox, setOpen] = useState(false);
  return (
    <header className=" flex-col flex justify-center items-center w-full h-[10%] fixed top-0 left-0 z-50 bg-white">
    <section className="w-full h-full flex justify-center items-center border-b-gray-300 border-b-2 relative top-0 left-0  shadow-lg    max-xl:hidden">
        <Logo />
        <div className="w-auto h-full flex justify-center items-center  max-lg:hidden ">
          <ul className="w-full h-full flex justify-center items-center gap-10 text-[16px] font-bold ">
            <li
            onClick={() => setOpen(!openbox)}
              className="relative cursor-pointer h-full flex items-center justify-center 
                 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                 after:bottom-0 after:w-[160%] after:h-1 after:bg-[var(--blueb)] 
                 after:scale-x-0 after:origin-center after:transition-transform 
                 hover:after:scale-x-100 after:z-10 after:rounded-t-2xl"
            >
              <p>خدمات</p>
            </li>
            <li
              className="relative cursor-pointer  h-full flex items-center justify-center 
                 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                 after:bottom-0 after:w-[300%] after:h-1 after:bg-[var(--blueb)] 
                 after:scale-x-0 after:origin-center after:transition-transform 
                 hover:after:scale-x-100 after:z-10 after:rounded-t-2xl"
            >
              <p>وام</p>
            </li>
            <li
              className="relative cursor-pointer  h-full flex items-center justify-center 
                 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                 after:bottom-0 after:w-[160%] after:h-1 after:bg-[var(--blueb)] 
                 after:scale-x-0 after:origin-center after:transition-transform 
                 hover:after:scale-x-100 after:z-10 after:rounded-t-2xl"
            >
              <p>بازکردن حساب</p>
            </li>
            <li
              className="relative  cursor-pointer h-full flex items-center justify-center 
                 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                 after:bottom-0 after:w-[160%] after:h-1 after:bg-[var(--blueb)] 
                 after:scale-x-0 after:origin-center after:transition-transform 
                 hover:after:scale-x-100 after:z-10 after:rounded-t-2xl"
            >
              <p>بلو جونیور</p>
            </li>
            <li
              className="relative cursor-pointer h-full flex items-center justify-center 
                 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                 after:bottom-0 after:w-[160%] after:h-1 after:bg-[var(--blueb)] 
                 after:scale-x-0 after:origin-center after:transition-transform 
                 hover:after:scale-x-100 after:z-10 after:rounded-t-2xl"
            >
              <p>تماس با ما</p>
            </li>
            <li
              className="relative cursor-pointer  h-full flex items-center justify-center 
                 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                 after:bottom-0 after:w-[160%] after:h-1 after:bg-[var(--blueb)] 
                 after:scale-x-0 after:origin-center after:transition-transform 
                 hover:after:scale-x-100 after:z-10 after:rounded-t-2xl"
            >
              <p>سوالات متداول</p>
            </li>
            <li
              className="relative  cursor-pointer h-full flex items-center justify-center 
                 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                 after:bottom-0 after:w-[300%] after:h-1 after:bg-[var(--blueb)] 
                 after:scale-x-0 after:origin-center after:transition-transform 
                 hover:after:scale-x-100 after:z-10 after:rounded-t-2xl"
            >
              <p>بلاگ</p>
            </li>
          </ul>
        </div>
        <div className="w-[25%]">
          <ButtonBlue />
        </div>
      </section>
      <div className={`bg-white transition-all duration-400 z-60 w-[70%] h-[300px] flex justify-start items-center rounded-4xl shadow-2xl border-1 border-gray-300 absolute top-25 gap-4 max-xl:hidden ${openbox ? "translate-y-0" : " -translate-y-150 "} `}>
         <DropDown />  
      </div>
    </header>
  );
}

export default XlHeader;
