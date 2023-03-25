import React from "react";

function Button(props) {
  return (
    <div className="px-8 py-4 text-white rounded-full"
    style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}
    >
      <p>{props.text}</p>
    </div>
  );
}

export default Button;
