import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

const AboutMe = () => {
    return (
        <div className='mt-[-4rem] bg-black pb-[3rem]'>
            <div className='w-[80%] pt-[5rem] sm:pt-[7rem] mx-auto grid items-center 
            grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
                <div>
                    <p className='heading__mini'>About Me</p>
                    <h1 className='heading__primary'> 
                        Professional <span className='text-yellow-400'> Website </span> for your business
                    </h1>
                    <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
                        My short term goal is that I want to be a part of a Backend team, to build a platform that can show my skills and grow my career. I am always enthusiastic to grow myself along with the organization.
                    </p>
                    <div className='mt-[2rem] space-y-3'>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
                            <p className='text-[18px] text-white'>Frontend Devlopment</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
                            <p className='text-[18px] text-white'>Backend Devlopment</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
                            <p className='text-[18px] text-white'>Web Devlopment</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
                            <p className='text-[18px] text-white'>Mern Devlopment</p>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]'>
                        <div 
                            data-aos="zoom-in" 
                            data-aos-anchor-placcement="top-center"
                            className='p-6 text-center bg-yellow-500'
                        >
                            <p className='text-[50px] text-black font-bold'>2</p>
                            <p className='text-[20px] text-black font-600'>Years experience</p>
                        </div>
                        <div 
                            data-aos="zoom-in" 
                            data-aos-anchor-placcement="top-center"
                            data-aos-delay="200"
                            className='p-6 text-center bg-yellow-500'
                        >
                            <p className='text-[50px] text-black font-bold'>200+</p>
                            <p className='text-[20px] text-black font-600'>Happy Client</p>
                        </div>
                        <div 
                            data-aos="zoom-in" 
                            data-aos-anchor-placcement="top-center"
                            data-aos-delay="400"
                            className='p-6 text-center bg-yellow-500'
                        >
                            <p className='text-[50px] text-black font-bold'>300+</p>
                            <p className='text-[20px] text-black font-600'>Project Done</p>
                        </div>
                        <div 
                            data-aos="zoom-in" 
                            data-aos-anchor-placcement="top-center"
                            data-aos-delay="600"
                            className='p-6 text-center bg-yellow-500'
                        >
                            <p className='text-[50px] text-black font-bold'>3+</p>
                            <p className='text-[20px] text-black font-600'>Award Win</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
