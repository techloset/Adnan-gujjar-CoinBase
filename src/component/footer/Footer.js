import React from "react";
import logo from "../../assets/group.webp";

function Footer() {
  return (
    <div className="bg-[#151515] text-[white]">
      <div className="flex">
      <div>
        <img src={logo} alt="image not found" />
        <h1>CoinBase</h1>
        <p className="">
          Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
          rhoncus augue. Fusce vel metus pharetra, fermentum
        </p>
      </div>
      <div>
        CoinBase Links
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Sell</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h1>Contact Us</h1>
        <ul>
          <li>(+234) 137632128</li>
          <li>Coinbase@yahoo.com</li>
          <li>Address goes here</li>
          <li></li>
          <li>Download Our App</li>
        </ul>
      </div>
      <div>
        <h1>CoinBase Instagram</h1>
      </div>
      </div>

    </div>
  );
}

export default Footer;
