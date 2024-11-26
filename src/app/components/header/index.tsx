import React from 'react'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'

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
  return (
    <header className='flex items-center justify-between p-4 bg-white shadow'>
      <div className='flex items-center'>
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={50}
          height={50}
          className='mr-4'
        />
        <div className='flex-grow'>
          <nav className='flex space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href='#'
                className={`text-menuText text-subheading font-primary ${
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
      <div className='flex items-center space-x-4 ml-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search'
            className='bg-[#F6F9FF] border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg w-[300px]'
          />
          <FiSearch className='absolute left-3' style={{ top: '0.8rem' }} />
        </div>
        <button className='bg-primary text-white text-subheading font-primary py-2 px-4 rounded-md'>
          Resume Builder
        </button>
        <div className='w-10 h-10 rounded-full overflow-hidden'>
          <Image
            src='/images/logined-user.png'
            alt='User Profile'
            width={40}
            height={40}
            className='object-cover'
          />
        </div>
      </div>
    </header>
  )
}
export default Header
