import React from 'react'
import ourClients from '../../assets/bg-image.webp'
import happy from '../../assets/happy-customer.webp'


const Client = () => {
    return (
        <div>
            <div className='bg-cover bg-no-repeat flex flex-col justify-center items-center h-[1500px]'
                style={{ backgroundImage: `url(${ourClients})` }}>
                <div className=" w-full max-w-xl mx-auto text-white mt-0 md:mt-16 px-6">
                    <h1 class="text-3xl text-center font-medium font-poppins ">10,000 Satisfied clients
                        <br /> around the world</h1>
                    <div className='flex justify-center mt-7'>
                        <div className='bg-pink-500 w-12 h-1 rounded-full'></div>
                    </div>
                    <p className="mt-5 font-poppins font-normal  text-base leading-10 text-center" >Yeah! we’re proud with numbers.
                        We've helped thousands of clients all around the world with our bespoke service.
                        Hover ontop of them pic to view their testimonials.</p>
                </div>
                <div className='w-full max-w-5xl mx-auto px-6 '>
                    <img src={happy} alt="image not found" />
                </div>

            </div>
        </div>
    )
}

export default Client
