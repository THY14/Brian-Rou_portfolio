import React from 'react';

const Qaute = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/public/Brian_rou_resume.pdf'; 
    link.download = 'My_CV.pdf'; // 
    link.click();
  };

  return (
    <div className="h-[500px] w-screen md:w-full -mt-24 flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-[20px] w-[343px] max-w-full xl:text-4xl lg:text-[40px] lg:w-[854px] md:w-[700px] md:text-[30px] font-bold text-center px-4 mb-8 leading-tight font-oswald">
        "ALL I NEED IS ONE OPPORTUNITY TO SHOW YOU WHAT <br className="hidden md:block" /> I CAN DO — LET MY WORK SPEAK FOR ITSELF."
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href='https://forms.gle/qkEHLZ3Leugf3Q8S7' target='seft'>
          <button className="border-2 border-black px-12 py-2 xl:py-4 text-lg hover:bg-[#BAFF29] hover:text-black transition duration-300">
          Hire Me Now
        </button>
        </a>
        <button
          onClick={handleDownload}
          className="border-2 border-black px-12 py-3 text-lg hover:bg-[#BAFF29] hover:text-black transition duration-300"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Qaute;
