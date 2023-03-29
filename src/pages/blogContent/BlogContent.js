import React from 'react'
import img from '../../assets/bg-img.webp'
import { ReactComponent as Wave } from '../../assets/svg-icon/wave1.svg'
import Button from '../../component/button/Button'
import bitcoin from '../../assets/reference-img.webp'
import { ReactComponent as Facebook } from '../../assets/svg-icon/fb-icon.svg'
import { ReactComponent as Twitter } from '../../assets/svg-icon/tw-icon.svg'
import { ReactComponent as Youtube } from '../../assets/svg-icon/yt-icon.svg'



function BlogContent() {
    return (
        <div className='pb-[3.1rem]'>
            <div className=' bg-cover h-[800px] flex flex-col justify-end '
                style={{ backgroundImage: `url(${img})` }}>
                <div className=''>
                    <h1 className='text-white text-center leading-10 w-full max-w-2xl mx-auto px-6 font-poppins font-bold sm:text-[2rem] text-2xl'>HOW TO SELL YOUR ITUNES GIFTCARD WITH US</h1>
                    <div className='flex flex-row justify-center items-center sm:gap-3 mt-[1.100rem] text-white'>
                        <span className='font-normal font-poppins text-[0.7rem] pr-2'>19 JUNE, 2019 </span> <span className='font-normal font-poppins text-[0.7rem] border-l px-2'>BUSINESS</span>
                    </div>
                </div>

                <div className='mt-48'>
                    <Wave />
                </div>
            </div>
            <div className='mx-6'>
                <div className='w-full max-w-3xl mx-auto text-[#333333] space-y-12'>
                    <p className='font-poppins font-normal text-base'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>

                    <p className='font-poppins font-normal text-base'>xPlanning Your Luxury Trip </p>

                    <p className='font-poppins font-normal text-base'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>

                    <p className='font-poppins font-normal text-base'>The next part of planning is to determine your starting and ending ports. This could be a place close to home and sail in one area or start and finish at two different ports. Generally, starting and stopping in the same port will save you money and is usually more convenient. You can also fly to a destination far from home and then sail another exotic sea. There are luxury yacht charter companies that cruise the Caribbean and Mediterranean seas or around Alaska, the Panama Canal, or anyplace you can imagine.</p>
                    <p className='font-poppins font-normal text-base'>Determining the type of cruise is another aspect of planning a chartered yachting trip. You can have as little or many crew members as the ship will hold. A captain takes all the worries out of navigating and onboard housekeeping services make it a real vacation that rivals the finest hotel services. You can also choose to have a chef and service crew as part of your vacation package.</p>
                    <div className='flex gap-14 mt-[3.75rem] flex-wrap md:flex-nowrap'>
                        <div className='w-full max-w-auto md:max-w-sm '>
                            <p className='font-poppins font-normal text-base mb-12'> If you like the idea of knowing what it is really like to sail, but don’t want to risk safety, you can charter a sailing cruise that puts you in the role of deck hand. A competent crew will direct you as to your “chores” for keeping the ship in top shape and on course.</p>
                            <p className='font-poppins font-normal text-base '>Destinations & Ports of important Charter Companies  One of the greatest benefits of choosing a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and that can be affected by weather. However, you are flexible in deciding how long you want to stay in a particular port and if you want to add or subtract stops along the way.</p>
                        </div>
                        <div className=''>
                            <img className='h-full' src={bitcoin} alt='img' />
                        </div>
                    </div>
                    <div>
                        <p className='text-base font-normal font-poppins mb-12'>Your yacht is your hotel that travels with you. There is only one flight and one hotel to book! Then you take all of your luggage and unpack it just once to enjoy several days of new destinations.</p>
                        <p className='text-base font-normal font-poppins'>If you have never experienced cruising before, a chartered experience is a great way to get your feet wet. It is different from cruise lines with thousands of guests because the people on your ship will be your friends and family. The personal touches of a chartered trip will help you develop your love for the sea with all the best benefits of commercial cruises.</p>
                    </div>
                    <div className=' sm:flex-nowrap flex items-center sm:justify-between justify-center flex-wrap '>
                        <div>
                            <h1 className='font-bold font-poppins italic text-base '>Tags: Business, Capital, Finance</h1>
                            <p className='font-bold font-poppins text-lg mt-[4.25rem] mb-[1.2rem] '>How to sell your iTunes <br /> giftcard with us</p>
                        </div>
                        <div className=''>
                            <div className='flex gap-5 items-center'>
                                <p>Share with</p>
                                <Facebook />
                                <Twitter />
                                <Youtube />
                            </div>
                            <p className='font-bold text-lg font-poppins mt-[4.25rem] text-[#FD749B] sm:text-end text-start'>Exchange 5 products </p>
                            <p className=' font-bold text-lg font-poppins  text-[#281AC8] sm:text-end text-start mb-[1.2rem]'>and get 1 free product</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-normal font-poppins text-xs  text-[#989898]'>prev post</p>
                        <p className='font-normal font-poppins text-xs text-[#989898] text-end'>Next Post</p>
                    </div>

                    <h1 className=' font-poppins font-bold text-2xl'>Leave A Comment</h1>
                    <p className='text-base font-normal font-poppins'>Your email address will not be published. Required fields are marked *</p>

                    <div class="flex gap-[2.30rem] flex-wrap  sm:flex-nowrap mt-12 mb-[1.90rem]">
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
                        class="border-2 border-[#D1D1D1] pt-5 pl-5  w-full "
                        id="w3review"
                        name="w3review"
                        rows="8"
                    >
                        Your Comment
                    </textarea>
                    <div className=" flex justify-start mt-[3.1rem]">
                        <Button text="PUBLISHD" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogContent