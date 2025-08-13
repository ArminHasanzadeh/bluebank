import React from 'react';

function ButtonBlueTop(props) {
    return (
     <div className="w-[200px] h-[60px] p-2  flex justify-center transition-all items-center rounded-xl  text-white bg-[var(--blueb)] hover:bg-blue-500 mt-3">
      <button className="text-center w-full h-full   text-[20px]   ">
        <p>دانلود اپلیکیشن</p>
      </button>
    </div>
    );
}

export default ButtonBlueTop;