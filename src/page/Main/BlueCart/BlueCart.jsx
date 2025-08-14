import React, { useState } from "react";
import Blue from "../../../../public/BlueCard_Blue.webm";
import Red from "../../../../public/BleCard_Red.webm";
import Orang from "../../../../public/BlueCard_Orang.webm";
import Black from "../../../../public/BlueCard-Black.webm";
import Card_Blue1 from "../../../../public/card-blue-render-front.png";
import Card_Blue2 from "../../../../public/card-blue-render-back.png";
import Card_Red1 from "../../../../public/card-red-render-front.png";
import Card_Red2 from "../../../../public/card-red-render-back.png";
import Card_Orang1 from "../../../../public/card-rosegold-render-front.png";
import Card_Orang2 from "../../../../public/card-rosegold-render-back.png";
import Card_Black1 from "../../../../public/card-black-render-front.png";
import Card_Black2 from "../../../../public/card-black-render-back.png";
const video = {
  red: {
    video: Red,
    color1: Card_Blue1,
    color2: Card_Blue2,
  },
  blue: {
    video: Blue,
    color1: Card_Red1,
    color2: Card_Red2,
  },
  orang: {
    video: Orang,
    color1: Card_Orang1,
    color2: Card_Orang2,
  },
  black: {
    video: Black,
    color1: Card_Black1,
    color2: Card_Black2,
  },
};
function BlueCart(props) {
  const [videoColor, setVideoColor] = useState({
    video: Blue,
    color1: Card_Blue1,
    color2: Card_Blue2,
  });

  return (
    <section className="w-screen h-auto font-bold text-3xl flex justify-center items-center flex-col gap-5 mb-10">
      <h4 className="w-full h-full text-center">بلو فقط ابی نیست</h4>
      <span className="w-full h-full text-center text-gray-600 text-[20px] mb-15">کارت‌های بلو</span>
      <div className="w-[63%] h-[70vh]   flex justify-center items-center gap-2  max-xl:w-full max-xl:h-auto max-xl:flex-col">
        <div className="w-[60%] h-full  flex justify-center items-center relative top-0 left-0 bg-[var(--bgcolor)] rounded-2xl max-md:w-[95%] max-md:h-[50%] ">
          <figure className="w-[80%] h-[80%]">
            <video
              className=""
              src={videoColor.video}
              autoPlay
              loop
              playsInline
              muted
            />
          </figure>
          <div className="absolute bottom-2  right-3 w-[40px] h-[50%] flex flex-col justify-center items-center gap-3">
            <span
              onClick={() =>
                setVideoColor({
                  video: Red,
                  color1: Card_Red1,
                  color2: Card_Red2,
                })
              }
              className="w-[30px] h-[30px]  rounded-2xl cursor-pointer p-0.5 justify-center items-center flex hover:border-2 hover:border-gray-400 transition-all"
            >
              <span className=" w-full h-full  rounded-2xl cursor-pointer p-3 bg-red-500"></span>
            </span>
            <span
              onClick={() =>
                setVideoColor({
                  video: Blue,
                  color1: Card_Blue1,
                  color2: Card_Blue2,
                })
              }
              className="w-[30px] h-[30px]  rounded-2xl cursor-pointer p-0.5 justify-center items-center flex hover:border-2 hover:border-gray-400 transition-all"
            >
              <span className=" w-full h-full  rounded-2xl cursor-pointer p-3 bg-blue-500"></span>
            </span>
            <span
              onClick={() =>
                setVideoColor({
                  video: Orang,
                  color1: Card_Orang1,
                  color2: Card_Orang2,
                })
              }
             className="w-[30px] h-[30px]  rounded-2xl cursor-pointer p-0.5 justify-center items-center flex hover:border-2 hover:border-gray-400 transition-all"
            >
              <span className=" w-full h-full  rounded-2xl cursor-pointer p-3 bg-orange-500"></span>
            </span>
            <span
              onClick={() =>
                setVideoColor({
                  video: Black,
                  color1: Card_Black1,
                  color2: Card_Black2,
                })
              }
              className="w-[30px] h-[30px]  rounded-2xl cursor-pointer p-0.5 justify-center items-center flex hover:border-2 hover:border-gray-400 transition-all"
            >
              <span className=" w-full h-full  rounded-2xl cursor-pointer p-3 bg-black"></span>
            </span>
          </div>
        </div>
        <div className="w-[40%] h-full   flex-col justify-center items-center flex gap-2 max-xl:w-[62%] max-xl:h-auto max-md:w-[95%] ">
          <div className="w-full h-[49%] rounded-2xl bg-[var(--bgcolor)]">
            <figure>
              <img src={videoColor.color2} alt="" />
            </figure>
          </div>
          <div className="w-full h-[49%] rounded-2xl bg-[var(--bgcolor)]">
            <figure>
              <img src={videoColor.color1} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlueCart;
