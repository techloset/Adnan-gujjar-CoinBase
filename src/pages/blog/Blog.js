import React from 'react'
import MainComponent from '../../component/mainComponent/MainComponent'
import image from '../../assets/image-2.webp'
import { data } from '../../constant/Constant'
import BlogCard from '../../component/blogCard/BlogCard'
import Footer from '../../component/footer/Footer'

function Blog() {
    console.log('data', data);

    return (
        <div className=''>
            <MainComponent img={image}>
                <div className="text-center mx-6 lg:text-start lg:ml-20">
                    <h2 className=' font-poppins font-normal text-xs text-white'>HOME/BLOG</h2>

                    <p className="font-normal text-[2.5rem] font-sans text-white">
                        Stay updated,
                        Never miss a post.
                    </p>
                    <p className="text-lg font-normal font-Poppins  text-white mt-[21px] mb-[1.9rem]">
                        Get to know the latest stuff about our services
                        via our blog post.
                    </p>
                </div>
            </MainComponent>
            <div className='px-5'>
                <div className='w-full max-w-5xl mx-auto'>
                    {
                        data.map((items) => {
                            return <BlogCard data={items} />
                        })
                    }
                </div>
                <div className='flex flex-row justify-center items-center gap-3 py-14 h-full'>
                    <button className='rounded-full text-lg  w-14 h-14' style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>01</button>
                    <button className='rounded-full w-14 h-14 text-lg bg-white shadow-lg border border-gray-300'>02</button>
                    <button className='rounded-full w-14 h-14 text-lg bg-white shadow-lg border border-gray-300'>03</button>
                    <button className='rounded-full w-14 h-14 text-lg bg-white shadow-lg border border-gray-300'>-</button>
                    <button className='rounded-full w-24 h-14 text-lg bg-white shadow-lg border border-gray-300'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Blog