import React, { useState } from "react";
import Logo from "../../common/Logo/Logo";
import ButtonBlue from "../../common/ButtonBlue/ButtonBlue";
import "../../../App.css";


function XlHeader(props) {
  const [openbox, setOpen] = useState(false);
  return (
    <header className="flex-col flex justify-center items-center w-full h-auto fixed top-0 left-0  ">
      <section className="w-full h-[10%] flex justify-center items-center border-b-gray-300 border-b-2 fixed top-0 left-0 shadow-lg    max-xl:hidden">
        <Logo />
        <div className="w-auto h-full flex justify-center items-center  max-lg:hidden">
          <ul className="w-full h-full flex justify-center items-center gap-20 text-[16px] font-bold">
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
      <div className={`w-[70%] h-[300px] flex justify-start items-center rounded-4xl shadow-2xl border-1 border-gray-300 absolute top-25 gap-4 ${openbox ? "visible" : " hidden"} `}>
          <div className="w-[25%] h-[85%] border-2 border-red-500 flex mr-5 ">
              <ul className="w-full h-full flex-col flex justify-center items-center gap-3">
                <li className="w-full h-[20%] flex justify-start items-center hover:bg-blue-100 transition-all  gap-2 rounded-2xl HoverBox">
                  <span className="w-[5%]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.27528 2.05806C6.51935 2.30214 6.51935 2.69786 6.27528 2.94194L4.00888 5.20833H14.1667C14.5118 5.20833 14.7917 5.48816 14.7917 5.83333C14.7917 6.17851 14.5118 6.45833 14.1667 6.45833H4.00888L6.27528 8.72472C6.51935 8.9688 6.51935 9.36453 6.27528 9.60861C6.0312 9.85269 5.63547 9.85269 5.39139 9.60861L2.05806 6.27528C1.81398 6.0312 1.81398 5.63547 2.05806 5.39139L5.39139 2.05806C5.63547 1.81398 6.0312 1.81398 6.27528 2.05806Z" fill="#718E9C"></path>
<path d="M13.7247 17.9419C13.4806 17.6979 13.4806 17.3021 13.7247 17.0581L15.9911 14.7917H3.33333C2.98816 14.7917 2.70833 14.5118 2.70833 14.1667C2.70833 13.8215 2.98816 13.5417 3.33333 13.5417H15.9911L13.7247 11.2753C13.4806 11.0312 13.4806 10.6355 13.7247 10.3914C13.9688 10.1473 14.3645 10.1473 14.6086 10.3914L17.9419 13.7247C18.186 13.9688 18.186 14.3645 17.9419 14.6086L14.6086 17.9419C14.3645 18.186 13.9688 18.186 13.7247 17.9419Z" fill="#718E9C"></path>
<path d="M16.6667 5C16.2064 5 15.8333 5.3731 15.8333 5.83333V5.84167C15.8333 6.3019 16.2064 6.675 16.6667 6.675H16.675C17.1352 6.675 17.5083 6.3019 17.5083 5.84167V5.83333C17.5083 5.3731 17.1352 5 16.675 5H16.6667Z" fill="#718E9C"></path>
</svg>
                  </span>
                  <p className="w-[20%]">اتقال وجه</p>
                  <span className="w-[60%] flex justify-end pl-5 west opacity-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--blueb)"><path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z"/></svg>
                  </span>
                </li>
              
               
              </ul>
          </div>
          <div className="w-[25%] h-[80%] border-2 border-red-500">
              <ul>
                <li>
                  
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
          </div>
          <div className="w-[25%] h-[80%] border-2 border-red-500">
              <ul>
                <li>
                  
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
          </div>
          
      </div>
    </header>
  );
}

export default XlHeader;
