import React from 'react';
import pic1 from "../assets/Carweb/Home page.png";
import pic2 from "../assets/Carweb/Cars page.png";
import pic3 from "../assets/Carweb/Car Details page.png";
import pic4 from "../assets/Carweb/Classic car page.png";
import pic5 from "../assets/Carweb/Collection page.png";

const Project = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center px-2 md:px-0 mt-16 md:mt-[15%]  '>
        <h1 className='text-2xl md:text-3xl lg:text-[40px] font-jost font-medium text-center'> MY SCHOOL PROJECTS</h1>
        <p className='font-normal text-base md:text-lg lg:text-[20px] -mt-1 md:-mt-2 text-center'>Might Be Similar To Yours...</p>
      </div>
      
      {/* Desktop and Tablet Layout (md and above) */}
      <div className="hidden  md:grid  md:w-full md:pl-4 md:pr-4  lg:w-full lg:pl-6 lg:pr-6 grid-cols-12 grid-rows-10 gap-2 h-[500px] md:h-[460px] lg:h-[650px] xl:h-[800px] mt-8 xl:w-full xl:pl-22 xl:pr-22 ">
        <div className="col-span-6 row-span-10 bg-blue-300 flex items-center justify-center">
          <img src={pic1} alt="Home page" className="w-full h-full object-cover object-top-left shadow-2xl" />
        </div>

        <div className="col-start-7 col-span-3 row-span-5 bg-green-300 flex items-center justify-center">
          <img src={pic2} alt="Cars page" className="w-full h-full object-cover object-top shadow-2xl" />
        </div>

        <div className="col-start-10 col-span-3 row-span-5 bg-red-300 flex items-center justify-center">
          <img src={pic3} alt="Car Details page" className="w-full h-full object-cover object-top shadow-2xl" />
        </div>

        <div className="col-start-7 col-span-3 row-start-6 row-span-5 bg-yellow-300 flex items-center justify-center">
          <img src={pic4} alt="Classic car page" className="w-full h-full object-cover object-top shadow-2xl" />
        </div>

        <div className="col-start-10 col-span-3 row-start-6 row-span-5 bg-purple-300 flex items-center justify-center">
          <img src={pic5} alt="Collection page" className="w-full h-full object-cover object-top shadow-2xl" />
        </div>
      </div>
      
      {/* Mobile Layout (sm and below) - optimized for under 400px screens */}
      <div className="md:hidden w-screen   flex flex-col gap-1 mt-4 pl-4 pr-4 ">
        {/* Main image takes full width */}
        <div className="w-full h-44 sm:h-56 bg-blue-300 flex items-center justify-center">
          <img src={pic1} alt="Home page" className="w-full h-full object-cover object-top-left shadow-2xl" />
        </div>
        
        {/* Two-column grid for remaining images */}
        <div className="grid grid-cols-2 gap-1">
          <div className="h-32 sm:h-40 bg-green-300 flex items-center justify-center">
            <img src={pic2} alt="Cars page" className="w-full h-full object-cover object-top shadow-2xl" />
          </div>
          
          <div className="h-32 sm:h-40 bg-red-300 flex items-center justify-center">
            <img src={pic3} alt="Car Details page" className="w-full h-full object-cover  object-top shadow-lg" />
          </div>
          
          <div className="h-32 sm:h-40 bg-yellow-300 flex items-center justify-center">
            <img src={pic4} alt="Classic car page" className="w-full h-full object-cover object-top shadow-lg" />
          </div>
          
          <div className="h-32 sm:h-40 bg-purple-300 flex items-center justify-center">
            <img src={pic5} alt="Collection page" className="w-full h-full object-cover object-top shadow-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;