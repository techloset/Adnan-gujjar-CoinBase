import React from "react";
import path from "../../assets/path-4.webp";

function MainComponent(props) {
  return (
    <div className="bg-gradient-to-b from-pink-500 via to-indigo-900 flex flex-col justify-center overflow-hidden">
      <div className=" grid grid-cols-1 lg:grid-cols-2  items-center my-auto">
        <div className="lg:order-first order-last ">{props.children}</div>
        <div>
          <img src={props.img} alt="image not found" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,213.3C480,192,600,96,720,85.3C840,75,960,149,1080,192C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default MainComponent;
