import React from "react";

function ButtonBlueBottom(props) {
  return (
   <div className="w-full h-full mt-5  flex justify-center items-center  ">
      <button className="w-full h-full text-center bg-[var(--blueb)]  text-white p-3 rounded-xl font-bold text-[20px] pl-6 pr-6 hover:bg-blue-500 transition-all">
        <p>دانلود و نصب بلو</p>
      </button>
    </div>
  );
}

export default ButtonBlueBottom;
