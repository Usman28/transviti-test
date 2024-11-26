import React from 'react'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'

const UserDetailsSidebar = () => {
  return (
    <div className='flex flex-col items-start ml-[50px] mt-8'>
      {' '}
      <div className='flex items-center mb-4'>
        {' '}
        {/* First card */}
        <div className='bg-white w-[350px] h-[250px] rounded-[10px] shadow-md flex flex-col'>
          {' '}
          <Image
            src='/images/user-profile-cover.png'
            alt='User Profile Cover'
            width={350}
            height={87}
            className='object-cover rounded-t-[10px]'
          />
          <div className='flex items-center justify-center'>
            <Image
              src='/images/user-profile.png'
              alt='User Profile'
              width={100}
              height={100}
              className='object-cover -mt-16'
            />
          </div>
          <h2 className='text-[18px] font-subHeading text-center mt-0'>
            Albert Flores
          </h2>
          <div className='w-[70%] mx-auto mt-0'>
            <p className='text-body font-primary text-secondaryText text-center'>
              Senior Product Designer | UI/UX Designer | Graphic Designer |
              Web...
            </p>
            <p className='text-[12px] font-primary text-primaryText text-center mt-1'>
              Clinton, Maryland
            </p>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div className='bg-white w-[350px] h-[140px] rounded-[10px] shadow-md mb-4 flex flex-col p-4'>
        <div className='flex justify-between mt-1.5'>
          <span className='text-body font-primary text-secondaryText'>
            Profile Visitors
          </span>
          <span className='text-body font-primary text-primary'>140</span>
        </div>
        <hr
          className='my-2'
          style={{ borderColor: '#E9ECEF', borderWidth: '1px' }}
        />{' '}
        <div className='flex justify-between'>
          <span className='text-body font-primary text-secondaryText'>
            Resume Viewers
          </span>
          <span className='text-body font-primary text-primary'>20</span>
        </div>
        <hr
          className='my-2'
          style={{ borderColor: '#E9ECEF', borderWidth: '1px' }}
        />{' '}
        <div className='flex justify-between'>
          <span className='text-body font-primary text-secondaryText'>
            My Jobs
          </span>
          <span className='text-body font-primary text-primary'>88</span>
        </div>
      </div>
      {/* Third Card */}
      <div className='bg-white w-[350px] rounded-[10px] shadow-md p-3 mb-4 flex justify-between items-center'>
        <div>
          <h3 className='text-[16px] font-subHeading text-secondaryText'>
            My Calendar
          </h3>
          <p className='text-body font-primary text-menuText'>
            Upcoming Interviews
          </p>
        </div>
        <FaChevronDown className='text-secondaryText' />
      </div>
    </div>
  )
}

export default UserDetailsSidebar
