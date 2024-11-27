import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { name: 'Find Jobs', isActive: true },
  { name: 'Top Companies', isActive: false },
  { name: 'Job Tracker', isActive: false },
  { name: 'My Calendar', isActive: false },
  { name: 'Documents', isActive: false },
  { name: 'Messages', isActive: false },
  { name: 'Notifications', isActive: false },
]

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Trigger loading animation on mount
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <header className='bg-white shadow'>
      {/* Main Header */}
      <div className='flex items-center justify-between p-4 max-w-[2000px] mx-auto'>
        <div className='flex items-center flex-grow xl:flex-grow-0'>
          <Image
            src='/images/logo.png'
            alt='Logo'
            width={50}
            height={50}
            className={`mr-4 flex-shrink-0 transition-all duration-500 ease-out ${
              isLoaded
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          />
          {/* Desktop Navigation */}
          <div className='hidden [@media(min-width:1150px)]:block flex-grow'>
            <nav className='flex'>
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href='#'
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                  className={`text-menuText text-[14px] xl:text-subheading font-primary px-3 xl:px-4 whitespace-nowrap transition-all duration-500 ease-out hover:scale-105 ${
                    isLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  } ${
                    item.isActive
                      ? 'text-primary font-subHeading'
                      : 'hover:text-primary'
                  }`}
                  aria-current={item.isActive ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Desktop Right Section */}
        <div className='hidden [@media(min-width:1150px)]:flex items-center space-x-2 xl:space-x-4 ml-4 flex-shrink-0'>
          <div
            className={`relative transition-all duration-500 ease-out ${
              isLoaded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${navItems.length * 100}ms` }}
          >
            <input
              type='text'
              placeholder='Search'
              className='bg-[#F6F9FF] border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg w-[200px] xl:w-[300px] transition-all duration-300'
            />
            <FiSearch className='absolute left-3 top-3 text-gray-400' />
          </div>
          <button
            className={`bg-primary text-white text-[14px] xl:text-subheading font-primary py-2 px-3 xl:px-4 rounded-md whitespace-nowrap transition-all duration-500 ease-out hover:bg-primary/90 hover:scale-105 ${
              isLoaded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${(navItems.length + 1) * 100}ms` }}
          >
            Resume Builder
          </button>
          <div
            className={`w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden flex-shrink-0 transition-all duration-500 ease-out hover:scale-110 ${
              isLoaded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${(navItems.length + 2) * 100}ms` }}
          >
            <Image
              src='/images/logined-user.png'
              alt='User Profile'
              width={40}
              height={40}
              className='object-cover'
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex items-center [@media(min-width:1150px)]:hidden'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-2xl p-2 transition-all duration-500 ease-out hover:scale-110 ${
              isLoaded
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
            aria-label='Toggle Menu'
          >
            {isMenuOpen ? (
              <FiX className='transform transition-transform duration-300 rotate-90' />
            ) : (
              <FiMenu className='transform transition-transform duration-300 rotate-0' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`[@media(min-width:1150px)]:hidden bg-white border-t overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`p-4 space-y-4 transform transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-10'
          }`}
        >
          {/* Mobile Search */}
          <div className='relative transform transition-all duration-300 ease-in-out'>
            <input
              type='text'
              placeholder='Search'
              className='w-full bg-[#F6F9FF] border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300'
            />
            <FiSearch className='absolute left-3 top-3 text-gray-400' />
          </div>

          {/* Mobile Navigation with staggered animations */}
          <nav className='flex flex-col space-y-4'>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href='#'
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                className={`text-menuText text-subheading font-primary transform transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-10 opacity-0'
                } ${
                  item.isActive
                    ? 'text-primary font-subHeading'
                    : 'hover:text-primary'
                }`}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Resume Builder Button */}
          <button
            className={`w-full bg-primary text-white text-subheading font-primary py-2 px-4 rounded-md transform transition-all duration-500 ease-in-out hover:bg-primary/90 ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${navItems.length * 100 + 100}ms` }}
          >
            Resume Builder
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
