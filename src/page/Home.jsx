import React, { useState } from 'react';
import photo from '../assets/Images/Image1.png';
import logo from '../assets/logo.png';
import bc from '../assets/Images/image.png';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const AnimatedLetters = ({ text, delay = 0, color = 'white' }) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        className="letter-animate"
        style={{
          animationDelay: `${delay + i * 0.1}s`,
          color,
        }}
      >
        {char}
      </span>
    ));

  return (
    <div className="font-jost relative  w-screen md:w-full "> 

      <div className="flex flex-col sm:flex-row h-screen ">
        {/* Left image section */}
        <div className="w-full sm:w-1/2 relative h-[40vh] sm:h-full">
          <img src={photo} alt="Main" className="w-full h-full object-cover object-center" />
          <img 
            src={logo} 
            alt="Logo" 
            className="absolute top-4 left-4 sm:left-8 lg:left-24 w-32 sm:w-40 lg:w-60" 
          />
        </div>

        {/* Right text section */}
        <div className="w-full sm:w-1/2 bg-black text-white flex flex-col  px-4 sm:px-12 lg:px-24 py-12 sm:py-0 relative h-[60vh] sm:h-full  ">
            <div className='flex flex-row md:flex md:flex-col'>
              <div className="sm:absolute sm:top-64">
            <h1 className="text-[30px] sm:text-7xl lg:text-7xl lg:mt-[100%] md:text-5xl md:mt-[50%] xl:-mt-22  font-bold font-oswald tracking-wide">
              <AnimatedLetters text="HELLO!" />
            </h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:absolute sm:top-[320px] ">
            <h2 className="text-[30px] sm:text-7xl -mt-4 ml-3 lg:text-7xl lg:mt-[60%]  xl:-mt-14  font-bold font-oswald tracking-wide flex flex-wrap md:text-5xl md:mt-[30%]">
              <AnimatedLetters text="I'M" delay={0.8} />
              <span className="mx-2"></span>
              <AnimatedLetters text="BRIAN" delay={1.2} color="#BAFF29" />
              <span className="mx-1"></span>
              <AnimatedLetters text="ROU" delay={1.8} color="#BAFF29" />
            </h2>
          </div>
            </div>

          <div className="mt-6 sm:mt-0 sm:absolute sm:top-[440px] max-w-full md:mt-[25%] md:w-[290px] lg:mt-[60%]  xl:-mt-12 xl:w-[540px] ">
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg xl:text-[15px]">
              Freelance Web & Mobile UX/UI Designer. A Man In Digital Business grad passionate 
              <br className="hidden sm:block" /> about tech, design & growth. Expand your <strong className="text-white">Business/ Personal</strong> Brand online.
            </p>
          </div>

          {/* CTA buttons - Responsive for all devices */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 sm:mt-0 sm:absolute sm:top-[560px] md:mt-[50%] lg:mt-[90%] xl:-mt-8  ">
            <button
              onClick={openModal}
              className="flex items-center justify-center border border-white text-lg sm:text-xl text-white px-4 py-3 sm:px-2 sm:h-[50px] lg:px-6 lg:h-[60px] xl:w-[260px] rounded hover:bg-lime-400 hover:text-black transition"
            >
           <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.9025 6.04167C7.975 7.11708 8.15625 8.16833 8.44625 9.17125L6.99625 10.6213C6.50083 9.17125 6.18667 7.63667 6.07792 6.04167H7.9025ZM19.8167 20.5658C20.8438 20.8558 21.895 21.0371 22.9583 21.1096V22.91C21.3633 22.8013 19.8288 22.4871 18.3667 22.0037L19.8167 20.5658ZM9.0625 3.625H4.83333C4.16875 3.625 3.625 4.16875 3.625 4.83333C3.625 16.1796 12.8204 25.375 24.1667 25.375C24.8313 25.375 25.375 24.8313 25.375 24.1667V19.9496C25.375 19.285 24.8313 18.7413 24.1667 18.7413C22.6683 18.7413 21.2063 18.4996 19.8529 18.0525C19.7321 18.0042 19.5992 17.9921 19.4783 17.9921C19.1642 17.9921 18.8621 18.1129 18.6204 18.3425L15.9621 21.0008C12.5425 19.2487 9.73917 16.4575 7.99917 13.0379L10.6575 10.3796C10.9958 10.0413 11.0925 9.57 10.9596 9.14708C10.5125 7.79375 10.2708 6.34375 10.2708 4.83333C10.2708 4.16875 9.72708 3.625 9.0625 3.625Z" fill="white"/>
</svg>


              Contact Me
            </button>
            <a href="https://forms.gle/qkEHLZ3Leugf3Q8S7" target="_blank" rel="noopener noreferrer" className="block">
              <button className="bg-lime-400 text-lg sm:text-xl w-full sm:w-[140px] py-3 sm:h-[50px] lg:w-[180px] lg:h-[60px] xl:w-[260px]  text-black rounded  ">
                Hire Me
              </button>
            </a>
          </div>

          {/* Social links - Responsive for all devices */}
          <div className="flex justify-center items-center sm:justify-center mt-[10%] space-x-3 sm:absolute sm:bottom-8 sm:right-8 lg:mr-[3%] md:mr-2 xl:mr-[13%]">
            <a href="https://www.facebook.com/share/1C3ThoSkxq/" target="_seft" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12C24 5.37264 18.6274 0 12 0Z" fill="white"/>
</svg>

            </a>
            <a href="https://www.instagram.com/brianrou12?igsh=bW40b3Z0c2c2Mjgx" target="_seft" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="white"/>
  <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="white"/>
  <path d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z" fill="white"/>
</svg>

            </a>
            <a href="https://www.linkedin.com/in/brianrou/" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z" fill="white"/>
</svg>

            </a>
            <a href="https://t.me/brianrou" target="_blank" rel="noopener noreferrer">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="white"/>
</svg>


            </a>
          </div>
        </div>
      </div>

      {/* Modal - Responsive Design */}
      {isModalOpen && (
  <div className="fixed inset-1 bg-black/70 flex justify-center items-center z-50 p-4  backdrop-blur-sm pb-30   ">
    <div className=" text-white bg-[#030303]   max-w-5xl  relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] xl:h-[600px]">
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white text-2xl z-50 hover:text-lime-400 transition-colors duration-300 w-12 h-12 flex items-center justify-center rounded-full bg-black/70 touch-manipulation xl:mt-20 "
        aria-label="Close modal"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
            <div className="flex flex-col sm:flex-row h-full xl:h-[600px] xl:mt-0 xl:mb-12">
              {/* Left side */}
              <div className="relative w-full  sm:w-[55%] h-64 sm:h-[400px] xl:h-[600px]">
                <img src={bc} alt="Modal Background" className="absolute w-full h-full xl:h-[600px] object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" />
                <div className="absolute inset-0 bg-[#030303] opacity-50 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" />
                <div className="relative z-10 h-full flex items-center justify-center p-6">
                  <h3 className="text-white text-xl sm:text-2xl font-bold text-center">
                    "ALL I NEED IS ONE OPPORTUNITY TO SHOW YOU WHAT I CAN DO" – LET MY WORK SPEAK
                  </h3>
                </div>
              </div>

              {/* Right side */}
              <div className="bg-white text-black w-full sm:w-[45%] flex flex-col items-center justify-center p-6 sm:p-8 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none">
                <p className="font-bold text-lg sm:text-xl text-center mb-12 sm:mb-6">Open for a call — let's discuss your ideas.</p>
                <p className="text-base sm:text-lg font-bold text-center -mt-8 mb-12 xl:-mt-3">+855 76 790 801 / 077 790 801</p>
              </div>
            
            </div>
            <div className=" flex flex-row left-[30%] sm:flex absolute bottom-1 space-x-2 right-42  md:left-[71%] xl:mb-4 xl:space-x-4 md:mb-2  lg:right-40 ">
            <a href="https://www.facebook.com/share/1C3ThoSkxq/" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12C24 5.37264 18.6274 0 12 0Z" fill="black"/>
</svg>

            </a>
            <a href="https://www.instagram.com/brianrou12?igsh=bW40b3Z0c2c2Mjgx" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_244_191)">
    <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="black"/>
    <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="black"/>
    <path d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_244_191">
      <rect width="24" height="24" fill="black"/>
    </clipPath>
  </defs>
</svg>

            </a>
            <a href="https://www.linkedin.com/in/brianrou/" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z" fill="black"/>
</svg>

            </a>
            <a href="https://t.me/brianrou" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_244_193)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_244_193">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>

            </a>
          </div>
          </div>
         
        </div>
        
      )}
    </div>
  );
};

export default Home;