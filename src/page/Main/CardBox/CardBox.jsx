import React from "react";
import Bag from "../../../../public/CardBox/blu-img-bag.png";
import Mountain from "../../../../public/CardBox/mountain.png";
import CashBack from "../../../../public/CardBox/blu-img-cashback.png";
import "../../../App.css"

function CardBox(props) {
  return (
    <section className="w-full h-auto flex justify-center items-center flex-col gap-10 mt-30 mb-20">
      <h4 className="text-3xl font-bold w-full h-[5%] text-center">با بلو پس‌انداز کنید</h4>
      <div className="w-[63%] h-[95%] flex-col justify-center items-center flex  gap-3 max-lg:w-[90%] ">
        <div className="w-full h-[50%]  flex justify-center items-center gap-3 max-lg:flex-col max-lg:h-[25%]">
            <div className="w-[50%] flex-col h-full flex justify-center items-center  rounded-3xl bg-[var(--Cardbox-color2)] Hover-Card  max-lg:w-full max-lg:h-full">
                <h6 className="text-3xl h-auto p-3  mt-10 font-bold w-full flex justify-start items-center  ">سود تو بیگ باکسه</h6>
                <p className="text-[20px] w-full h-auto text-justify p-5"> با ساخت حساب بلند مدت در اپلیکیشن بلو برای سرمایه‌گذاری در ۳ ماه ۱۲ درصد، ۶ ماه ۱۷ درصد و برای ۱۲ ماه تا ۲۰/۵ درصد سود دریافت کنید.</p>
               <div className=" flex w-full h-[50%] justify-center items-center max-lg:flex-col">
                <div className="Mountain-Button flex justify-start items-end p-5 w-[50%] h-full  max-lg:w-full  ">
                    <button className="transition-all w-[19%] h-[50px]  rounded-4xl flex justify-center items-center bg-white relative top-0 left-0  max-lg:h-[40px] ">
                        <p className="transition-all text-[16px] flex justify-center absolute top-0 right-0 items-center  opacity-0 w-[70%] h-full text-white  ">
                            مشاهده بیشتر
                        </p>
                        <span className="w-[50%] h-full flex justify-center items-center">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="transition-all" fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 8C6.9987 7.44772 7.44641 7 7.9987 7L21.332 7C21.8843 7 22.332 7.44772 22.332 8C22.332 8.55228 21.8843 9 21.332 9L10.4129 9L26.0391 24.6262C26.4297 25.0167 26.4297 25.6499 26.0391 26.0404C25.6486 26.431 25.0154 26.431 24.6249 26.0404L8.9987 10.4142L8.9987 21.3333C8.9987 21.8856 8.55098 22.3333 7.9987 22.3333C7.44641 22.3333 6.9987 21.8856 6.9987 21.3333L6.9987 8Z" fill="#307FE2"></path>
                            </svg>
                        </span>
                    </button>
                </div>
                 <figure className="w-[50%] h-full Mountain-Img  flex transition-all justify-end items-center max-lg:w-full  ">
                    <img className="w-[240px] h-[240px]" src={Mountain} alt="" />
                </figure>
               </div>
            </div>
            <div className="w-[50%] flex-col h-[60%] p-4 flex justify-center items-center  rounded-3xl bg-[var(--Cardbox-color)] Hover-Card max-lg:w-full">
                <h6 className="text-3xl h-auto p-3  mt-10 font-bold w-full flex justify-start items-center  ">لذت برگشت پول</h6>
                <p className="text-[20px] w-full h-auto text-justify p-5"> با خرید روزانه از فروشگاه‌های طرف قرارداد یا درصدی از خرید را تخفیف می‌گیرید یا درصدی از مبلغ به حساب شما برمی‌گردد.</p>
               <div className=" flex w-full h-[60%] justify-end items-center ">
                 <figure className="w-[50%] h-full Mountain-Img  flex transition-all justify-end items-center  ">
                    <img className="w-[240px] h-[240px]" src={CashBack} alt="" />
                </figure>
               </div>
            </div> 
        </div>
        <div className="w-full h-auto  flex justify-center items-center rounded-3xl bg-[var(--Cardbox-color3)] Hover-Card max-lg:flex-col ">
           <div className="w-[50%] h-full flex justify-center items-center flex-col max-lg:w-full ">
            <div className="w-full h-[50%] flex justify-start items-center flex-col">
                <h6 className="text-3xl h-auto p-3  mt-10 font-bold w-full flex justify-start items-center  ">وام، ولی دست یافتنی</h6>
                <p className="text-[20px] w-full h-auto text-justify p-5">بدون ضامن و وثیقه در کمتر از ۷ دقیقه وام سریع و آسان بلو را دریافت کنید. با میانگین حساب خود در ۳ ماه متوالی می‌توانید از ۳ تا ۴۰ میلیون وام بگیرید. </p>
            </div>
             <div className="Mountain-Button flex justify-start items-end p-5 w-full h-[50%] max-lg:h-auto   ">
                    <button className="transition-all w-[10%] h-[50px]  rounded-4xl flex justify-center items-center bg-white relative top-0 left-0  max-lg:h-[40px] ">
                        <p className="transition-all text-[16px] flex justify-center absolute top-0 right-0 items-center  opacity-0 w-[70%] h-full text-white  ">
                            مشاهده بیشتر
                        </p>
                        <span className="w-[50%] h-full flex justify-center items-center">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="transition-all" fill-rule="evenodd" clip-rule="evenodd" d="M6.9987 8C6.9987 7.44772 7.44641 7 7.9987 7L21.332 7C21.8843 7 22.332 7.44772 22.332 8C22.332 8.55228 21.8843 9 21.332 9L10.4129 9L26.0391 24.6262C26.4297 25.0167 26.4297 25.6499 26.0391 26.0404C25.6486 26.431 25.0154 26.431 24.6249 26.0404L8.9987 10.4142L8.9987 21.3333C8.9987 21.8856 8.55098 22.3333 7.9987 22.3333C7.44641 22.3333 6.9987 21.8856 6.9987 21.3333L6.9987 8Z" fill="#307FE2"></path>
                            </svg>
                        </span>
                    </button>
                </div>
           </div>
            <div className=" flex w-[50%] h-full justify-end items-center max-lg:w-full ">
                 <figure className="w-full h-full Mountain-Img  flex transition-all justify-end items-center  ">
                    <img className="w-[400px] h-[400px]" src={Bag} alt="" />
                </figure>
            </div>
        </div>
      </div>
    </section>
  );
}

export default CardBox;
