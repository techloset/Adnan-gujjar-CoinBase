import React from "react";
import shape from "../../assets/path-1.png";
import shape2 from "../../assets/path-2.png";
import { ReactComponent as Eth } from '../../assets/svg-icon/eth.svg';
import { ReactComponent as Building } from '../../assets/svg-icon/bank-building.svg';
import { ReactComponent as Bitcoin } from '../../assets/svg-icon/bitcoin.svg';
import { ReactComponent as Transfer } from '../../assets/svg-icon/transfer.svg';
import { ReactComponent as Transfer1 } from '../../assets/svg-icon/transfer-2.svg';





function States() {
  return (
    <>
      <div className="bg-gradient-to-b  from-pink-500 via to-indigo-900 flex flex-col justify-center overflow-hidden">
        <img className="-mt-9" src={shape} alt="shap" />
        <div className="w-full max-w-5xl mx-auto mt-10 mb-[3.25rem] px-5">
          <div className='shadow-xl scroll scroll rounded-[30px] overflow-y-auto pb-10  bg-white '>
            <div className='flex justify-around border-b-2 items-center text-transparent  bg-gradient-to-b from-[#FD749B] to-[#B254AB] bg-clip-text'>
              <p className='font-bold font-poppins text-lg leading-[3.75rem]'>OUR RATES</p>
              <p className='font-bold font-poppins text-lg leading-[3.75rem]'>OUR RESERVES</p>
              <p className='font-bold font-poppins text-lg leading-[3.75rem]'>LATEST EXCHANGES</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-evenly gap-12 items-center  '>

              <div className='flex flex-col'>
                <div className='flex gap-7 mt-6' >
                  <p className='flex items-center justify-center gap-3 h-fit'>
                    <Bitcoin />
                    BTC
                  </p>
                  <div>
                    <p>We Buy @ <b>  ₦350/$ </b></p>
                    <p className='pt-4'>We Sell <b>@ ₦370/$ </b></p>
                  </div>
                </div>
                <div className='flex gap-7'>
                  <p className='flex items-center justify-center gap-3'>
                    <Eth />  ETH
                  </p>
                
                  <div>
                    <p>We Buy @ <b>  ₦350/$ </b></p>
                    <p className='pt-4'>We Sell <b>@ ₦370/$ </b></p>
                  </div>
                </div>
              </div>
              <div className=' lg:mt-6'>
                <div className='flex  gap-10 w-full '>
                  <div className='flex items-center justify-center gap-2 h-fit '>
                    <Building />
                    Bank Transfer
                  </div> <p>NGN</p>  </div>
                <p className=' text-end mb-7 mt-[0.60rem]'> <b>#3452030300303.24/$ </b> </p>
                <div className='flex gap-10'>
                  <div
                    className='flex items-center justify-center gap-2 '        >
                    <Bitcoin />
                    <p>Bitcoin</p>
                  </div>
                  <p><b>399.98</b> BTC</p>
                </div>
                <div className='flex gap-10 mt-9 '>
                  <div
                    className='flex items-center justify-center gap-4'>
                    <Eth />
                    <p> Ethereum</p>
                  </div>
                  <p><b>1000.00</b> ETH</p>
                </div>
              </div>
              <div className='flex flex-col'>
                <button className='self-center w-[80px] h-[20px] px-1 mt-3 text-xs text-white rounded-md bg-gradient-to-br from-pink-500 to-indigo-900'>8 hours ago</button>
                <div className='flex flex-col'>
                  <p className='flex items-center gap-1 justify-start h-fit text-[14px]' >
                    <p>Bitcoin BTC</p>
                    <Transfer />
                    <p>Bank</p>
                  </p>
                  <p>
                    Transfer NGN</p>
                </div>
                <div className="border-b-2">
                  <div className='flex items-center justify-start gap-2  mt-8 mb-[1.87rem]'>
                    <p className='whitespace-nowrap'><b>1.16</b> BTC</p>
                    <Transfer1 />
                    <p className='lg:whitespace-nowrap' ><b>696152299929.23</b>
                      NGN</p>
                  </div>
                </div>
                <div className='flex items-center gap-1 mt-[1.25rem]'>
                  <p className="font-normal font-poppins text-sm">Amazon Card</p> <Transfer /> <p className="font-normal font-poppins text-sm">Bank </p>
                </div>
                <p>Transfer NGN</p>

              </div>
            </div>
          </div>
        </div>
        <img src={shape2} alt="shap" />

      </div>
    </>
  );
}

export default States;
