import React from 'react'
import SkillCard from './Helper/SkillCard'

const Skills = () => {
        return (
            <div className='pt-[5rem] pb-[3rem] bg-black'>
                <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center'>
                    <div className='col-span-3'>
                        <p className='heading__mini'>My Skills</p>
                        <h1 className='heading__primary'>
                            Let&apos;s Explor Popular <span className='text-yellow-300'>Skills</span>{" "}
                            & Experience
                        </h1>
                        <p className='text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]'>
                            Further, I can use English with 4 skills, Microsoft Office and Internet tool influently. Besides,I can work single and team work as well as overtime if I am required. I am honest, inquisitive and always do my best in job.
                        </p>
                        <button className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all 
                                before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:easy-out
                                hover:before:h-56 hover:before:w-56'>
                                    <span className='relative z-10'>Learn More</span>
                        </button>
                    </div>
                    <div className='col-span-4'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center'>
                            <div>
                                <SkillCard 
                                    title="React" 
                                    image="/images/react.svg"
                                    percent="90%"
                                />
                            </div>
                            <div>
                                <SkillCard 
                                    title="CSS" 
                                    image="/images/css.svg"
                                    percent="97%"
                                />
                            </div>
                            <div>
                                <SkillCard 
                                    title="JavaScript" 
                                    image="/images/js.svg"
                                    percent="77%"
                                />
                            </div>
                            <div>
                                <SkillCard 
                                    title="Typescript" 
                                    image="/images/ts.svg"
                                    percent="67%"
                                />
                            </div>
                            <div>
                                <SkillCard 
                                    title="HTML" 
                                    image="/images/html.svg"
                                    percent="82%"
                                />
                            </div>
                            <div>
                                <SkillCard 
                                    title="NodeJS" 
                                    image="/images/node.svg"
                                    percent="77%"
                                />
                            </div>
                            <div>
                                <SkillCard 
                                    title="MongoDB" 
                                    image="/images/mongo.svg"
                                    percent="65%"
                                />
                            </div>
                            <div>
                                <SkillCard 
                                    title="Python" 
                                    image="/images/python.svg"
                                    percent="55%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Skills
