import React from 'react'

const Skill = () => {
  return (
    <div className='h-full  flex items-center flex-col justify-start p-2 relative -mt-6  md:-mt-[45%] lg:-mt-90 xl:mt-8 '>
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-8 mt-10 md:mt-16">
        <h1 className='text-[20px] md:text-3xl lg:text-[40px]  font-medium -mt-4 font-jost text-center  md:ml-0'>I TELL THE STORY OF THE TIME</h1>
        <p className='font-normal text-[10px] md:text-lg lg:text-xl mt-1  md:ml-0'>Share Your Business And Project Goals — You Can Count On Me!</p>
      </div>

      {/* Top Dots Navigation */}
      <div className="hidden md:flex flex-row space-x-2 absolute right-4 md:right-7  lg:right-6 lg:top-45 top-10 md:top-42  xl:top-44 xl:right-23 xxl:hidden">
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
      </div>

      {/* Cards Section */}
      <div className='w-screen md:w-full gap-4 xl:gap-0  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  md:gap-5 mt-8  pl-4 pr-4 md:pl-[2%] xl:pl-22 xl:pr-20  '>
        {/* Website Design Card */}
        <div className=' h-[420px]  md:w-[234px] md:h-[300px] lg:w-[312px] lg:h-[375px] xl:w-[440px] xl:h-[500px]  md:p-0  bg-[#F3F3F3] flex flex-col items-center justify-center p-6 xl:justify-center  '>
          <div className='mb-4 -ml-57 xl:-ml-50 lg:-ml-50 md:pl-16  xl:pr-33 '>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_100_345)">
                <path d="M45 35.6248V7.49976C45 6.00791 44.4074 4.57717 43.3525 3.52228C42.2976 2.46739 40.8668 1.87476 39.375 1.87476H5.62498C4.13314 1.87476 2.7024 2.46739 1.64751 3.52228C0.592617 4.57717 -1.52588e-05 6.00791 -1.52588e-05 7.49976L-1.52588e-05 35.6248H20.625V39.3748H11.25V43.1248H33.75V39.3748H24.375V35.6248H45ZM5.62498 5.62476H39.375C39.8723 5.62476 40.3492 5.8223 40.7008 6.17393C41.0524 6.52556 41.25 7.00247 41.25 7.49976V24.3748H3.74998V7.49976C3.74998 7.00247 3.94753 6.52556 4.29916 6.17393C4.65079 5.8223 5.1277 5.62476 5.62498 5.62476ZM3.74998 28.1248H41.25V31.8748H3.74998V28.1248Z" fill="#1E1E1E"/>
              </g>
              <defs>
                <clipPath id="clip0_100_345">
                  <rect width="45" height="45" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className='text-xl md:text-[16px] md:pl-4 lg:text-[25px] lg:-ml-8 xl:text-[30px] xl:pr-14 font-bold font-jost text-center mb-4 -ml-24 xl:-ml-5 md:-ml-23  '>WEBSITE DESIGN</h2>
          <div className='text-[17px] w-[270px] max-w-full md:ml-3  lg:text-[15px] md:text-[13px] md:w-[224px] lg:w-[250px]  font-jost xl:w-[325px] xl:text-[20px] text-start md:mb-[18% xl:mb-0'>
            <p>Modern, responsive, and built to convert. I design websites that not only look amazing but also offer a smooth user experience across all devices.</p>
          </div>
        </div>

        {/* Mobile App Design Card */}
        <div className='h-[420px]    md:w-[238px] md:h-[300px] lg:w-[312px] lg:h-[375px] xl:w-[440px] xl:h-[500px]  bg-[#F3F3F3] flex flex-col items-center justify-center p-6 md:p-8'>
          <div className='mb-4 -ml-60 xl:-ml-77 md:pl-28 lg:pl-20 xl:pl-2'>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_100_355)">
                <path d="M7.49969 0V39.375C7.49969 40.8668 8.09233 42.2976 9.14722 43.3525C10.2021 44.4074 11.6329 45 13.1247 45H31.8747C33.3665 45 34.7973 44.4074 35.8522 43.3525C36.9071 42.2976 37.4997 40.8668 37.4997 39.375V0H7.49969ZM33.7497 3.75V30H11.2497V3.75H33.7497ZM31.8747 41.25H13.1247C12.6274 41.25 12.1505 41.0525 11.7989 40.7008C11.4472 40.3492 11.2497 39.8723 11.2497 39.375V33.75H33.7497V39.375C33.7497 39.8723 33.5522 40.3492 33.2005 40.7008C32.8489 41.0525 32.372 41.25 31.8747 41.25Z" fill="#1E1E1E"/>
                <path d="M24.3745 35.6238H20.6245V39.3738H24.3745V35.6238Z" fill="#1E1E1E"/>
              </g>
              <defs>
                <clipPath id="clip0_100_355">
                  <rect width="45" height="45" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className='text-xl md:text-[16px] md:pl-3 lg:text-[24px] lg:pl-7 xl:text-[30px] xl:pl-4  font-bold font-jost text-center mb-4 -ml-16 xl:-ml-10 md:-ml-5 md:-pb-3'>
  MOBILE APP DESIGN
