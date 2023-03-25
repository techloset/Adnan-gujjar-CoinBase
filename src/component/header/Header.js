import React, { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from '../../assets/svg-icon/menu-icon.svg'
import { ReactComponent as Logo } from '../../assets/svg-icon/logo-1.svg'

function Header() {

  const [showTabs, setShowTabs] = useState(true);


  function toggleTabs() {
    setShowTabs(!showTabs);
  }

  return (
    <div>

      <div className="flex justify-between items-center lg:px-24 px-6  h-20 ">
        <div className=" flex items-end gap-2">
          <Logo />
          <h1>CoinBase</h1>
        </div>
        <div className="md:flex items-center w-[70%] justify-between gap-2 hidden">
          <ul className="flex list-none w-[50%] justify-between gap-2">
            <li className="font-bold font-poppins text-sm"><Link to='/'>Home</Link></li>
            <li className="font-bold font-poppins text-sm"><Link to='/about'>About us</Link></li>
            <li className="font-bold font-poppins text-sm"><Link to='/blog'>Blog</Link></li>
            <li className="font-bold font-poppins text-sm"><Link to='/contact'>Contact us</Link></li>
          </ul>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <p className="font-bold font-poppins text-sm">Sell Bitcoin/ Giftcard</p>
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
          <ul className="flex flex-col list-none gap-4">
            <li className="font-bold font-poppins text-sm text-center"><Link to='/'>Home</Link></li>
            <li className="font-bold font-poppins text-sm text-center"><Link to='/about'>About us</Link></li>
            <li className="font-bold font-poppins text-sm text-center"><Link to='/blog'>Blog</Link></li>
            <li className="font-bold font-poppins text-sm text-center"><Link to='/contact'>Contact us</Link></li>
            <li> <div className="flex items-center gap-2">
              <p className="font-bold font-poppins text-sm">Sell Bitcoin/ Giftcard</p>
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
            </div></li>
          </ul>
        </div>
      )
        : null}

    </div>
  );
}

export default Header;