import React from 'react'
import tree from '../../assets/tree.webp'


function OurHistory() {
    return (
        <div>
            <div className=" pb-32">
                <h1 className="font-poppins font-bold text-3xl leading-[4rem] bg-gradient-to-b from-[#D664A4] to-[#B856A9]
           text-transparent bg-clip-text text-center">Our history</h1>
                <div className='flex justify-center mb-9 '>
                    <div className='bg-pink-500 w-12 h-2 rounded-lg'>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center ">
                    <div className='flex flex-col w-[50%] sm:w-[34%] text-end gap-5 sm:gap-16 md:gap-56'>
                        <div className=" p-4 ">
                            <h1 className='text-[#ed7fb2] text-[2rem]  font-bold'>May 2010</h1>
                            <p className='font-sans font-normal text-[2rem]'>
                                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit,
                                at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
                        </div>
                        <div className=" p-4 ">
                            <h1 className='text-[#ed7fb2] text-[2rem]  font-bold'>May 2019</h1>
                            <p className=' font-sans font-normal text-[2rem]'>
                                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit,
                                at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
                        </div>
                    </div>
                    <div>
                        <img src={tree} alt="tree" />
                    </div>
                    <div className="w-[50%] sm:w-1/3 p-4">
                        <h1 className='text-[#ed7fb2] text-[2rem]  font-bold'>May 2017</h1>
                        <p className='font-normal font-sans text-[2rem]'>
                            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit,
                            at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
                    </div>
                </div>
                <p className='text-center pt-4 font-poppins font-bold text-xs' >To be continue…</p>
            </div>
        </div>
    )
}

export default OurHistory