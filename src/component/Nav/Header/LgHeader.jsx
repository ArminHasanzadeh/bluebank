import  { useState } from "react";
import Logo from "../../common/Logo/Logo";
import ButtonBlue from "../../common/ButtonBlue/ButtonBlue";
import DropDown from "./dropdown/DropDown";

function LgHeader() {
  const [open, setOpen] = useState(false);
  const [open_drop_down, setOpen2] = useState(false);

  console.log("open", open);
  console.log("open_drop_down", open_drop_down);
  

  return (
    <header
      className={`w-full h-[10%] flex justify-center items-start transition-all bg-white z-60  border-b-gray-300 border-b-2 shadow-lg   xl:hidden max-lg:visible fixed top-0 left-0  ${
        open ? "h-[50%]" : ""
      } ${open_drop_down ? "h-auto  max-md:h-auto":""}`}
    >
      <div className="w-[50%] h-auto flex justify-start items-start flex-col  max-md:w-[50%] ">
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
            <ul className="w-full h-auto flex-col flex justify-center items-start gap-5 text-xl font-bold max-md:gap-1 ">
              <li  className={` cursor-pointer flex justify-center items-start transition-all flex-col   ${open_drop_down ? "h-[250px] max-md:h-[60vh] w-screen max-md:w-[50vh]":""}`}>
                <p onClick={() => setOpen2(!open_drop_down)}>خدمات</p>
                  <div className={`  w-full h-full flex gap-5  ${open_drop_down ? "visible max-md:flex-col " :"hidden"}`}>
                    <DropDown />
                  </div>
              </li>
              <li className="cursor-pointer">
                <p>وام</p>
              </li>
              <li className="cursor-pointer">
                <p>بازکردن حساب</p>
              </li>
              <li className="cursor-pointer">
                <p>بلو جونیور</p>
              </li>
              <li className="cursor-pointer">
                <p>تماس با ما</p>
              </li>
              <li className="cursor-pointer">
                <p>سوالات متداول</p>
              </li>
              <li className="cursor-pointer">
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
      
      </div>
    </header>
  );
}

export default LgHeader;
