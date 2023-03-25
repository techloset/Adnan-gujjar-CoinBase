import React from 'react'
import MainComponent from '../../component/mainComponent/MainComponent'
import services from '../../assets/services.webp'
import layer from '../../assets/layer-2.webp'
import { ReactComponent as Support } from '../../assets/svg-icon/support.svg'
import { ReactComponent as Customer } from '../../assets/svg-icon/customer.svg'
import { ReactComponent as Quality } from '../../assets/svg-icon/Quality.svg'
import { ReactComponent as Medal } from '../../assets/svg-icon/medal.svg'
import OurHistory from '../../component/ourHistory/OurHistory'
import Meet from '../../component/meet/Meet'
import Footer from '../../component/footer/Footer'


function About() {
    return (
        <div >
            <MainComponent img={services}>
                <div className="text-center mx-6 lg:text-start lg:ml-20">
                    <h2 className=' font-poppins font-normal text-xs text-white'>HOME/ABOUT US</h2>

                    <p className="font-normal text-[2.5rem] font-sans text-white">
                        Great service,
                        Professional support
                    </p>
                    <p className="text-lg font-normal font-Poppins  text-white mt-[21px] mb-[1.9rem]">
                        CoinBase is a platform for trading your bitcoin and<br />
                        giftcard at the best rate, why not give us a trial.
                    </p>
                </div>
            </MainComponent>
            <div>
                <p className='font-poppins font-bold text-lg text-center'>“Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec semper leo ut lobortis condimentum. Orci varius natoque penatibus et magnis”</p>
                <div className='flex justify-center items-center'>
                    <div className='bg-gradient-to-b from-pink-500 via to-indigo-900 w-12 h-2 rounded-lg'>
                    </div>
                </div>
                <p className='font-poppins font-normal  text-sm text-center'>Ramon Ridwan • CEO CoinBase</p>
            </div>
            <div className='mx-5'>
                <div className="border-fuchsia-400 w-full max-w-4xl mx-auto  my-10 py-9  px-4 border-2  rounded-3xl">
                    <div className="w-full max-w-lg mx-auto ">
                        <div className='flex justify-center'>
                            <img className=" " src={layer} alt="hero" />
                        </div>
                        <div className="">
                            <h1 className="font-poppins font-bold text-[1.75rem]
                  bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                   text-transparent bg-clip-text text-center">About CoinBase</h1>
                            <div className='flex justify-center mb-9 '>
                                <div className='bg-gradient-to-b from-pink-500 via to-indigo-900 w-12 h-2 rounded-lg'>
                                </div>
                            </div>
                            <p className="mb-9  text-base text-center leading-10">CoinBase is an online site and a p2admin platform that
                                allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
                            </p>
                            <div className='flex justify-center mb-5'>
                                <div className='flex gap-10'>
                                    <Support />
                                    <Quality />
                                    <Medal />
                                    <Customer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurHistory />
            <Meet />
            <Footer/>
        </div>
    )
}

export default About