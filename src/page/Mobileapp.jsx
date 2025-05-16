import React from 'react';
import img1 from '../assets/Carapp/Welcome page.png';
import img2 from '../assets/Carapp/Sign up page.png';
import img3 from '../assets/Carapp/Sign in page.png';
import img4 from '../assets/Carapp/Home page.png';
import img5 from '../assets/Corfey/homepage.png';
import img6 from '../assets/Corfey/HOME PAGE PRO IOS APP.png';
import img7 from '../assets/Corfey/PLAN.png';
import img8 from '../assets/Corfey/PAYMENT DATA.png';
import img9 from '../assets/Carapp/Car detail page.png';
import img10 from '../assets/Carapp/Search page.png';
import img11 from '../assets/Carapp/Shopping Cart page.png';
import img12 from '../assets/Carapp/Profile page.png';
import img13 from '../assets/Watchapp/WELCOME PAGE.png';
import img14 from '../assets/Watchapp/HOME PAGE.png';
import img15 from '../assets/Watchapp/PRODUCT DETAILS.png';
import img16 from '../assets/Watchapp/CART PAGE.png';

const Mobileapp = () => {
  return (
    <div className="w-screen  pl-4 pr-4  md:w-full   lg:w-full xl:pl-13 xl:pr-12  py-12 flex flex-col gap-4 md:gap-4 items-center -mt-3 md:mt-6  lg:mt-8">
      {/* First row - Desktop: 8 images, Mobile: split into 2 rows of 4 */}
      <div className="hidden md:flex gap-2 lg:gap-4 w- justify-center">
        <img src={img1} alt="Welcome page" className="w-[84px] md:w-[11.6%]  lg:w-[106px] xl:w-[155px] h-auto aspect-[158/311] object-cover object-top " />
        <img src={img2} alt="Sign up page" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/311] object-cover object-top" />
        <img src={img3} alt="Sign in page" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/311] object-cover object-top" />
        <img src={img4} alt="Home page" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/311] object-cover object-top" />
        <img src={img5} alt="Corfey homepage" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/290] object-cover object-top" />
        <img src={img6} alt="HOME PAGE PRO IOS APP" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/290] object-cover object-bottom" />
        <img src={img7} alt="PLAN" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/290] object-cover object-bottom" />
        <img src={img8} alt="PAYMENT DATA" className="w-[84px] md:w-[11.6%]  lg:w-[106px] xl:w-[155px] h-auto aspect-[158/275] object-cover object-center md:mt-1 lg:mt-2" />
      </div>

      {/* Second row - Desktop: 8 images, Mobile: split into 2 rows of 4 */}
      <div className="hidden md:flex gap-2 lg:gap-4 w-auto  justify-center">
        <img src={img9} alt="Car detail page" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/311] object-cover object-top" />
        <img src={img10} alt="Search page" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/311] object-cover object-top" />
        <img src={img11} alt="Shopping Cart page" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/311] object-cover object-top" />
        <img src={img12} alt="Profile page" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/311] object-cover object-top" />
        <img src={img13} alt="WELCOME PAGE" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/290] object-cover md:mt-3 lg:mt-5" />
        <img src={img14} alt="HOME PAGE" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/295] object-cover object-bottom md:mt-3 lg:mt-5" />
        <img src={img15} alt="PRODUCT DETAILS" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/290] object-cover object-fill md:mt-3 lg:mt-5" />
        <img src={img16} alt="CART PAGE" className="w-[84px] md:w-[11.6%] lg:w-[106px] xl:w-[155px] h-auto aspect-[158/290] object-cover object-contain md:mt-3 lg:mt-5" />
      </div>

      {/* Mobile layout - 4 rows of 4 images */}
      <div className="md:hidden grid grid-cols-4 gap-2 w-auto md:ml-0">
        <img src={img1} alt="Welcome page" className="w-full h-auto aspect-[158/311] object-cover object-top" />
        <img src={img2} alt="Sign up page" className="w-full h-auto aspect-[158/311] object-cover object-top" />
        <img src={img3} alt="Sign in page" className="w-full h-auto aspect-[158/311] object-cover object-top" />
        <img src={img4} alt="Home page" className="w-full h-auto aspect-[158/311] object-cover object-top" />
      </div>

      <div className="md:hidden grid grid-cols-4 gap-2 w-auto  md:ml-0">
        <img src={img5} alt="Corfey homepage" className="w-full h-auto aspect-[158/290] object-cover object-top" />
        <img src={img6} alt="HOME PAGE PRO IOS APP" className="w-full h-auto aspect-[158/290] object-cover object-bottom" />
        <img src={img7} alt="PLAN" className="w-full h-auto aspect-[158/290] object-cover object-bottom" />
        <img src={img8} alt="PAYMENT DATA" className="w-full h-auto aspect-[158/275] object-cover object-center" />
      </div>

      <div className="md:hidden grid grid-cols-4 gap-2 w-auto  md:ml-0">
        <img src={img9} alt="Car detail page" className="w-full h-auto aspect-[158/311] object-cover object-top" />
        <img src={img10} alt="Search page" className="w-full h-auto aspect-[158/311] object-cover object-top" />
        <img src={img11} alt="Shopping Cart page" className="w-full h-auto aspect-[158/311] object-cover object-top" />
        <img src={img12} alt="Profile page" className="w-full h-auto aspect-[158/311] object-cover object-top" />
      </div>

      <div className="md:hidden grid grid-cols-4 gap-2 w-auto  md:ml-0">
        <img src={img13} alt="WELCOME PAGE" className="w-full h-auto aspect-[158/290] object-cover" />
        <img src={img14} alt="HOME PAGE" className="w-full h-auto aspect-[158/295] object-cover object-bottom" />
        <img src={img15} alt="PRODUCT DETAILS" className="w-full h-auto aspect-[158/290] object-cover object-fill" />
        <img src={img16} alt="CART PAGE" className="w-full h-auto aspect-[158/290] object-cover object-contain" />
      </div>
    </div>
  );
};

export default Mobileapp;