import React from 'react';
import Phone from '../../../../public/blu-image-teaser.png'
import ButtonBlue from '../../../component/common/ButtonBlue/ButtonBlue';
function PhoneBox(props) {
  return (
    <section className='mt-50 mb-20 w-full h-[50vh] flex justify-center items-center max-lg:h-auto'>
       <div className='w-[58%] h-[70%] flex justify-center items-center PhoneBg object-cover rounded-3xl max-lg:flex-col'>
        <div className='w-[50%] h-full flex justify-center items-start  flex-col  gap-6 p-10 max-lg:w-[80%] max-lg:h-auto'>
            <h5 className='text-white text-4xl font-bold '>جای شما در بلو [ ] خالی‌ست</h5>
            <p className='text-white text-[16 px] font-bold '>همین حالا در کمتر از ۷ دقیقه حساب بلو باز کنید.</p>
            <ButtonBlue />
        </div>
        <figure className='w-[50%] h-full flex justify-center items-end  max-lg:w-full '>
              <img className='w-[532px] h-[420px]' src={Phone} alt="" />
        </figure>
       </div>
    </section>
  );
}

export default PhoneBox;