import React from "react";
import shape from "../../assets/path-1.png";
import shape2 from "../../assets/path-2.png";



function States() {
  return (
    <div className="bg-gradient-to-b  from-pink-500 via to-indigo-900 flex flex-col justify-center overflow-hidden">
      <img className="-mt-9" src={shape} alt="shap"/>
      <img src={shape2} alt="shap"/>

    </div>
  );
}

export default States;
