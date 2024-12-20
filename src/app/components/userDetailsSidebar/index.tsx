import React, { useState } from 'react'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'

const UserDetailsSidebar = () => {
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false)

  return (
    <div className='flex flex-col items-start ml-[50px] mt-8'>
      {/* First card */}
      <div className='flex items-center mb-4'>
        <div className='bg-white w-[350px] h-[250px] rounded-[10px] shadow-md flex flex-col'>
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
        />
        <div className='flex justify-between'>
          <span className='text-body font-primary text-secondaryText'>
            Resume Viewers
          </span>
          <span className='text-body font-primary text-primary'>20</span>
        </div>
        <hr
          className='my-2'
          style={{ borderColor: '#E9ECEF', borderWidth: '1px' }}
        />
        <div className='flex justify-between'>
          <span className='text-body font-primary text-secondaryText'>
            My Jobs
          </span>
          <span className='text-body font-primary text-primary'>88</span>
        </div>
      </div>

      {/* Third Card with expansion */}
      <div className='w-[350px]'>
        <div
          onClick={() => setIsCalendarExpanded(!isCalendarExpanded)}
          className='bg-white rounded-t-[10px] shadow-md p-3 flex justify-between items-center cursor-pointer'
        >
          <div>
            <h3 className='text-[16px] font-subHeading text-secondaryText'>
              My Calendar
            </h3>
            <p className='text-body font-primary text-menuText'>
              Upcoming Interviews
            </p>
          </div>
          <FaChevronDown
            className={`text-secondaryText transition-transform duration-300 ${
              isCalendarExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>

        {/* Expanded Content */}
        <div
          className={`bg-white rounded-b-[10px] shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
            isCalendarExpanded ? 'max-h-[300px] p-4' : 'max-h-0'
          }`}
        >
          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <div>
                <h4 className='text-[14px] font-subHeading text-primaryText'>
                  Product Designer Interview
                </h4>
                <p className='text-[12px] font-primary text-secondaryText'>
                  Google Inc.
                </p>
              </div>
              <span className='text-[12px] font-primary text-primary'>
                Today, 4:00 PM
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <h4 className='text-[14px] font-subHeading text-primaryText'>
                  UI/UX Designer Interview
                </h4>
                <p className='text-[12px] font-primary text-secondaryText'>
                  Apple Inc.
                </p>
              </div>
              <span className='text-[12px] font-primary text-primary'>
                Tomorrow, 11:00 AM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetailsSidebar
