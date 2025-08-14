    import React from 'react';
    import ButtonBlue from '../../../component/common/ButtonBlue/ButtonBlue';
    import BluChatCubes from './BluChatCubes';

    function BlueLine(props) {
        return (
            <section className='w-screen h-auto flex justify-center items-center bg-[var(--blueb)] pt-20 pb-20 mb-20'>
                <div className='w-[60%] h-auto flex justify-center items-center max-md:flex-col'>
                    <div className='w-[50%] h-full flex justify-center items-start flex-col text-white gap-5 max-md:w-full'>
                        <span className='text-[14px ] pb-4'>بلو لاین</span>
                        <h6 className='text-3xl'> همیشه به وقت همه‌جا   </h6>
                        <ul className='flex justify-center items-start flex-col w-full h-full text-2xl pr-10 gap-5'>
                            <li className='flex justify-center items-center gap-2'>
                                <span className='w-[20px] h-[20px] bg-white flex justify-center items-center rounded-4xl'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4701 3.52827C14.7305 3.78862 14.7305 4.21073 14.4701 4.47108L6.4701 12.4711C6.20975 12.7314 5.78764 12.7314 5.52729 12.4711L1.52729 8.47108C1.26694 8.21073 1.26694 7.78862 1.52729 7.52827C1.78764 7.26792 2.20975 7.26792 2.4701 7.52827L5.9987 11.0569L13.5273 3.52827C13.7876 3.26792 14.2098 3.26792 14.4701 3.52827Z" fill="#195EB4"></path>
                                    </svg>
                                </span>
                                ۷ روز هفته
                            </li>
                            <li className='flex justify-center items-center gap-2'>
                                <span className='w-[20px] h-[20px] bg-white flex justify-center items-center rounded-4xl'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4701 3.52827C14.7305 3.78862 14.7305 4.21073 14.4701 4.47108L6.4701 12.4711C6.20975 12.7314 5.78764 12.7314 5.52729 12.4711L1.52729 8.47108C1.26694 8.21073 1.26694 7.78862 1.52729 7.52827C1.78764 7.26792 2.20975 7.26792 2.4701 7.52827L5.9987 11.0569L13.5273 3.52827C13.7876 3.26792 14.2098 3.26792 14.4701 3.52827Z" fill="#195EB4"></path>
                                    </svg>
                                </span>
                                ۲۴ ساعت شبانه روز


                            </li>
                            <li className='flex justify-center items-center gap-2'>
                                <span className='w-[20px] h-[20px] bg-white flex justify-center items-center rounded-4xl'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4701 3.52827C14.7305 3.78862 14.7305 4.21073 14.4701 4.47108L6.4701 12.4711C6.20975 12.7314 5.78764 12.7314 5.52729 12.4711L1.52729 8.47108C1.26694 8.21073 1.26694 7.78862 1.52729 7.52827C1.78764 7.26792 2.20975 7.26792 2.4701 7.52827L5.9987 11.0569L13.5273 3.52827C13.7876 3.26792 14.2098 3.26792 14.4701 3.52827Z" fill="#195EB4"></path>
                                    </svg>
                                </span>
                                چت آنلاین و تماس
                            </li>
                        </ul>
                        <ButtonBlue />
                    </div>
                    <div className='w-[50%] h-full BlueUser  flex justify-center items-center max-md:w-full'>
                    <BluChatCubes />
                    </div>
                </div>
            </section>
        );
    }

    export default BlueLine;