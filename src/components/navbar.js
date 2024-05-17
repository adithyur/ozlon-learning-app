<nav className="bg-transparent">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img className="h-8 w-auto" href='#' src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                    </div>
                    <div className="block md:hidden">
                        <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                        </button>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                        <div className="ml-2 flex flex-col items-center">
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-1">Home</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-1">About</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-1">Services</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-1">Contact</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <a href="#" className="text-gray-800 font-sans nav-txt px-3 py-2 rounded-md text-xl lg:text-2xl font-medium">Home</a>
                            <a href="#" className="text-gray-800 font-sans nav-txt px-3 py-2 rounded-md text-xl lg:text-2xl font-medium">About</a>
                            <a href="#" className="text-gray-800 font-sans nav-txt px-3 py-2 rounded-md text-xl lg:text-2xl font-medium">Services</a>
                            <a href="#" className="text-gray-800 font-sans nav-txt px-3 py-2 rounded-md text-xl lg:text-2xl font-medium">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>