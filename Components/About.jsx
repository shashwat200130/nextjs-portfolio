import { ArrowDownTrayIcon, HandThumbUpIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/16/solid'
import React from 'react'

const About = () => {
    return (
        <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">About Me</h1>
                    <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">Transforming <span className="text-yellow-400">Visions</span>
                    </h2>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">I'm passionate about Competitive Coding, Hackathons, and Web Development, with strong skills in C/C++ and Python. I hold a ⭐⭐⭐⭐⭐ (5-star) rating on HackerRank, an Elite badge at HackerEarth, and a Knight badge at LeetCode. I thrive on solving complex problems and bringing innovative ideas to life.</p>
                    </div>
                    <div className="flex space-x-8">
                        <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
                            onClick={() => {
                                window.open("https://www.linkedin.com/in/shashwat-verma-a3951a29b/", "_blank");
                            }}>
                            <p>Linkedin</p>
                            <UserGroupIcon className="w-[1.3rem] h-[1.5rem] text-black" />
                        </button>
                        <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
                            onClick={() => {
                                window.open("https://github.com/shashwat200130", "_blank");
                            }}>
                            <p>Github</p>
                            <UserCircleIcon className="w-[1.3rem] h-[1.5rem] text-black" />
                        </button>
                    </div>

                </div>
                <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                    <img src="images/about.jpg" alt="user" layout="fill" objectFit="contain" className="relative z-[11] w-[100%] h-[100%] object-contain" />
                    <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
                </div>
            </div>
        </div>
    )
}

export default About