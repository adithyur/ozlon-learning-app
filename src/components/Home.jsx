import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import emailjs from 'emailjs-com';
import { Button } from '@headlessui/react';
import { TbArrowBadgeDown, TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled} from "react-icons/tb";
import { GiOnTarget } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { FaUserGraduate, FaHandsHelping, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdSecurity, MdDateRange, MdVerified } from 'react-icons/md';
import { GiTeacher, GiBookPile } from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../static/styles.css'


function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
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

  const handleLinkClick = (link) => {
    setActiveLink(link);
};

const sections = useRef({
    '#home': null,
    '#about': null,
    '#programs': null,
    '#foundation': null,
    '#contact': null
});

useEffect(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(`#${entry.target.id}`);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    Object.values(sections.current).forEach(section => {
        if (section) observer.observe(section);
    });

    return () => {
        Object.values(sections.current).forEach(section => {
            if (section) observer.unobserve(section);
        });
    };
}, []);

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

  const packages = [
    {
      level: "Class 1-12",
      subjects: "All Subjects",
      options: [
        { ratio: "1 Student - 1 Teacher", icon: <GiBookPile size={40} />, description: "Personalized one-on-one tutoring for all subjects. Tailored learning plans. Flexible scheduling." },
        { ratio: "4 Students - 1 Teacher", icon: <RiTeamLine size={40} />, description: "Small group sessions for personalized attention. Collaborative learning environment. All subjects covered with interactive lessons." },
        { ratio: "10 Students - 1 Teacher", icon: <GiTeacher size={40} />, description: "Group learning with peers. Engaging and interactive classes for all subjects. Balanced teacher-student interaction." },
      ],
    }
  ];

  const foundation = [
    {
      options: [
        { ratio: "NEET", icon: <GiBookPile size={40} />, description: "Personalized one-on-one tutoring for all subjects. Tailored learning plans. Flexible scheduling." },
        { ratio: "JEE", icon: <RiTeamLine size={40} />, description: "Small group sessions for personalized attention. Collaborative learning environment. All subjects covered with interactive lessons." },
        { ratio: "PSC", icon: <GiTeacher size={40} />, description: "Group learning with peers. Engaging and interactive classes for all subjects. Balanced teacher-student interaction." },
        { ratio: "SSC", icon: <GiTeacher size={40} />, description: "Group learning with peers. Engaging and interactive classes for all subjects. Balanced teacher-student interaction." },
      ],
    }
  ];

  const currentYear = new Date().getFullYear();

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
        serviceID,
        templateID,
        formData,
        userID
    ).then((response) => {
        //console.log('SUCCESS!', response.status, response.text);
        toast.success('Form submitted successfully!');
    }).catch((err) => {
        //console.log('FAILED...', err);
        toast.error('Form submission failed. Please try again.');
    });
};

  return (
    <div>
        <a 
            href="https://wa.me/yourphonenumber" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed w-16 lg:mr-16 h-16 bottom-8 right-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg z-50 transition-transform duration-300 hover:bg-green-600 hover:scale-105"
        >
            <FaWhatsapp className="text-3xl" />
        </a>

        {/* NAVBAR */}

        <div className={`fixed w-full top-0 z-50 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className={isScrolled ? 'mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10' : 'mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10'}>
                <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-6 lg:px-10">
                    <div className='flex items-center justify-between h-24'>
                        <div className="flex-shrink-0 navbar-logo">
                            <img className="h-60 w-auto -ms-10 mt-3" src={`${process.env.PUBLIC_URL}/logo.png`} alt="Your Company" />
                        </div>
                        <div className="hidden sm:block sm:ml-6 md:flex md:-ml-7">
                            <div className="flex flex-grow justify-between navbar-opt">
                                <a 
                                    href="#home" 
                                    className={`mx-3 rounded-md md:mx-2 lg:mx-8 text-sm md:text-sm lg:text-lg xl:text-xl font-bold nav-txt ${activeLink === '#home' ? 'text-green-500' : 'text-gray-800'}`}
                                    onClick={() => handleLinkClick('#home')}
                                >HOME</a>
                                <a 
                                    href="#about" 
                                    className={`mx-3 rounded-md md:mx-2 lg:mx-8 text-sm md:text-sm lg:text-lg xl:text-xl font-bold nav-txt ${activeLink === '#about' ? 'text-green-500' : 'text-gray-800'}`}
                                    onClick={() => handleLinkClick('#about')}
                                >ABOUT US</a>
                                <a 
                                    href="#programs" 
                                    className={`mx-3 rounded-md md:mx-2 lg:mx-8 text-sm md:text-sm lg:text-lg xl:text-xl font-bold nav-txt ${activeLink === '#programs' ? 'text-green-500' : 'text-gray-800'}`}
                                    onClick={() => handleLinkClick('#programs')}
                                >PROGRAMS</a>
                                <a 
                                    href="#foundation" 
                                    className={`mx-3 rounded-md md:mx-2 lg:mx-8 text-sm md:text-sm lg:text-lg xl:text-xl font-bold nav-txt ${activeLink === '#foundation' ? 'text-green-500' : 'text-gray-800'}`}
                                    onClick={() => handleLinkClick('#foundation')}
                                >FOUNDATION</a>
                                <a 
                                    href="#contact" 
                                    className={`mx-3 rounded-md md:mx-2 lg:mx-8 text-sm md:text-sm lg:text-lg xl:text-xl font-bold nav-txt ${activeLink === '#contact' ? 'text-green-500' : 'text-gray-800'}`}
                                    onClick={() => handleLinkClick('#contact')}
                                >CONTACT US</a>
                            </div>
                        </div>
                        <div>
                        <Button
                            className='text-sm -ms-20 p-3 md:-mr-5 md:ms-0 md:text-base bg-green-400 rounded-lg border border-green-400 font-bold text-white md:px-1 md:py-3 nav-bk-btn'
                            onClick={handleButtonClick}
                        >
                            FREE SESSION
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
                <div className={mobileMenuOpen ? 'block' : 'hidden'} id="mobile-menu" >
                    <div className="bg-white px-2 pt-2 pb-3 space-y-1">
                        <a 
                            href="#home" 
                            className={`block px-3 py-2 rounded-md text-base font-bold ${activeLink === '#home' ? 'bg-green-800 text-white' : 'text-gray-300 hover:bg-green-900 hover:text-white'}`}
                            onClick={() => handleLinkClick('#home')}
                        >HOME</a>
                        <a 
                            href="#about" 
                            className={`block px-3 py-2 rounded-md text-base font-bold ${activeLink === '#about' ? 'bg-green-800 text-white' : 'text-gray-300 hover:bg-green-900 hover:text-white'}`}
                            onClick={() => handleLinkClick('#about')}
                            >ABOUT US</a>
                        <a 
                            href="#programs" 
                            className={`block px-3 py-2 rounded-md text-base font-bold ${activeLink === '#programs' ? 'bg-green-800 text-white' : 'text-gray-300 hover:bg-green-900 hover:text-white'}`}
                            onClick={() => handleLinkClick('#programs')}
                        >PROGRAMS</a>
                        <a 
                            href="#foundation" 
                            className={`block px-3 py-2 rounded-md text-base font-bold ${activeLink === '#foundation' ? 'bg-green-800 text-white' : 'text-gray-300 hover:bg-green-900 hover:text-white'}`}
                            onClick={() => handleLinkClick('#foundation')}
                        >FOUNDATIONAL COURSE</a>
                        <a 
                            href="#contact" 
                            className={`block px-3 py-2 rounded-md text-base font-bold ${activeLink === '#contact' ? 'bg-green-800 text-white' : 'text-gray-300 hover:bg-green-900 hover:text-white'}`}
                            onClick={() => handleLinkClick('#contact')}
                        >CONTACT US</a>
                    </div>
                </div>
            </div>
        </div>
        {/* END OF NAVBAR */}


        {/* HOME */}
        <div id='home' ref={el => sections.current['#home'] = el} className='container mx-auto px-4 mt-14'>
            <div className='flex flex-col md:flex-row lg:flex-row justify-between'>
                <div className='my-5'>
                    <div className='flex'>
                        <h1 className='hidden sm:hidden md:block lg:block xl:block text-2xl font-bold tracking-wide md:my-10 md:ms-10 md:text-5xl lg:text-6xl lg:ms-14 lg:mt-24 text-black'>
                            Providing The Best <br/> Education For <br/> <span className='text-green-800'> Brighter Future </span>
                        </h1>
                        <h1 className='mt-16 ms-6 sm:block md:hidden lg:hidden xl:hidden text-2xl font-bold tracking-wide md:my-10 md:ms-10 md:text-5xl lg:text-6xl lg:ms-14 lg:mt-24 text-black'>
                            Providing The Best Education For <span className='text-green-800'> Brighter Future </span>
                        </h1>
                        <animated.img
                            src={`${process.env.PUBLIC_URL}/arrow.png`}
                            alt='arrow'
                            className='hidden sm:hidden md:block lg:block xl:block home-arrow md:mt-20 lg:mt-40'
                            style={arrowAnimation}
                            />                    
                    </div>
                    <p className='hidden sm:hidden md:hidden lg:block xl:block text-lg font-bold md:tracking-normal lg:tracking-wide md:my-10 md:ms-10 md:text-base lg:text-xl lg:ms-14 lg:mt-4 text-black'>
                        Empowering students with unparalleled education ,<br/> we  strive to pave the way for a brighter future <br/>through our commitment to providing the highest quality education.
                    </p>
                    <p className='hidden sm:hidden md:block lg:hidden xl:hidden text-lg font-bold md:tracking-normal lg:tracking-wide md:my-10 md:ms-10 md:text-base lg:text-l lg:ms-14 lg:mt-4 text-black'>
                        Empowering students with unparalleled education, we strive to pave the way for a brighter <br/> future through our  commitment to providing the highest quality education.
                    </p>
                    <p className='max-w-lg sm:block md:hidden lg:hidden xl:hidden text-sm mt-12 ms-6 font-bold tracking-wide lg:tracking-wide md:my-10 md:ms-10 md:text-base lg:text-l lg:ms-14 lg:mt-4 text-black'>
                        Empowering students with unparalleled education, we strive to pave the way for a brighter future through our  commitment to providing the highest quality education.
                    </p>
                    <Button
                        className='hidden sm:hidden md:flex mt-10 bg-green-400 rounded-lg border border-green-400 font-bold text-white md:ms-10 lg:ms-16 md:px-4 lg:px-8 py-4 explr-btn'
                        onClick={handleEXPLOREButtonClick}
                    >
                        <div className="flex items-center"> {/* Added a div wrapper with flex */}
                            EXPLORE MORE 
                            <TbArrowBadgeDown size={24} className='ms-1'/>
                        </div>
                    </Button>

                </div>
                <div className='mt-10 md-24 lg-24'>
                    <img src={`${process.env.PUBLIC_URL}/home1.png`} alt='Home'/>
                </div>
            </div>
            <div id='seatbook' className='mt-28'>
                <div className="max-w-lg mx-auto bg-transparent p-8 border border-gray-300 rounded-md shadow-md">
                    <h2 className="text-2xl text-center font-semibold mb-4">Book A Seat For Your Kid</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 mt-5">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="mt-1 block w-full rounded-md border-gray-300 h-12 shadow-lg focus:border-green-400 focus:ring focus:ring-green-200 focus:ring-opacity-250"
                            />
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"      
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 h-12 shadow-lg focus:border-green-400 focus:ring focus:ring-green-200 focus:ring-opacity-450"
                            />
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                            <input 
                                type="tel" 
                                id="mobile" 
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 h-12 shadow-lg focus:border-green-400 focus:ring focus:ring-green-200 focus:ring-opacity-650"
                            />
                        </div>
                        <div className="mb-4 mt-5">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange} 
                                rows="4" 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-green-400 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                            ></textarea>
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
        {/* END OF HOME */}

        {/* ABOUT */}
        <div id='about' ref={el => sections.current['#about'] = el} className='container mx-auto mt-14'>
            <div className='text-center'>
                <h1 className='text-2xl px-6 md:px-6 font-extrabold tracking-wide md:text-3xl lg:text-4xl lg:mt-24 text-black'>
                    ABOUT US
                </h1>
                <p className='text-lg px-6 md:px-6 mt-10 font-bold tracking-normal lg:tracking-wide md:my-10 md:ms-10 md:text-xl lg:text-2xl lg:ms-14 lg:mt-4 text-black'>
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
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What We Offer</h2>
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
            <h3 className="text-xl font-semibold text-gray-900">Safe and Secure</h3>
            <p className="text-gray-600">Your data and privacy are our top priority.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MdDateRange size={40} className="text-green-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Book a Seat after Free Trial</h3>
            <p className="text-gray-600">Try our services with a free trial before you book a seat.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MdVerified size={40} className="text-green-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Quality Assurance</h3>
            <p className="text-gray-600">We ensure the best quality in all our services.</p>
          </div>
        </div>
      </div>
    </div>
            <div className='lg:mx-24'>
                <h1 className='text-2xl mt-8 ms-4 font-bold tracking-wide md:text-3xl lg:text-4xl lg:mt-24 text-black'>
                    Why Students Choose Us for Gaining Knowledge !
                </h1>
                <div className='flex justify-between flex-col md:flex-col lg:flex-row'>
                    <div className='mt-16 mx-5'>
                        <img src={`${process.env.PUBLIC_URL}/about.png`} alt='Home'/>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex items-center space-x-4 border border-gray-300 lg:h-20 lg:ps-5 mx-5 lg:mt-20 rounded-md shadow-md rounded-lg bg-green-100">
                            <TbCircleNumber1Filled size={40} className="text-green-500" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Affordable Pricing</h3>
                                <p className="text-gray-600">High-quality education at prices you can afford.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 border border-gray-300 lg:h-20 lg:ps-5 mx-5 mt-5 lg:mt-12 rounded-md shadow-md rounded-lg bg-green-100">
                            <TbCircleNumber2Filled size={40} className="text-green-500" />
                            <div className='justify-items-center'>
                                <h3 className="text-xl font-semibold text-gray-900">Customer Support</h3>
                                <p className="text-gray-600">24/7 support to help you with all your queries.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 border border-gray-300 lg:h-20 lg:ps-5 mx-5 mt-5 lg:mt-12 rounded-md shadow-md rounded-lg bg-green-100">
                            <TbCircleNumber3Filled size={40} className="text-green-500" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Exciting scholarships</h3>
                                <p className="text-gray-600">We reward our top-performing students with exciting scholarships.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 border border-gray-300 lg:h-20 lg:ps-5 mx-5 mt-5 lg:mt-12 rounded-md shadow-md rounded-lg bg-green-100">
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
        <div id='programs' ref={el => sections.current['#programs'] = el} className='bg-white'>
            <div className="max-w-6xl mx-auto mt-20 p-8">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">PROGRAMS</h2>
                {packages.map((pkg, index) => (
                    <div key={index} className="mb-12">
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">{pkg.level} - {pkg.subjects}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pkg.options.map((option, idx) => (
                            <div key={idx} className="p-8 border border-gray-300 rounded-lg shadow-md bg-white flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:border-green-600">
                                <div className="text-green-600 mb-4">
                                    {option.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-green-600 mb-4">{option.ratio}</h4>
                                <p className="text-gray-700">{option.description}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* END OF PACKAGE*/}

        {/* FOUNDATION COURSE */}
        <div id='foundation' ref={el => sections.current['#foundation'] = el} className='bg-white'>
            <div className="max-w-6xl mx-auto mt-20 p-8">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">FOUNDATION CLASS</h2>
                {foundation.map((pkg, index) => (
                    <div key={index} className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pkg.options.map((option, idx) => (
                            <div key={idx} className="p-8 border border-gray-300 rounded-lg shadow-md bg-white flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:border-green-600">
                                <div className="text-green-600 mb-4">
                                    {option.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-green-600 mb-4">{option.ratio}</h4>
                                <p className="text-gray-700">{option.description}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* FOUNDATION COURSE*/}

        {/* CONTACT + FOOTER */}
        <div id='contact' ref={el => sections.current['#contact'] = el}>
        <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        {/* Contact Us Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 leading-relaxed">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2 flex items-center contact-txt text-sm md:text-base lg:text-base">
                <FaMapMarkerAlt className="text-green-500 mr-2" />
                <strong>Address:</strong> &nbsp; Adoor, Pathanamthitta, Kerala
            </p>
            <p className="mb-2 flex items-center contact-txt text-sm md:text-base lg:text-base">
                <FaPhoneAlt className="text-green-500 mr-2" />
                <strong>Phone:</strong> &nbsp; +123 456 7890
            </p>
            <p className="mb-2 flex items-center contact-txt text-sm md:text-base lg:text-base">
                <FaWhatsapp className="text-green-500 mr-2" />
                <strong>WhatsApp:</strong> &nbsp; +123 456 7890
            </p>
            <p className="mb-2 flex items-center contact-txt text-sm md:text-base lg:text-base">
                <FaEnvelope className="text-green-500 mr-2" />
                <strong>Email:</strong> &nbsp; ozlonlearningapp@gmail.com
            </p>
        </div>

        {/* Site Map Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4">Site Map</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="site-txt tracking-wide">HOME</a></li>
            <li><a href="#" className="site-txt tracking-wide">ABOUT US</a></li>
            <li><a href="#" className="site-txt tracking-wide">PROGRAMS</a></li>
            <li><a href="#" className="site-txt tracking-wide">CONTACT US</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 my-8" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 leading-relaxed">© {currentYear} OZLON LEARNING. All rights reserved.</p>
      </div>
    </footer>
        </div>
        {/* END OF CONTACT + FOOTER */}
    </div>





  )
}

export default Home