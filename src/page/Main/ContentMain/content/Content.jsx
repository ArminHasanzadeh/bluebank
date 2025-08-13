import React from "react";
import Bank from "../../../../../public/card-image-bank.png";
import Roket from "../../../../../public/card-image-rocket.png";
import Safety from "../../../../../public/card-image-safety.png";
import ButtonBlueTop from "../../../../component/common/ButtonBlue/ButtonBlueTop";
import ButtonBlueTr2 from "../../../../component/common/ButtonBlue/ButtonBlueTr2";

const ContentItems = [
  {
    id: 1,
    img: (
      <figure className="w-[50%] h-full flex justify-center items-center max-md:h-[80%] max-md:w-full">
        <img className=" w-[80%] h-full" src={Roket} alt="" />
      </figure>
    ),
    text: (
      <div className="w-[50%]h-auto flex justify-center items-start flex-col max-md:w-full max-md:h-[30%]">
        <p className="text-3xl font-bold">سریع</p>
        <p className="text-xl">
          انجام تمام کارهای بانکی مثل بازکردن حساب، گرفتن وام و... در کمتر از ۷
          دقیقه
        </p>
      </div>
    ),
  },
  {
    id: 2,
    img: (
      <figure className="w-[60%] h-full flex justify-center items-center max-md:w-full max-md:h-[80%]">
        <img className=" w-[80%] h-full max-md:w-full" src={Bank} alt="" />
      </figure>
    ),
    text: (
      <div className="w-[50%] h-auto flex  flex-col justify-center items-start max-md:w-full max-md:h-[30%]">
        <p className="text-3xl font-bold ">آسان</p>
        <p className="text-xl ">
          اانجام تمام کارهای بانکی به صورت آنلاین فقط از طریق اپلیکیشن بلو
        </p>
      </div>
    ),
  },
  {
    id: 3,
    img: (
      <figure className="w-[60%] h-full flex justify-center items-center max-md:w-full max-md:h-[80%]">
        <img className=" w-[80%] h-full" src={Safety} alt="" />
      </figure>
    ),
    text: (
      <div className="w-[50%] h-auto flex justify-center items-start flex-col max-md:w-full max-md:h-[30%]">
        <p className="text-3xl font-bold">امن</p>
        <p className="text-xl">
          اکوتاه شدن دست کلاه‌برداران مجازی و حقیقی از سرمایه‌ی شما با استفاده
          از سرویس‌های باکس پس‌انداز و مسدود سازی کارت و....
        </p>
        <ButtonBlueTr2 />
      </div>
    ),
  },
];

function Content() {
  return (
    <section className="w-[80%] h-auto flex justify-center items-center max-md:w-screen ">
      <ul className="w-full h-auto flex justify-center items-center flex-col md:visible max-md:hidden ">
        {ContentItems.map((val) => (
          <li
            key={val.id}
            className="w-full h-[50%] flex justify-center  items-center p-4 rounded max-md:flex-col "
          >
            {val.id === 2 ? (
              <>
                {val.text}
                {val.img}
              </>
            ) : (
              <>
                {val.img}
                {val.text}
              </>
            )}
          </li>
        ))}
      </ul>
      <ul className="w-full h-auto flex justify-center items-center flex-col max-md:visible md:hidden">
        {ContentItems.map((val) => (
          <li
            key={val.id}
            className="w-full h-[50%] flex justify-center  items-center p-4 rounded max-md:flex-col "
          >
            {val.text}
            {val.img}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Content;
