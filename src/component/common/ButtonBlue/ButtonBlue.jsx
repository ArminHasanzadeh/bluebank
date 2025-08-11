import React from "react";

function ButtonBlue(props) {
  return (
    <div className="w-auto h-auto p-3  flex justify-center items-center ">
      <button className="text-center border-2 border-[var(--blueb)] text-[var(--blueb)] p-3 rounded-xl font-bold text-[16px] pl-6 pr-6 hover:bg-blue-100 transition-all">
        <p>دانلود و نصب بلو</p>
      </button>
    </div>
  );
}

export default ButtonBlue;
