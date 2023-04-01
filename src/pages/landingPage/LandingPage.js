import React from "react";
import Button from "../../component/button/Button";
import Footer from "../../component/footer/Footer";
import MainComponent from "../../component/mainComponent/MainComponent";
import image from "../../assets/image.webp";
import Header from "../../component/header/Header";
import CoinBase from "../../component/coinBase/CoinBase";
import Experience from "../../component/experience/Experience";
import States from "../../component/states/States";
import Client from "../../component/client/Client";
import OurApp from "../../component/ourApp/OurApp";
import Blog from "../../component/blog/Blog";
import Trad from "../../component/trad/Trad";

function LandingPage() {
  return (
    <div className="">
      <MainComponent img={image}>
        <div className="text-center mx-6 lg:text-start lg:ml-[8rem] xl:ml-[11.4rem]">
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
          <div className="flex  justify-center lg:justify-start mb-10 ">
            <div className="px-8 py-4 bg-white rounded-full"><p>Get Started</p></div>
          </div>
        </div>
      </MainComponent>
      <CoinBase />
      <States />
      <Experience />
      <Trad />
      <Blog />
      <Client />
      <OurApp />
    </div>
  );
}

export default LandingPage;
