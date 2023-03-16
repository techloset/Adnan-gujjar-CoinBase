import React from "react";
import path from "../../assets/path-4.webp";

function MainComponent(props) {
  return (
    <div className="bg-gradient-to-b  from-pink-500 via to-indigo-900 flex flex-col justify-center overflow-hidden">
      <div className=" grid grid-cols-1 lg:grid-cols-2  items-center my-auto">
        <div className="lg:order-first order-last ">{props.children}</div>
        <div>
          <img src={props.img} alt="image not found" />
        </div>
      </div>
      <img src={path} alt="shap" className="-mb-8" />
    </div>
  );
}

export default MainComponent;
