import React from "react";
import ButtonBlueTop from "../../../component/common/ButtonBlue/ButtonBlueTop";
import ButtonBlueTr from "../../../component/common/ButtonBlue/ButtonBlueTr";

function TopMain(props) {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 h-[50vh] mb-20 bg-gradient-to-br  w-full blur-3xl from-[rgba(0,102,204,0.32)] to-[#6a0dad4d] relative top-50    "></div>
      <section className="w-screen flex justify-center items-center text-7xl font-bold pt-20 flex-col  max-md:text-4xl transition-all ">
        <div className=" absolute top-60 flex justify-center items-center flex-col gap-3 w-full z-30 ">
          <h1>
            <mark className="text-[var(--blueb)] bg-transparent"> بلو،</mark>{" "}
            بانک{" "}
          </h1>
          <h2>ولی دوست داشتنی </h2>
          <h3 className="pt-10 text-[16px] text-gray-600 w-[25%] text-center max-md:w-[100%] max-lg:w-[50%] lg:w-[75%] xl:w-[25%]">
            بلو،بانکی تمام دیجیتال است که همه عملیات بانکی کاملا آنلاین و با
            اپلیکیشن بلو انجام می‌شود.
          </h3>
          <ButtonBlueTop />
          <ButtonBlueTr />
        </div>
      </section>
    </>
  );
}

export default TopMain;
