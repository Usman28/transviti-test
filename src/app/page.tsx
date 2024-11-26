'use client'
import React from 'react'
import Header from './components/header'
import UserDetailsSidebar from './components/userDetailsSidebar'
import SearchPanel from './components/searchPanel'
import JobCard from './components/jobCard'

const Page = () => {
  const locationOptions = [
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
  ]

  const jobTypeOptions = [
    { value: 'full-time', label: 'Full-Time' },
    { value: 'part-time', label: 'Part-Time' },
  ]

  return (
    <div className='bg-background min-h-screen'>
      <Header />
      <div className='flex max-w-[2000px] mx-auto overflow-x-hidden'>
        <UserDetailsSidebar />
        <div className='flex-grow ml-8 mt-8 mr-8'>
          <h2 className='text-heading font-subHeading'>
            Find your Dream Job, <span className='text-primary'>Albert!</span>
          </h2>
          <p className='text-body font-primary text-primaryText'>
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>

          <SearchPanel
            locationOptions={locationOptions}
            jobTypeOptions={jobTypeOptions}
          />

          <div className='flex items-center mt-4'>
            <p className='text-menuText text-body font-primary font-[500] mr-4'>
              Similar:
            </p>
            <div className='flex space-x-4'>
              <button className='border border-menuText text-menuText text-[12px] font-primary font-[500] py-1 px-3 rounded'>
                Frontend
              </button>
              <button className='border border-menuText text-menuText text-[12px] font-primary font-[500] py-1 px-3 rounded'>
                Backend
              </button>
              <button className='border border-menuText text-menuText text-[12px] font-primary font-[500] py-1 px-3 rounded'>
                Graphic Designer
              </button>
            </div>
          </div>

          <div className='flex items-center mt-4'>
            <p className='text-secondaryText text-[18px] font-[500] mr-4'>
              Featured Jobs
            </p>
            <a href='#' className='text-primary text-body font-[500] underline'>
              See Featured Jobs
            </a>
          </div>

          {/* Cards Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4'>
            {Array.from({ length: 5 }).map((_, index) => (
              <JobCard
                key={index}
                isFeatured={true}
                title='UI/UX Designer'
                company='Teams'
                location='Seattle, USA'
                remote={true}
                time={'1 day ago'}
                numberOfApplicants={22}
                imageSrc='/images/ms-teams.webp'
              />
            ))}
          </div>

          <div className='flex items-center mt-4'>
            <p className='text-secondaryText text-[18px] font-[500] mr-4'>
              Recommended Jobs
            </p>
            <a href='#' className='text-primary text-body font-[500] underline'>
              See Recommended Jobs
            </a>
          </div>

          {/* Cards Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4'>
            {Array.from({ length: 5 }).map((_, index) => (
              <JobCard
                key={index}
                isFeatured={false}
                title='UI/UX Designer'
                company='Teams'
                location='Seattle, USA'
                remote={true}
                time={'1 day ago'}
                numberOfApplicants={22}
                imageSrc='/images/ms-teams.webp'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
