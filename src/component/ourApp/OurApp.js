import React from 'react'
import google from '../../assets/google-app.webp'
import store from '../../assets/app-store.webp'
import bg from '../../assets/bg-image2.png'
import device from '../../assets/device.webp'
import device1 from '../../assets/device-2.webp'
import Button from '../button/Button'




function OurApp() {
    return (
        <div>

            <div className=' relative h-[700px] xl:h-screen w-[100%] bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    {/* <h1 className="font-poppins font-bold text-2xl 
                           leading-14 bg-gradient-to-b from-[#D463A4] to-[#BB58A9]
                          text-transparent bg-clip-text text-center">Download our app</h1>
                    <div className='flex justify-center mt-7'>
                        <div className='bg-pink-500 w-12 h-1 rounded-full'></div>
                    </div> */}
                    <p className=" text-base font-poppins  text-center font-normal tracking-wide leading-10">Discover exclusive deals and discounts with<br />
                        our mobile experience.</p>
                    <div className='flex gap-[0.6rem] flex-wrap mt-6 justify-center'>
                        <img src={store} alt="Store" />
                        <img src={google} alt="google" />
                    </div>
                </div>
                <div className='sm:w-60 sm:h-[30%] top-[20rem] h-[50%] w-[30%] right-[52%]  absolute'>
                    <img src={device} alt="Image 1" />
                </div>
                <div className='sm:w-60 sm:h-[30%] top-[20rem] h-[50%] w-[30%] left-[52%] absolute'>
                    <img src={device1} alt="Image 1" />
                </div>
            </div>
            <div className="flex justify-center  items-center   bg-no-repeat  bg-cover h-[50%] md:bg-center"  >
                <div className="flex flex-col justify-center items-center text-center  max-w-7xl pt-10 sm:pt-56 sm:pb-20 sm:px-10 px-6">
                    <h1 className="font-poppins font-bold text-[1.7rem]
                          leading-14 bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                          text-transparent bg-clip-text">Subscribe our newsletter
                    </h1>
                    <div className='flex justify-center mt-7'>
                        <div className='bg-red-500 w-12 h-1 rounded-md'></div>
                    </div>
                    <p className="mt-4 text-base md:w-[60%] font-normal text-black  leading-10">Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                    <div className="sm:flex sm:flex-row gap-4 w-full sm:justify-center mt-11 sm:items-center flex flex-col justify-center items-center">
                        <input type="text" id="hero-field" placeholder='EMAIL' name="hero-field" class="sm:w-[60%] w-[90%] h-14 text-black bg-gray-100 bg-opacity-50 rounded-full  focus:bg-transparent border border-fuchsia-800    outline-none font-normal text-sm py-1 px-3 transition-colors duration-200 ease-in-out" />
                        <Button text='DISCOVER' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurApp