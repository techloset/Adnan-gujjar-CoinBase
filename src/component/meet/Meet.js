import React from 'react'
import Button from '../button/Button'

function Meet() {
    return (
        <div className=' pb-[5.75rem]'>
            <h1 className='text-center font-poppins font-bold text-[1.75rem]'>Meet the team</h1>
            <p className='font-normal font-poppins text-base leading-10 text-center mb-[3.75rem] mt-5'>Meet the team that  makes the process of this system fast and <br /> painless as possible to provide you with good result </p>
            <div className=" relative flex flex-wrap :w-1/3 mt-[3.75rem]">
                <div className="h-[185px]  w-[299px] top-[20%] left-[15%]   z-10 bg-[#C4C4C4] shadow-lg  rounded-xl absolute hidden sm:block">
                </div>
                <div className="h-[233px]  w-[299px] top-[10%] left-[28%]  z-10 bg-[#C4C4C4]   shadow-lg    rounded-xl   absolute hidden sm:block">
                </div>
                <div className="h-[185px]  w-[299px] top-[20%] right-[15%]  z-10 bg-[#C4C4C4] shadow-lg  rounded-xl absolute hidden sm:block">
                </div>
                <div className="h-[233px]  w-[299px] right-[28%] top-[10%]  z-10 bg-[#C4C4C4]  shadow-lg   rounded-xl  absolute hidden sm:block">
                </div>
                <div className="flex   w-full justify-center items-center ">

                    <div className="h-[285px]  w-[19rem] z-20 bg-gradient-to-b from-[#f19aca] to-[#987fae]
                   text-transparent  rounded-xl">
                        <div className='flex flex-col justify-end h-full pl-4 pb-6'>
                            <h1 className='text-white'>CEO</h1>
                            <p className='text-white'>Amanda Roth</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center font-bold font-poppins text-[1.75rem] mt-20'>Subscribe our newsletter</h1>
            <div className='flex justify-center items-center mb-9'>
                <div className='bg-gradient-to-b from-pink-500 via to-indigo-900 w-12 h-2 rounded-lg'>
                </div>
            </div>
            <p className='font-normal font-poppins text-base leading-10 text-center mt-9 '>Subscribe to our newsletter for daily/weekly <br />update of our products and services.</p>
            <div className='flex justify-center gap-2 w-full max-w-lg mx-auto mt-6'>
                <input className=' rounded-full border-2 border-red-500 py-4 pl-2 w-full ' type='email' placeholder='email' />
                <div className='flex justify-center'>
                    <Button text='DISCOVER' />
                </div>
            </div>

        </div>
    )
}

export default Meet