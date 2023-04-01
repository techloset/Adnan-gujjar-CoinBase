import React from "react";
import neie from "../../assets/neie.webp";
import Button from "../button/Button";

function Experience() {
  return (
    <div className="block md:flex  lg:block  justify-center items-center">
      <div className="grid grid-col-1  gap-14 items-center lg:grid-cols-2  max-w-2xl lg:max-w-4xl xl-max-w-none ml-10 mr-10 xl:ml-[13.6rem] xl:mr-[10.7rem]">
        <div>
          <h1 className="font-bold text-[1.75rem] font-poppins text-pink-500">
            Great experience
          </h1>
          <h1 className="font-bold text-[1.75rem] font-poppins text-purple-500">with CoinBase</h1>
          <div className="bg-pink-500 mt-[1.15rem]  w-10 mt h-1 rounded-full"></div>
          <p className="font-normal font-poppins text-base leading-10 my-9">
            CoinBase is an online site and a p2admin platform that allows users
            to buy, sell and/ or exchange digital and fiat assets safely. Owned
            and managed by CoinBase Business Services established and
            Incoperated in Nigeria.
          </p>
          <div className="flex justify-start">
            <Button text="DISCOVER" />
          </div>
        </div>
        <div>
          <img src={neie} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
