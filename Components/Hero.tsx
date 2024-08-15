import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">SHASHWAT !</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            I'm passionate about Web Design and Development, constantly exploring innovative approaches. I actively participate in hackathons to challenge myself and bring creative ideas to life.
            During my Amazon Software Engineer Internship, I gained hands-on experience in building scalable software solutions and enhancing my coding skills in Java, Python, and C++.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
              onClick={() => {
                alert("📄 This is my basic template of resume. This is not the real one.");
                window.open("https://docs.google.com/document/d/1ioGP7AK6lxgKbhJQL3Cnm9vHOFtfsJMMKOcmvN1oaus/edit?usp=sharing", "_blank");
              }}>
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>

            {/* <button className="flex items-center space-x-2">
            <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]"/>
            <p className="text-[20px] font-semibold text-white">Watch The Video</p>
           </button> */}
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image 
          src="/images/u1.jpg" 
          alt="user" 
          layout="fill" 
          className="object-cover rounded-full"
           />
        </div>
      </div>
    </div>
  )
}

export default Hero