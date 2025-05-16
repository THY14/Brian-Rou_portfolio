import React from 'react';
import photo1 from "../assets/Images/img2.jpg";
import photo2 from "../assets/Images/img3.jpg";
import photo3 from "../assets/Images/img4.jpg";
import photo4 from "../assets/Images/img5.jpg";

const Aboutme = () => {
  return (
    <div className=" min-h-screen w-full md:w-100vw  flex flex-col items-center justify-center p-4  mt-12  md:-mt-12 md:p-0 pb-16 xl:mt-34 ">
      {/* Container - Column on mobile, Row on tablet/desktop */}
      <div className="flex flex-col md:flex-row w-full bg-white">
        {/* Left Column: Images and Decorative Elements */}
        <div className="w-full  md:w-[55%]  flex flex-col items-center justify-center relative">
          <div className="w-full md:w-[632px] relative">
            {/* Decorative Heading - Hidden on mobile */}
            <div className=" block md:flex md:flex-col pr-[25%]  lg:pr-[14%] lg:-mt-5 mt-4 xl:mt-8 xl:pr-[22%] ">
              <h2 className="text-[25px] -mr-[35%] md:mr-[-5.5%] lg:mr-[-1%]  md:text-[33px] lg:text-[35px] xl:text-[50px]   font-semibold font-jost tracking-wider md:tracking-[1px] text-[#8E8E8E] text-end xl:mr-[-36%] xl:tracking-[10px]">MORE</h2>
              <h2 className="text-[25px] -mr-[35%] md:mr-[-5.5%] lg:mr-[-1%] -mt-2 md:-mt-3  md:text-[33px] lg:text-[35px] xl:text-[50px] xl:mt-1 font-semibold font-jost tracking-wider xl:tracking-[10px]  md:tracking-[1px] text-[#8E8E8E] text-end xl:mr-[-36%]">ABOUT ME</h2>
            </div>
            
            {/* Decorative Dots - Visible on all screen sizes with responsive positioning */}
            <div className="absolute top-14 left-[8%] md:left-[25%] md:top-[8%] lg:left-[15%] bottom-[-25%] xl:top-[14%] xl:left-[13%] md:bottom-[-40%] lg:top-[4.5%] flex flex-row space-x-2">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
            </div>
            
            <div className="absolute -left-1 top-[75%] md:left-[18%] md:top-[50%]  bottom-[-60%] md:bottom-[-90%] lg:left-[9%] xl:left-[-0.6%] xl:top-[65.5%] flex flex-col space-y-2">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
            </div>
            
            <div className="absolute  -bottom-1 right-[15%] md:right-[30%] md:top-[65%]  md:bottom-[-100%] lg:right-[30%] lg:top-[60%] flex flex-row space-x-2 xl:right-[16%] xl:top-[83.4%]">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
            </div>
          
            {/* Image Gallery - Same positioning across all devices, just scaled sizes */}
            <div className=" md:ml-12 lg:-mt-4  relative h-[343px] sm:h-[650px] md:h-[745px] lg:h-[800px] w-full">
              <img
                src={photo1}
                alt="pic1"
                className="absolute -top-2 -left-1 md:left-[10%]  w-[34%] lg:w-[169px] h-[192px]  md:w-[169px] md:h-[252px] lg:h-[252px] lg:left-[1%]  lg:top-1  xl:-top-2 xl:left-[-8%] sm:h-[310px] xl:w-[239px] xl:h-[355px] object-cover z-30"
              />
              <img
                src={photo4}
                alt="pic4"
                className="absolute  left-25 top-6 w-[33%] h-[187px] md:top-[3%] md:left-[28%] lg:left-[23%] lg:top-[6%]   md:w-[130px] lg:w-[140px] lg:h-[245px]  xl:left-[21%]   md:h-[330px]  object-cover z-20 xl:w-[198px] xl:h-[345px]"
              />
              <img
                src={photo3}
                alt="pic3"
                className="absolute  -bottom-1 left-6 md:left-[15%] md:top-[34%] lg:left-[8%]  lg:-mt-2  w-[45%]   md:w-[204px] md:h-[204px] lg:w-[204px] h-[156px] lg:h-[204px]  xl:left-[1%] xl:top-[45.5%] object-cover z-30 xl:w-[288px] xl:h-[288px]"
              />
              <img
                src={photo2}
                alt="pic2"
                className=" absolute bottom-9 -right-1 md:left-[41%]  md:top-[2%]   mx-w-79 w-1/2 h-[290px]  md:w-[190px] lg:w-[240px] lg:h-[377px]   md:h-[377px] lg:left-[41%] lg:top-[5%]  xl:left-[47%] object-cover z-0 xl:w-[316px] xl:h-[531px]"
              />
            </div>
          </div>
        </div>
        
        {/* Divider - Only visible on tablet and desktop */}
        <div className="hidden md:flex md:pl-2 items-end  md:items-end md:pb-70 lg:pb-82  xl:-ml-12 -ml-24 md:-ml-8 -mb-4 xl:absolute xl:left-[55%] xl:top-[162%]">
          <div className="w-1.5 h-[400px]  md:h-[370px] lg:h-[64%] xl:h-[500px] bg-[#D2D2D2] rounded-full "></div>
        </div>
        
        {/* Text Content for tablet and desktop (side by side) */}
        <div className="hidden md:flex w-full md:pl-6 md:leading-[<6px>] md:h-[531px]  md:w-[45%] p-4 md:p-2 flex-col justify-evenly space-y-2 md:space-y-2 lg:space-y-4 mt-6 md:mt-13 lg:mt-4 xl:mt-[7.4%] xl:-ml-4">
          <h1 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[50px] font-semibold text-gray-800 font-jost">This Is Brian</h1>
          <h3 className="text-base md:text-[14px] lg:text-[15px] xl:text-[20px] text-gray-600">
            Study At Cambodia Academy Of Digital Technology (CADT)
          </h3>
          <div className="mt-2 md:mt-2 lg:mt-6 text-base  md:text-[14px] md:w-[100%] xl:w-[84%] lg:text-[15px] xl:text-[20px] font-jost text-gray-700">
            <p>
              At CADT, I pursued a Bachelor's degree in Digital Business with a specialization in E-Commerce. I chose this major because I've always enjoyed creating things related to the digital world, especially art and design. In my second year, I discovered my true passion—thankful to a supportive teacher who guided me and helped bring out my best work, showing me what I'm truly good at.
            </p>
          </div>
          <div className="mt-2 md:mt-2 lg:mt-4 text-base md:text-[14px] md:w-[100%] lg:text-[15px] xl:w-[85%] font-jost text-gray-700 xl:text-[20px]">
            <p>
              Interestingly, UX/UI design wasn't something I considered at first. But once I was introduced to it, everything changed. I didn't even know it existed before joining CADT. What once seemed like an unfamiliar path has now become my dream career, and I've grown to be really good at it.
            </p>
          </div>
          <div className="mt-2 md:mt-2 lg:mt-4 text-base md:text-[13px] md:w-[100%] lg:text-[15px] xl:w-[85%] font-jost text-gray-700 xl:text-[20px]">
            <p>
              Fun Fact: I speak fluent Figma! While others swear by Photoshop, I feel most at home designing in Figma—it's my digital playground.
            </p>
          </div>
          <p className="mt-4 md:mt-2 lg:mt-2 text-base md:text-[13px] lg:text-[15px] font-semibold text-[#BCBCBC] font-jost xl:text-[20px]">I DON'T GET LUCKY, I MADE MY OWN LUCK!</p>
        </div>
      </div>

      {/* Text Content for mobile only (below images) */}
      <div className="block md:hidden w-full p-4  space-y-4 mt-6 ">
        <h1 className="text-3xl font-semibold text-gray-800 font-jost text-start -ml-5">This Is Brian</h1>
        <h3 className="text-[12px] text-gray-600 text-start -ml-[4%]">
          Study At Cambodia Academy Of Digital Technology (CADT)
        </h3>
        <div className="mt-2 text-[12px] font-jost text-gray-700 -ml-[4%]">
          <p>
            At CADT, I pursued a Bachelor's degree in Digital Business with a specialization in E-Commerce. I chose this major because I've always enjoyed creating things related to the digital world, especially art and design. In my second year, I discovered my true passion—thankful to a supportive teacher who guided me and helped bring out my best work, showing me what I'm truly good at.
          </p>
        </div>
        <div className="mt-0 text-[12px] font-jost text-gray-700 -ml-[4%]">
          <p>
            Interestingly, UX/UI design wasn't something I considered at first. But once I was introduced to it, everything changed. I didn't even know it existed before joining CADT. What once seemed like an unfamiliar path has now become my dream career, and I've grown to be really good at it.
          </p>
        </div>
        <div className="mt-0  text-[12px] font-jost text-gray-700 -ml-[4%]">
          <p>
            Fun Fact: I speak fluent Figma! While others swear by Photoshop, I feel most at home designing in Figma—it's my digital playground.
          </p>
        </div>
        <p className="mt-0  text-[12px]   font-semibold text-[#BCBCBC] font-jost text-stats -ml-[4%]">I DON'T GET LUCKY, I MADE MY OWN LUCK!</p>
      </div>
    </div>
  );
};

export default Aboutme;