import React from 'react'
import TypeWriteEffect from './Helper/TypeWriteEffect'

const Hero = () => {
    return (
        <div className='w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg'>
            <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
                    <div>
                        <h1 className='text-[#c4cfde] mb-[1.3rem]'>WELCOME TO MY WORLD</h1>
                        <div className=''>
                            <h1 className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white'>
                                Hi, I&apos;m <span className='text-yellow-300'>Hung Dev</span>
                            </h1>
                            <TypeWriteEffect />
                            <p className='mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]'>
                                I&apos;m working as a Frontend Developer in Y company with over 1 years experience developing different websites, apps and implementing them — from landing pages to big projects, mostly using ReactJS/Typescript. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
