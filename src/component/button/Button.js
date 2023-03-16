import React from "react";

function Button(props) {
  return (
    <div className="px-8 py-4 rounded-full bg-white">
      <p>{props.text}</p>
    </div>
  );
}

export default Button;
