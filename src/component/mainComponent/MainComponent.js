import React from "react";
import { ReactComponent as Wave } from '../../assets/svg-icon/path-4.svg'

function MainComponent(props) {
  return (
    <div className="bg-gradient-to-b from-pink-500 via to-indigo-900 flex flex-col justify-center overflow-hidden lg:px-0">
      <div className=" grid grid-cols-1 lg:grid-cols-2  items-center my-auto">
        <div className="lg:order-first order-last ">{props.children}</div>
        <div className="mb-4 mt-[3.75rem] lg:mr-[5.94rem] mx-6  ">
          <img src={props.img} alt="image not found" />
        </div>
      </div>
      <Wave />
    </div>
  );
}

export default MainComponent;
