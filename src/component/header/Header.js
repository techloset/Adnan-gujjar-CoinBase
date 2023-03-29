import React, { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from '../../assets/svg-icon/menu-icon.svg'
import { ReactComponent as Logo } from '../../assets/svg-icon/logo-1.svg'

function Header() {

  const [showTabs, setShowTabs] = useState(true);
  const [open, setOpen] = useState(true);



  function dropDown() {
    setOpen(!open)
  }
  function toggleTabs() {
    setShowTabs(!showTabs);
  }

  return (
    <div>
      <div className="flex justify-between items-center lg:px-24 px-6  h-20 ">
        <div className=" flex items-end gap-2 cursor-pointer">
          <Logo />
          <h1 >CoinBase</h1>
        </div>
        <div className="md:flex items-center w-[75%] justify-between gap-2 hidden">
          <ul className="flex list-none w-[50%] justify-between gap-2">
            <li className="font-bold font-poppins text-sm"><Link to='/'>Home</Link></li>
            <li className="font-bold font-poppins text-sm"><Link to='/about'>About us</Link></li>
            <li className="font-bold font-poppins text-sm"><Link to='/blog'>Blog</Link></li>
            <li className="font-bold font-poppins text-sm"><Link to='/contact'>Contact us</Link></li>
          </ul>
          <div className="flex items-center gap-8">
            <button onClick={dropDown}
              data-dropdown-toggle="dropdownOffset"
              data-dropdown-offset-distance="10" data-dropdown-offset-skidding="100"
              data-dropdown-placement="right" className="text-[#333333] text-[14px]  max-sm:hidden 
            focus:ring-blue-300 font-bold
          text-md  text-center inline-flex items-center 
            "
              type="button"><p className='ml-4'>Sell Bitcoin/ Giftcard</p>
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.82624 5.12603C4.42928 5.70824 3.57076 5.70824 3.17379 5.12603L0.744683 1.56334C0.292087 0.899528 0.76749 0 1.57091 0H6.42912C7.23254 0 7.70795 0.899529 7.25535 1.56334L4.82624 5.12603Z"
                  fill="#333333"
                />
              </svg>
            </button>
            <div id="dropdownOffset" class={`z-10 mt-36 ml-36 border-[1px] border-[#E0E0E0] absolute  opacity-80 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-white-700  ${open ? 'block' : 'hidden'}   `}>
              <ul className=" text-sm  text-black dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                  <a href="#" className="block px-4 py-3 text-[#333333] text-xs ">Sell Bitcoin</a>
                </li>
                <li>
                  <a href="#" className="block pl-4 py-3  font-normal text-sm text-[#FFFFFF] text-[12px] rounded-bl-lg rounded-br-lg  " style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>Sell Giftcard</a>
                </li>

              </ul>
            </div>
            <Button text="LOGIN" />
          </div>
        </div>
        <div onClick={toggleTabs} className='block md:hidden cursor-pointer' >
          <Menu />
        </div>
      </div>
      {showTabs ? (
        <div className="flex items-center w-full justify-center gap-0 md:hidden">
          <ul className="flex flex-col list-none gap-4 pb-3">
            <li className="font-bold font-poppins text-sm text-center"><Link to='/'>Home</Link></li>
            <li className="font-bold font-poppins text-sm text-center"><Link to='/about'>About us</Link></li>
            <li className="font-bold font-poppins text-sm text-center"><Link to='/blog'>Blog</Link></li>
            <li className="font-bold font-poppins text-sm text-center"><Link to='/contact'>Contact us</Link></li>
            <li> <div className="flex items-center gap-2">
              <button onClick={dropDown}
                data-dropdown-toggle="dropdownOffset"
                data-dropdown-offset-distance="10" data-dropdown-offset-skidding="100"
                data-dropdown-placement="right" className="text-[#333333] text-[14px]  max-sm:hidden 
            focus:ring-blue-300 font-bold
          text-md  text-center inline-flex items-center 
            "
                type="button"><p className='ml-4'>Sell Bitcoin/ Giftcard</p>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.82624 5.12603C4.42928 5.70824 3.57076 5.70824 3.17379 5.12603L0.744683 1.56334C0.292087 0.899528 0.76749 0 1.57091 0H6.42912C7.23254 0 7.70795 0.899529 7.25535 1.56334L4.82624 5.12603Z"
                    fill="#333333"
                  />
                </svg>
              </button>
              {/* </div> */}
              <div id="dropdownOffset" class={`z-10 mt-36 ml-36 border-[1px] border-[#E0E0E0] absolute  opacity-80 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-white-700  ${open ? 'block' : 'hidden'}   `}>
                <ul className=" text-sm  text-black dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <a href="#" className="block px-4 py-3 text-[#333333] text-xs ">Sell Bitcoin</a>
                  </li>
                  <li>
                    <a href="#" className="block pl-4 py-3  font-normal text-sm text-[#FFFFFF] text-[12px] rounded-bl-lg rounded-br-lg  " style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>Sell Giftcard</a>
                  </li>

                </ul>
              </div>
            </div></li>
            <li className="flex justify-center w-full"><Button text='LOGIN' /></li>
          </ul>
        </div>
      )
        : null}

    </div>
  );
}

export default Header;