</h2>

          <div className='text-[17px] w-[270px] max-w-full   lg:text-[15px] md:text-[14px] md:w-[230px] lg:w-[250px]  font-jost xl:w-[325px] xl:text-[20px] text-start '>
            <p>Sleek interfaces, smooth interactions. I create mobile app designs that are both beautiful and functional and engaging user experiences for iOS and Android.</p>
          </div>
        </div>

        {/* UX/UI Design Card */}
        <div className='h-[420px]  md:w-[235px] md:h-[300px] lg:w-[312px] lg:h-[375px] xl:w-[440px] xl:h-[500px]   bg-[#F3F3F3] flex flex-col items-center justify-center p-6 md:p-8 '>
          <div className='mb-4 -ml-58 md:pl-26 lg:-ml-50 xl:pr-48'>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_100_362)">
                <path d="M45 35.625V11.25C45 9.75816 44.4074 8.32742 43.3525 7.27252C42.2976 6.21763 40.8668 5.625 39.375 5.625H5.625C4.13316 5.625 2.70242 6.21763 1.64752 7.27252C0.592632 8.32742 0 9.75816 0 11.25L0 35.625H20.625V37.5H13.125V41.25H31.875V37.5H24.375V35.625H45ZM3.75 11.25C3.75 10.7527 3.94754 10.2758 4.29917 9.92418C4.65081 9.57254 5.12772 9.375 5.625 9.375H39.375C39.8723 9.375 40.3492 9.57254 40.7008 9.92418C41.0525 10.2758 41.25 10.7527 41.25 11.25V31.875H3.75V11.25Z" fill="#1E1E1E"/>
              </g>
              <defs>
                <clipPath id="clip0_100_362">
                  <rect width="45" height="45" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className='text-xl md:text-[16px] max-w-full md:pr-12 md:-ml-3 lg:text-[25px] xl:text-[30px] xl:pl-10  lg:pr-8 font-bold font-jost text-center mb-4 -ml-33   xl:-ml-32'>
  UX/UI DESIGN
</h2>

          <div className=' text-[17px] w-[270px] max-w-full  md:text-[13px] lg:text-[15px] md:w-[240px] lg:w-[250px] font-jost xl:w-[325px] xl:text-[20px] text-start'>
            <p>Great design is more than just visuals—it's about solving problems. I specialize in crafting user-centered interfaces that make digital products easy, enjoyable, and efficient to use.</p>
          </div>
        </div>
      </div>

      {/* Bottom Dots Navigation */}
      <div className="hidden md:flex flex-row space-x-2 mx-auto mt-8 mb-6 xl:absolute md:absolute md:left-5 md:top-116 lg:absolute  lg:top-140 lg:left-7  xl:top-172 xl:left-24 left-30 -bottom-8 xxl:hidden">
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D2D2D2] rounded-full"></div>
      </div>
    </div>
  )
}

export default Skill