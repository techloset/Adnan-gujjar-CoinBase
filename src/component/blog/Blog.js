import React from 'react'
import Button from '../button/Button'

function Blog() {
    return (
        <>
            <div className='flex text-center flex-col  justify-center mt-36'>
                <h4 className="font-poppins font-bold text-[1.75rem] leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
   text-transparent bg-clip-text">
                    Our blog
                </h4>
                <div className='flex justify-center mt-[1.10rem]'>
                    <div className='w-10 h-1 rounded-full bg-pink-500'></div>
                </div>
            </div>

            <div className='flex text-center justify-center mt-10'>
                <h4 className="font-poppins text-base font-normal leading-14 mx-6 text-gray-700">
                    Get to know the latest stuff via our blog post.
                </h4>
            </div>

            <div className="  pt-[6rem] flex justify-center items-center xl:mx-[12.9rem] lg:mx-[8rem]8rem mx-12 ">

                <div className=" bg-white-100 z-10  bg-white max-lg:hidden lg:block   border-gray-400 border   sm:pl-14  sm:pt-10 pb-[27px] rounded-xl overflow-hidden ">
                    <div className='flex flex-row  gap-2  text-sm text-gray-500'>
                        <p className='text-[10px] font-normal font-poppins'>01 FEB, 2019</p>
                        <div className='border-l-2 h-5 border-gray-400 border '></div>
                        <p className=' text-[10px] font-normal font-poppins'>TECHNOLOGY</p>
                    </div>
                    <div className='flex flex-col sm:gap-3 '>
                        <h1 className="tracking-normal sm:text-xl  text-gray-400  text-left font-bold  space-x-1 sm:mt-3 sm:mb-3">
                            HOW TO SELL YOUR ITUNES GIFTCARD WITH.</h1>
                        <p className="leading-[18px] text-left text-[10px] font-poppins font-normal text-gray-400">Lorem ipsum dolor sit amet, magna habemus
                            ius ad, qui minimum voluptaria in. Ad mei modus
                            quodsi complectitur, postea...</p>
                        <button className="w-36 h-11  text-white font-poppins bg-gray-500 justify-end font-bold cursor-pointer rounded-full text-sm" >
                            READ MORE</button>
                    </div>
                </div>
                <div className=" transform max-lg:w-[80%] max-sm:w-[300px] scale-125 z-20 bg-white shadow-xl border-fuchsia-800 border px-8 sm:pl-[3.7rem] sm:pr-[3.3rem] pb-10  pt-[2.7rem]  rounded-lg overflow-hidden">
                    <div className='flex flex-row  sm:gap-2 font-norml text-[10px] gap-1 sm:text-sm'>
                        <p className='text-[10px] font-normal font-poppins'>19 JUNE, 2019</p>
                        <div className='border-l-2 h-5 border-black '></div>
                        <p className='text-[10px] font-normal font-poppins'>BUSINESS</p>
                    </div>
                    <div className='w-full max-w-[640px]'>
                        <h1 className="xl:text-xl bg-gradient-to-b from-[#C35B95] to-[#B254AB]
               text-transparent bg-clip-text text-xs sm:text-base  text-left font-bold leading-10 sm:mt-6 mb-[0.9rem]">
                            ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...</h1>
                        <p className=" text-start text-xs text-black mb-[1.4rem] leading-7">Lorem ipsum dolor sit amet, magna habemus
                            ius ad, qui minimum voluptaria in. Ad mei modus
                            quodsi complectitur, postea...</p>
                    </div>
                    <div className='flex justify-start'>
                        <Button text='READ MORE' />
                    </div>
                </div>
                <div className="bg-white-100 max-lg:hidden lg:block  border-gray-400 border  bg-opacity-75 sm:pl-10 pr-16 sm:pt-10 sm:pb-[27px] rounded-xl overflow-hidden text-center ">
                    <div className='flex flex-row   gap-2  text-sm text-gray-500'>
                        <p className='text-[10px] font-normal font-poppins'>01 FDEC, 2019</p>
                        <div className='border-l-2 h-5 border-gray-400 border '></div>
                        <p className='text-[10px] font-normal font-poppins'>LIFESTYLE</p>
                    </div>
                    <div className='flex flex-col  sm:gap-3 '>
                        <h1 className="tracking-normal sm:text-xl text-gray-400  text-left font-bold  space-x-1 sm:mt-3 sm:mb-3">
                            EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</h1>
                        <p className="leading-[18px] text-left text-[10px] font-poppins font-normal text-gray-400">Lorem ipsum dolor sit amet, magna habemus
                            ius ad, qui minimum voluptaria in. Ad mei modus
                            quodsi complectitur, postea...</p>
                        <button className="w-36 h-11  text-white font-poppins bg-gray-500 justify-start font-bold cursor-pointer rounded-full text-sm" >
                            READ MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog