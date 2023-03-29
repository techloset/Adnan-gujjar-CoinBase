import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg-icon/logo.svg'
import { ReactComponent as Facebook } from '../../assets/svg-icon/facebook.svg'
import { ReactComponent as Google } from '../../assets/svg-icon/google.svg'
import { ReactComponent as Instagram } from '../../assets/svg-icon/instagram.svg'
import { ReactComponent as Twitter } from '../../assets/svg-icon/twitter.svg'

const Footer = () => {
  return (
    <div className=' bg-gray-900  pb-8'>
    <footer className="text-white body-font bg-gray-900 flex items-center justify-center" >
      <div className="flex flex-1 pt-[4.5rem] flex-wrap max-w-[90rem] lg:px-20  md:px-10  px-5 md:flex-nowrap">
        <div className="">
          <a className="cursor-pointer">
            <Logo />
          </a>
          <div className='w-full  max-w-auto min-w-auto sm:max-w-sm sm:min-w-[320px]  mr-20'>
            <p className="mt-8 text-sm leading-6 text-gray-400"> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue.Fusce vel metus pharetra, fermentum</p>
          </div>
          <div className='flex gap-4 items-center mt-5'>
            <Google />
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
          <p className='font-normal text-sm opacity-40 mix-blend-normal md:block hidden  md:mt-24 mt-10 mb-10 '>© 2019 Designed by Cr8tiv_yemmy</p>
        </div>
        <div className="flex flex-1 gap-16 flex-wrap justify-between">
          <div className="">
            <h2 className="title-font font-medium text-white tracking-widest text-md mb-7">CoinBaseLinks</h2>
            <ul className="list-none mb-10 text-sm ">
              <li>
                <a className="text-gray-300 leading-7 text-sm hover:text-gray-400 cursor-pointer ">Home</a>
              </li>
              <li>
                <a className="text-gray-300 leading-7 text-sm hover:text-gray-400 cursor-pointer">About Us</a>
              </li>
              <li>
                <a className="text-gray-300 leading-7 text-sm hover:text-gray-400 cursor-pointer">Blog</a>
              </li>
              <li>
                <a className="text-gray-300 leading-7 text-sm hover:text-gray-400 cursor-pointer">Sell</a>
              </li>
              <li>
                <a className="text-gray-300 leading-7 text-sm hover:text-gray-400 cursor-pointer">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-7">Contact Us</h2>
            <ul className="list-none mb-10 text-sm sm:flex flex-col">
              <li>
                <a className="text-gray-300 leading-7 text-xs hover:text-gray-400">(+234) 137632128</a>
              </li>
              <li>
                <a className="text-gray-300 leading-7 text-xs hover:text-gray-400">Coinbase@yahoo.com</a>
              </li>
              <li>
                <a className="text-gray-300 leading-7 text-xs hover:text-gray-400">Address goes here</a>
              </li>
              <li className=' mt-12'>
                <a className="text-gray-300   text-xs hover:text-gray-400 cursor-pointer">Download Our App</a>
              </li>
            </ul>
          </div>
          <box className=''>
            <div>
              <h1>CoinBase Instagram</h1>
            </div>
            <div className='grid grid-rows-3 sm:grid-rows-2 grid-flow-col gap-2 mt-6  justify-center'>
              <div className='w-[70px] h-[70px] bg-gray-300 '></div>
              <div className='w-[70px] h-[70px] bg-gray-300 '></div>
              <div className='w-[70px] h-[70px] bg-gray-300 flex items-center justify-center  font-light text-4xl'>+</div>
              <div className='w-[70px] h-[70px] bg-gray-300 '></div>
              <div className='w-[70px] h-[70px] bg-gray-300 '></div>
              <div className='w-[70px] h-[70px] bg-gray-300 '></div>
              <div className='w-[70px] h-[70px] bg-gray-300 '></div>
              <div className='w-[70px] h-[70px] bg-gray-300 '></div>
            </div>
          </box>
        </div>
      </div>
    </footer >
      <p className='font-normal text-sm opacity-40 mix-blend-norma mt-10 text-center text-white'>© 2019 Designed by Cr8tiv_yemmy</p>
</div>
  )
}

export default Footer