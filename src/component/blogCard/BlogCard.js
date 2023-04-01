import React from 'react'
import Button from '../button/Button'

function BlogCard({ data }) {
    return (
        <div className=''>
            <img src={data?.img} alt=' image not found' />
            <div className=' rounded-b-2xl border-pink-500 border-x-[1px] border-b-[1px]  mb-[3.75rem] px-4 '>
                <div className='w-full max-w-4xl mx-auto pt-[3.75rem] pb-10 '>
                    <h1 className='font-poppins font-bold text-center  text-[2rem] mt-5 mb-[0.95rem] bg-gradient-to-b from-[#C35B95] to-[#B254AB]
                          text-transparent bg-clip-text '>{data?.title}</h1>
                    <div className='flex flex-row justify-center items-center sm:gap-3'>
                        <span className='font-normal font-poppins text-[0.7rem]'>19 JUNE, 2019 </span> <span className='font-normal font-poppins text-[0.7rem] border-l px-2'>{data?.business}</span>
                    </div>
                    <p className='font-normal font-poppins text-base text-center mb-[0.71rem] mt-[1.82rem] leading-7'>{data?.des}</p>
                    <div className='flex justify-center'>
                        <Button text='DISCOVER' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard