import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

import { Button } from '@headlessui/react';
import { TbArrowBadgeDown, TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled} from "react-icons/tb";
import { GiOnTarget } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";

import { FaDollarSign, FaHeadset, FaUserGraduate, FaHandsHelping } from 'react-icons/fa';
import { MdSecurity, MdHighQuality, MdAccessTime } from 'react-icons/md';

import '../static/styles.css'


function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const arrowAnimation = useSpring({
    from: { transform: 'translateX(0px)' },
    to: { transform: 'translateX(10px)' },
    config: { duration: 1000 },
    loop: { reverse: true }
  });

  const handleButtonClick = () => {
    const bookSeatElement = document.getElementById('seatbook');
    if (bookSeatElement) {
      bookSeatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEXPLOREButtonClick = () => {
    const bookSeatElement = document.getElementById('about');
    if (bookSeatElement) {
      bookSeatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutrightanimationProps = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.2)' },
    config: { duration: 1500 },
    loop: { reverse: true }
  });

  const aboutleftanimationProps = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.2)' },
    config: { duration: 1500 },
    loop: { reverse: true }
  });

  return (
    <div>

        {/* NAVBAR */}

        <div className={` ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className={isScrolled ? 'container mx-auto' : 'mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10'}>
                <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
                    <div className='flex items-center justify-between h-24 mt-5'>
                        <div className="flex-shrink-0 navbar-logo">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                        </div>
                        <div className="hidden sm:block sm:ml-6 md:flex md:ml-6">
                            <div className="flex flex-grow justify-between navbar-opt">
                                <a href="#home" className="text-white md:text-green-500 mx-3 md:mx-5 md:mx-3 lg:mx-8 text-sm text-sm md:text-base lg:text-xl font-bold nav-txt">HOME</a>
                                <a href="#about" className="text-gray-800 mx-3 md:mx-3 lg:mx-8 text-sm md:text-base lg:text-xl font-bold nav-txt">ABOUT US</a>
                                <a href="#package" className="text-gray-800 mx-3 rounded-md md:mx-3 lg:mx-8 text-sm md:text-base lg:text-xl font-bold nav-txt">PACKAGE</a>
                                <a href="#contact" className="text-gray-800 mx-3 rounded-md md:mx-3 lg:mx-8 text-sm md:text-base lg:text-xl font-bold nav-txt">CONTACT US</a>
                            </div>
                        </div>
                        <div>
                        <Button
                            className='bg-white rounded-lg border border-green-400 font-bold text-green-400 px-4 py-4 nav-bk-btn'
                            onClick={handleButtonClick}
                        >
                            BOOK A FREE TRIAL
                        </Button>
                        </div>
                        <div className="flex sm:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={mobileMenuOpen}
                            >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                            </button>
                        </div>
                    </div>    
                </div>
                <div className={mobileMenuOpen ? 'block' : 'hidden'} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-bold">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Team</a>
                    <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Calendar</a>
                    </div>
                </div>
            </div>
        </div>
        {/* END OF NAVBAR */}


        {/* HOME */}
        <div id='home' className='container mx-auto px-4 mt-14'>
            <div className='flex flex-col md:flex-row lg:flex-row justify-between'>
                <div className='my-5'>
                    <div className='flex'>
                        <h1 className='hidden sm:hidden md:block lg:block xl:block text-2xl font-bold tracking-wide md:my-10 md:ms-10 md:text-5xl lg:text-6xl lg:ms-14 lg:mt-24 text-black'>
                            Providing Best <br/> Education For <br/> <span className='text-green-800'> Brighter Future </span>
                        </h1>
                        <h1 className='sm:block md:hidden lg:hidden xl:hidden text-2xl font-bold tracking-wide md:my-10 md:ms-10 md:text-5xl lg:text-6xl lg:ms-14 lg:mt-24 text-black'>
                            Providing Best Education For <span className='text-green-800'> Brighter Future </span>
                        </h1>
                        <animated.img
                            src={`${process.env.PUBLIC_URL}/arrow.png`}
                            alt='arrow'
                            className='hidden sm:hidden md:block lg:block xl:block home-arrow md:mt-20 lg:mt-40'
                            style={arrowAnimation}
                            />                    
                    </div>
                    <p className='hidden sm:hidden md:hidden lg:block xl:block text-lg font-bold md:tracking-normal lg:tracking-wide md:my-10 md:ms-10 md:text-base lg:text-xl lg:ms-14 lg:mt-4 text-black'>
                        Empowering students with unparalleled educational <br/> opportunities, we  strive to pave the way for a brighter future <br/>through our commitment to providing the highest quality education.
                    </p>
                    <p className='hidden sm:hidden md:block lg:hidden xl:hidden text-lg font-bold md:tracking-normal lg:tracking-wide md:my-10 md:ms-10 md:text-base lg:text-l lg:ms-14 lg:mt-4 text-black'>
                        Empowering students with unparalleled educational opportunities, we strive to pave the way for a brighter <br/> future through our  commitment to providing the highest quality education.
                    </p>
                    <p className='sm:block md:hidden lg:hidden xl:hidden text-sm mt-10 font-bold tracking-normal lg:tracking-wide md:my-10 md:ms-10 md:text-base lg:text-l lg:ms-14 lg:mt-4 text-black'>
                        Empowering students with unparalleled educational opportunities, we strive to pave the way for a brighter <br/> future through our  commitment to providing the highest quality education.
                    </p>
                    <Button
                            className='flex bg-white rounded-lg border border-green-400 font-bold text-green-400 lg:ms-16 lg:px-8 py-4 explr-btn'
                            onClick={handleEXPLOREButtonClick}
                    >
                        EXPLORE MORE <TbArrowBadgeDown size={24} className='ms-1'/>
                    </Button>
                </div>
                <div className='mt-24'>
                    <img src={`${process.env.PUBLIC_URL}/home2.png`} alt='Home'/>
                </div>
            </div>
            <div id='seatbook' className='mt-28'>
                <div className="max-w-lg mx-auto bg-transparent p-8 border border-gray-300 rounded-md shadow-md">
                    <h2 className="text-2xl text-center font-semibold mb-4">Book A Seat For Your Kid</h2>
                    <form>
                        <div className="mb-4 mt-5">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 h-12 shadow-lg focus:border-green-400 focus:ring focus:ring-green-200 focus:ring-opacity-250"/>
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 h-12 shadow-lg focus:border-green-400 focus:ring focus:ring-green-200 focus:ring-opacity-450"/>
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                            <input type="tel" id="mobile" name="mobile" className="mt-1 block w-full rounded-md border-gray-300 h-12 shadow-lg focus:border-green-400 focus:ring focus:ring-green-200 focus:ring-opacity-650"/>
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-green-400 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    {/* END OF HOME */}

    {/* ABOUT */}
    <div id='about' className='container mx-auto mt-14'>
        <div className='text-center'>
            <h1 className='text-2xl px-6 md:px-6 font-extrabold tracking-wide md:text-3xl lg:text-4xl lg:mt-24 text-black'>
                ABOUT US
            </h1>
            <p className='text-sm px-6 md:px-6 mt-10 font-bold tracking-normal lg:tracking-wide md:my-10 md:ms-10 md:text-xl lg:text-2xl lg:ms-14 lg:mt-4 text-black'>
                Welcome to <span className='text-green-800'> OZLON </span>, where learning knows no boundaries!
            </p>
        </div>
        <div className="flex mt-20">
            <div className="max-w-full flex flex-col lg:flex-row gap-16 px-5 lg:px-8">
                <animated.img
                    src={`${process.env.PUBLIC_URL}/about-arrow.png`}
                    className='hidden sm:hidden md:hidden lg:block xl:block about-arrow mt-24 ms-8 -ml-16'
                    alt='Home'
                    style={aboutrightanimationProps}
                />                
                <div className='border border-gray-300 rounded-md shadow-md rounded-lg bg-green-100'>
                    <h3 className="mt-4 flex flex-col items-center justify-center text-xl font-bold text-center">
                        <div className='bg-green-100 rounded-full h-24 w-24'>
                            <GiOnTarget size={40} className='about-icon mx-6 my-7'/>
                        </div> 
                        Our Mission
                    </h3>
                    <p className="mx-12 pt-4 pb-8 text-gray-600 text-lg text-justify">
                        At Ozlon, our mission is to revolutionize education by providing high-quality online tutoring services that empower students to achieve their academic goals. We believe in personalized learning experiences that inspire curiosity, foster critical thinking, and promote academic success.
                    </p>
                </div>
                <div className='border border-gray-300 rounded-md shadow-md rounded-lg bg-green-100'>
                    <h3 className="mt-4 flex flex-col items-center justify-center text-xl font-bold text-center">
                        <div className='bg-green-100 rounded-full h-24 w-24'>
                            <RiTeamLine size={40} className='about-icon mx-7 my-7' />
                        </div> 
                        Who We Are
                    </h3>
                    <p className="mx-12 pt-4 pb-8 text-gray-600 text-lg text-justify">
                        We are a team of passionate educators, technologists, and innovators dedicated to reimagining the future of education. With years of experience in both traditional and online learning environments, we are committed to providing engaging, accessible, and effective solutions.
                    </p>
                </div>
                <animated.img
                    src={`${process.env.PUBLIC_URL}/about-arrow2.png`}
                    className='hidden sm:hidden md:hidden lg:block xl:block about-arrow -mt-24'
                    alt='Home'
                    style={aboutleftanimationProps}
                />
            </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 p-8 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-center space-x-4">
                    <FaUserGraduate size={40} className="text-green-500" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Expert Tutors</h3>
                        <p className="text-gray-600">Learn from industry experts and experienced educators.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <FaHandsHelping size={40} className="text-green-500" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">Interactive Learning</h3>
                        <p className="text-gray-600">Engage in interactive and enjoyable learning experiences.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <MdSecurity size={40} className="text-green-500" />
                    <div>
                        <h3 className="text-xl font-semibold text-green-900">Safe and Secure</h3>
                        <p className="text-gray-600">Your data and privacy are our top priority.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:mx-24'>
            <h1 className='text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl lg:mt-24 text-black'>
                Why Students Choose Us for Gaining Knowledge !
            </h1>
            <div className='flex justify-between sm:flex-col md:flex-row lg:flex-row'>
                <div className='mt-16'>
                    <img src={`${process.env.PUBLIC_URL}/about.png`} alt='Home'/>
                </div>
                <div className='flex flex-col'>
                    <div className="flex items-center space-x-4 border border-gray-300 lg:h-20 lg:ps-5 lg:mt-20 rounded-md shadow-md rounded-lg bg-green-100">
                        <TbCircleNumber1Filled size={40} className="text-green-500" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Affordable Pricing</h3>
                            <p className="text-gray-600">High-quality education at prices you can afford.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 border border-gray-300 lg:h-20 lg:ps-5 lg:mt-12 rounded-md shadow-md rounded-lg bg-green-100">
                        <TbCircleNumber2Filled size={40} className="text-green-500" />
                        <div className='justify-items-center'>
                            <h3 className="text-xl font-semibold text-gray-900">Customer Support</h3>
                            <p className="text-gray-600">24/7 support to help you with all your queries.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 border border-gray-300 lg:h-20 lg:ps-5 lg:mt-12 rounded-md shadow-md rounded-lg bg-green-100">
                        <TbCircleNumber3Filled size={40} className="text-green-500" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Quality Assurance</h3>
                            <p className="text-gray-600">We ensure the best quality in all our services.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 border border-gray-300 lg:h-20 lg:ps-5 lg:mt-12 rounded-md shadow-md rounded-lg bg-green-100">
                        <TbCircleNumber4Filled size={40} className="text-green-500" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Flexible Scheduling</h3>
                            <p className="text-gray-600">Learn at your own pace with flexible scheduling options.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* END OF ABOUT */}

    {/* PACKAGE */}
    <div id='package'>
        <div className='container mx-auto mt-24'>
            
        </div>
    </div>
    {/* END OF PACKAGE*/}
    </div>
  )
}

export default Home