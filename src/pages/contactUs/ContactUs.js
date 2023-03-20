// import React from "react";
// import MainComponent from "../../component/mainComponent/MainComponent";
// import Button from "../../component/button/Button";
// import Footer from "../../component/footer/Footer";
// import Header from "../../component/header/Header";
import React from "react";
import Header from "../../component/header/Header";
import img from "../../assets/suport.webp";
import MainComponent from "../../component/mainComponent/MainComponent";
import Button from "../../component/button/Button";
import call from "../../assets/svg-icon/phone-call.svg";
import mail from "../../assets/svg-icon/email.svg";
import pin from "../../assets/svg-icon/pin.svg";
import map from "../../assets/map.webp";

function ContactUs() {
  return (
    <div>
      <Header />
      <MainComponent img={img}>
        <div className="text-center mx-6 lg:text-start lg:ml-20">
          <p className="font-normal text-[2.5rem] font-sans text-white">
            24/7 Customer support Including weekends.
          </p>
          <p className="text-lg font-normal font-Poppins  text-white mt-[21px] mb-[1.9rem]">
            We’re always there ti help regardless the number of queries at hand.
          </p>
        </div>
      </MainComponent>
      <div>
        <p className="font-normal font-poppins text-lg text-center">
          Please note that all message will be replied within the next 12hours
        </p>
        <div className="w-full max-w-xl mx-auto">
          <div class="flex gap-[2.30rem] mt-12 mb-[1.90rem]">
            <input
              class="border-2 p-5 w-full  border-[#D1D1D1]"
              type="text"
              placeholder="Name *"
            />
            <input
              class="border-2 p-5 w-full border-[#D1D1D1]"
              type="email"
              placeholder="Email *"
            />
          </div>
          <textarea
            class="border-2 border-[#D1D1D1] pl-5 w-full pt-5"
            id="w3review"
            name="w3review"
            rows="8"
          >
            Your Comment
          </textarea>
          <div className=" flex justify-start mt-[3.1rem] mb-[5.85rem]">
            <Button text="PUBLISHD" />
          </div>
        </div>
        <div className="" style={{ backgroundImage: `url(${map})` }}>
          <div className="w-full max-w-xs">
            <div>
              <img src={pin} alt="" />
              <p>13 Sawyer Crescent Victoria Island Lagos Nigeria</p>
            </div>
            <div>
              <img src={call} alt="" />
              <p>(+234) 137632128 </p>
            </div>
            <div>
              <img src={mail} alt="" />
              <p>support@coinbase.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
