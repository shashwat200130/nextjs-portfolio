import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">My <span className="text-yellow-400">Services</span></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] cursor-pointer">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Frontend</h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">Frontend development crafts the user-facing part of websites and applications. Technologies like HTML, CSS, and JavaScript build the foundation. MERN is a popular tech stack (MongoDB, Express.js, React, Node.js) for full-stack development, where React excels in creating interactive and dynamic user interfaces. Interactive web pages engage users through elements like forms, buttons, animations, and real-time updates.</p>
          </div>
        </div>
        <div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] cursor-pointer">
              <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Backend</h1>
              <p className="text-[15px] text-[#d3d2d2] font-normal">Backend in web design and development refers to the server-side of an application, where the logic, database interactions, and server operations occur. The backend is responsible for managing user authentication, server requests, API integrations, and database management. Technologies like Node.js, Express.js, MongoDB, and SQL are commonly used in backend development. Effective backend design ensures that the web application is secure, scalable, and efficient.</p>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-left" data-aos-delay="500">
            <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] cursor-pointer">
              <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Fullstack</h1>
              <p className="text-[15px] text-[#d3d2d2] font-normal">Full Stack Development involves working on both the frontend and backend of a web application, providing a comprehensive approach to building websites or web apps. A Full Stack Developer is proficient in frontend technologies like HTML, CSS, JavaScript, and frameworks like React.js or Angular, enabling them to create responsive and interactive user interfaces. On the backend, they work with server-side languages like Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services