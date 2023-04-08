import React from 'react'
import wave from '../../assets/svg-icon/wave-4.svg'
import device from '../../assets/device.webp'
import device1 from '../../assets/device-2.webp'
import Button from '../button/Button'




function OurApp() {
    return (
        <div>
            <div className='bg-gradient-to-b from-pink-500 via to-indigo-900 relative h-[600px] w-[100%]'>
                <img className="w-full" src={wave} alt='wave' />
                <div className='sm:w-60 sm:h-[50%] xl:top-[44%] top-[40%] h-[50%] w-[30%] right-[52%]  absolute'>
                    <img src={device} alt="Image 1" />
                </div>
                <div className='sm:w-60 sm:h-[50%] xl:top-[44%] top-[40%]  h-[50%] w-[30%] left-[52%] absolute'>
                    <img src={device1} alt="Image 1" />
                </div>
            </div>
            <div className="flex justify-center  items-center"  >
                <div className="flex flex-col justify-evenly items-center text-center  max-w-7xl  pt-10 sm:pt-[10rem]  xl:pt-[16rem] sm:pb-20 sm:px-10 px-6">
                    <h1 className="font-poppins font-bold sm:text-[1.75rem] text-lg
                          leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                          text-transparent bg-clip-text">Subscribe our newsletter
                    </h1>
                    <div className='flex justify-center mt-7'>
                        <div className='bg-red-500 w-12 h-1 rounded-md'></div>
                    </div>
                    <p className="mt-4 text-base md:w-[60%] font-normal text-black  leading-10">Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                    <div className="sm:flex sm:flex-row gap-4 w-full sm:justify-center mt-11 sm:items-center flex flex-col justify-center items-center mb-6 sm:mb-0">
                        <input type="text" id="hero-field" placeholder='EMAIL' name="hero-field" class="sm:w-[60%] w-[90%] h-14 text-black bg-gray-100 bg-opacity-50 rounded-full  focus:bg-transparent border border-fuchsia-800    outline-none font-normal text-sm py-1 px-3 transition-colors duration-200 ease-in-out" />
                        <Button text='DISCOVER' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurApp