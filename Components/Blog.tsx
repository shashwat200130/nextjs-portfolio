import React from 'react'
import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/16/solid';

const Blog = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
            <h1 className="heading">
                Honors  <span className="text-yellow-400">& awards</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
                <div>
                    <div className="w-[100%] relative h-[400px]">
                        <Image
                            src="/images/blog3.jpg" // Path relative to the public directory
                            alt="blog"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                        <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] mt-[3rem] text-black font-semibold text-[17px]    mx-auto">
                            June 10, 2024
                        </div>
                        <div className="mt-[1rem] text-white text-[18px] font-semibold">DTCC Code-A-Thon</div>
                        <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                            <div className="flex items-center space-x-3">
                                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                                <p className="text-white">By DTCC</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="w-[100%] relative h-[400px]">
                            <Image
                                src="/images/blog2.jpg" // Path relative to the public directory
                                alt="blog"
                                layout="fill"
                                className="object-cover"
                            />
                        </div>
                        <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] mt-[3rem] text-black font-semibold text-[17px]    mx-auto">
                                June 25, 2024
                            </div>
                            <div className="mt-[1rem] text-white text-[18px] font-semibold">Adobe GenSolve Hackathon</div>
                            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                                <div className="flex items-center space-x-3">
                                    <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                                    <p className="text-white">By Adobe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="w-[100%] relative h-[400px]">
                            <Image
                                src="/images/blog1.jpg" // Path relative to the public directory
                                alt="blog"
                                layout="fill"
                                className="object-cover"
                            />
                        </div>
                        <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] mt-[3rem] text-black font-semibold text-[17px]    mx-auto">
                                July 25, 2024
                            </div>
                            <div className="mt-[1rem] text-white text-[18px] font-semibold">Code-Clash Hackathon</div>
                            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                                <div className="flex items-center space-x-3">
                                    <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                                    <p className="text-white">By VIT-Vellore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog