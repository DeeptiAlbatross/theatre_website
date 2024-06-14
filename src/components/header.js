import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTarget = (item) => {
    const id = document.getElementById(item);
    if (id) {
      id.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div>
      <header className="w-full bg-transparent bg-black text-sm py-4 fixed top-0 z-40">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center justify-between">
            <img className='h-[60px] w-[60px] mix-blend-screen' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROODJw3XJUrNG_RU-pYEXaLon3Mtu-bT7bIw&s' alt='#'></img>
            <button className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
          <div id="navbar-image-and-text-1" className={`transition-all duration-300 ${isMenuOpen ? "block" : "hidden"} sm:block sm:flex sm:items-center sm:justify-end`}>
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <span className="text-lg text-yellow-500" onClick={() => scrollToTarget("Home")}>Home</span>
              <span className="text-lg text-white hover:text-yellow-600" onClick={() => scrollToTarget("about")}>About</span>
              <span className="text-lg text-white hover:text-yellow-600" onClick={() => scrollToTarget("Vision")}>Vision</span>
              <span className="text-lg text-white hover:text-yellow-600" onClick={() => scrollToTarget("show")}>Show</span>
              <span className="text-lg text-white hover:text-yellow-600" onClick={() => scrollToTarget("contact")}>Contact</span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
