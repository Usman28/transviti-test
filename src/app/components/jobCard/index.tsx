'use client'
import React from 'react'
import Image from 'next/image'
import { LocationIcon, ClockIcon, SaveIcon } from '@/icons'

interface JobCardProps {
  title: string
  company: string
  location: string
  remote: boolean
  imageSrc: string
  time: string
  numberOfApplicants: number
  isFeatured: boolean
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  remote,
  imageSrc,
  time,
  numberOfApplicants,
  isFeatured,
}) => {
  return (
    <div className='bg-white border rounded-[10px] shadow-md w-full p-4 sm:p-5 flex flex-col min-h-[180px]'>
      {isFeatured && <p className='text-[10px] font-[600] mb-1'>Promoted</p>}

      <div className='flex items-start mb-2'>
        <Image
          src={imageSrc}
          alt={company}
          width={26}
          height={23.5}
          className='mr-3 flex-shrink-0'
        />
        <div className='flex flex-col min-w-0 flex-1'>
          <p className='text-secondaryText text-body font-[500] break-words'>
            {title}
          </p>
          <p className='text-[12px] text-body font-[500] mb-0 break-words'>
            {company}
          </p>
        </div>
      </div>

      <div className='flex items-start mt-2 min-w-0'>
        <span className='mr-2 flex-shrink-0 mt-1'>
          <LocationIcon />
        </span>
        <p className='text-primaryText text-[12px] font-[500] break-words'>
          {location} {remote ? '(Remote)' : ''}
        </p>
      </div>

      <div className='flex items-start mt-2 min-w-0'>
        <span className='mr-2 flex-shrink-0 mt-1'>
          <ClockIcon />
        </span>
        <p className='text-primaryText text-[12px] font-[500] break-words'>
          {time} |{' '}
          <span className='text-primary'>{numberOfApplicants} applicants</span>
        </p>
      </div>

      <div className='flex items-center justify-between mt-auto pt-3 gap-3'>
        <div className='flex justify-center flex-1'>
          <button className='bg-primary text-white text-[12px] font-[500] rounded-[10px] w-full py-2 hover:bg-primary/90 transition-colors duration-200'>
            Apply Now
          </button>
        </div>
        <button className='flex-shrink-0 hover:opacity-80 transition-opacity duration-200'>
          <SaveIcon />
        </button>
      </div>
    </div>
  )
}

export default JobCard
