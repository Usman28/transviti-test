'use client'
import React from 'react'
import { motion } from 'framer-motion'
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  }

  const slideInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className='bg-background min-h-screen'>
      <Header />
      <div className='flex flex-col [@media(min-width:768px)]:flex-row max-w-full mx-auto'>
        <motion.div
          className='flex justify-center [@media(min-width:768px)]:justify-start'
          initial='hidden'
          animate='visible'
          variants={slideInLeft}
          transition={{ duration: 0.5 }}
        >
          <UserDetailsSidebar />
        </motion.div>
        <motion.div
          className='flex-1 px-4 [@media(min-width:768px)]:px-8 mt-8 min-w-0'
          initial='hidden'
          animate='visible'
          variants={slideInRight}
          transition={{ duration: 0.5 }}
        >
          <div className='max-w-full'>
            <motion.h2
              className='text-heading font-subHeading'
              initial='hidden'
              animate='visible'
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              Find your Dream Job, <span className='text-primary'>Albert!</span>
            </motion.h2>
            <motion.p
              className='text-body font-primary text-primaryText'
              initial='hidden'
              animate='visible'
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              Explore the latest job openings and apply for the best
              opportunities available today!
            </motion.p>

            <SearchPanel
              locationOptions={locationOptions}
              jobTypeOptions={jobTypeOptions}
            />

            <div className='mt-4'>
              <div className='flex flex-col [@media(min-width:812px)]:flex-row [@media(min-width:812px)]:items-center gap-3 [@media(min-width:812px)]:gap-0'>
                <p className='text-menuText text-body font-primary font-[500] [@media(min-width:812px)]:mr-4 whitespace-nowrap'>
                  Similar:
                </p>
                <div className='flex flex-wrap [@media(min-width:812px)]:flex-nowrap gap-3 [@media(min-width:812px)]:space-x-4'>
                  <button className='border border-menuText text-menuText text-[12px] font-primary font-[500] py-1 px-3 rounded whitespace-nowrap hover:bg-menuText hover:text-white transition-colors duration-200'>
                    Frontend
                  </button>
                  <button className='border border-menuText text-menuText text-[12px] font-primary font-[500] py-1 px-3 rounded whitespace-nowrap hover:bg-menuText hover:text-white transition-colors duration-200'>
                    Backend
                  </button>
                  <button className='border border-menuText text-menuText text-[12px] font-primary font-[500] py-1 px-3 rounded whitespace-nowrap hover:bg-menuText hover:text-white transition-colors duration-200'>
                    Graphic Designer
                  </button>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between mt-4 flex-wrap gap-2'>
              <p className='text-secondaryText text-[18px] font-[500]'>
                Featured Jobs
              </p>
              <a
                href='#'
                className='text-primary text-body font-[500] underline'
              >
                See Featured Jobs
              </a>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
              {Array.from({ length: 5 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial='hidden'
                  animate='visible'
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                >
                  <JobCard
                    isFeatured={true}
                    title='UI/UX Designer'
                    company='Teams'
                    location='Seattle, USA'
                    remote={true}
                    time={'1 day ago'}
                    numberOfApplicants={22}
                    imageSrc='/images/ms-teams.webp'
                  />
                </motion.div>
              ))}
            </div>

            <div className='flex items-center justify-between mt-4 flex-wrap gap-2'>
              <p className='text-secondaryText text-[18px] font-[500]'>
                Recommended Jobs
              </p>
              <a
                href='#'
                className='text-primary text-body font-[500] underline'
              >
                See Recommended Jobs
              </a>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
              {Array.from({ length: 5 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial='hidden'
                  animate='visible'
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                >
                  <JobCard
                    isFeatured={false}
                    title='UI/UX Designer'
                    company='Teams'
                    location='Seattle, USA'
                    remote={true}
                    time={'1 day ago'}
                    numberOfApplicants={22}
                    imageSrc='/images/ms-teams.webp'
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Page
