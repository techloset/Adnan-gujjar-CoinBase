import React from "react";
import Button from "../../component/button/Button";
import Footer from "../../component/footer/Footer";
import MainComponent from "../../component/mainComponent/MainComponent";
import image from "../../assets/image.webp";
import Header from "../../component/header/Header";

function LandingPage() {
  return (
    <div className="">
      <Header />
      <MainComponent img={image}>
        <div className="text-center mx-6 lg:text-start lg:ml-20">
          <p className="font-normal text-[2.5rem] font-sans text-white">
            We provide easy solution to exchange your{" "}
            <span className="font-bold font-poppins">
              Bitcoin/ GiftCard for money
            </span>
          </p>
          <p className="text-lg font-normal font-Poppins  text-white mt-[21px] mb-[1.9rem]">
            CoinBase is a platform for trading your bitcoin and giftcard at the
            best rate, why not give us a trial.
          </p>
          <div className="flex  justify-center lg:justify-start ">
            <Button text="Get Started" />
          </div>
        </div>
      </MainComponent>
    </div>
  );
}

export default LandingPage;
