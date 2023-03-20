import React from "react";

function Button(props) {
  return (
    <div className="px-8 py-4 text-white rounded-full bg-red-500">
      <p>{props.text}</p>
    </div>
  );
}

export default Button;
