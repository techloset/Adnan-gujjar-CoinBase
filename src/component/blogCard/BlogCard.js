import React from 'react'
import Button from '../button/Button'

function BlogCard({ data }) {
    console.log('data', data);
    return (
        <div className=''>
            <img src={data?.img} alt=' image not found' />
            <div className='rounded-lg border-red-600 border-x-[1px] border-b-[1px]  mb-[3.75rem] px-4 '>
                <div className='w-full max-w-4xl mx-auto pt-[3.75rem] pb-10 '>
                    <h1 className='font-poppins font-bold text-center  text-[2rem] mt-4 mb-7 '>{data?.title}</h1>
                    <div className='flex flex-row justify-center items-center sm:gap-3'>
                        <span className='font-normal font-poppins text-[0.7rem]'>19 JUNE, 2019 </span> <span className='font-normal font-poppins text-[0.7rem] border-l px-2'>{data?.business}</span>
                    </div>
                    <p className='font-normal font-poppins text-base text-center mb-6 mt-8'>{data?.des}</p>
                    <div className='flex justify-center'>
                        <Button text='DISCOVER' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BlogCard