import React, { useState } from "react";
import Logo from "../../common/Logo/Logo";
import ButtonBlue from "../../common/ButtonBlue/ButtonBlue";

function LgHeader(props) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`w-full h-[10%] flex justify-center items-start transition-all  border-b-gray-300 border-b-2 shadow-lg  xl:hidden max-lg:visible fixed top-0 left-0  ${
        open ? "h-[50%]" : ""
      }`}
    >
      <div className="w-[50%] h-auto flex justify-start items-start flex-col  max-md:w-[80%]">
        <div onClick={() => setOpen(!open)} className=" w-[100%] h-[20%] p-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="#000000"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </span>
        </div>
        <div>
          <div
            className={`w-full h-[80%] flex-col justify-center items-center pr-8  ${
              open ? "visible" : "hidden"
            } `}
          >
            <ul className="w-full h-auto flex-col flex justify-center items-start gap-5 text-xl font-bold max-md:gap-0">
              <li>
                <p>خدمات</p>
              </li>
              <li>
                <p>وام</p>
              </li>
              <li>
                <p>بازکردن حساب</p>
              </li>
              <li>
                <p>بلو جونیور</p>
              </li>
              <li>
                <p>تماس با ما</p>
              </li>
              <li>
                <p>سوالات متداول</p>
              </li>
              <li>
                <p>بلاگ</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-full flex justify-start items-start flex-col ">
        <div className="w-full h-[20%] flex justify-end items-start">
          <Logo />
        </div>
        <div className={`w-full h-[80%] flex justify-start items-end mr-10 ${open ? "visible" : " hidden"}`}>
          <ButtonBlue />
        </div>
      </div>
    </header>
  );
}

export default LgHeader;
