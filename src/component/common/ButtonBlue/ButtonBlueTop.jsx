import React from 'react';

function ButtonBlueTop(props) {
    return (
     <div className="w-max h-max  mt-5  flex justify-center items-center  ">
      <button className=" text-center bg-[var(--blueb)]  text-white p-5 rounded-xl font-bold text-[20px] pl-6 pr-6 hover:bg-blue-500 transition-all">
        <p>دانلود اپلیکشن</p>
      </button>
    </div>
    );
}

export default ButtonBlueTop;