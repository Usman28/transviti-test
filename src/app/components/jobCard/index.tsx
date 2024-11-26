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
    <div
      className='bg-white border rounded shadow-md w-full'
      style={{
        height: '180px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 20px 10px 20px',
      }}
    >
      {isFeatured && <p className='text-[10px] font-[600] mb-1'>Promoted</p>}

      <div className='flex items-center mb-2'>
        <Image
          src={imageSrc}
          alt={company}
          width={26}
          height={23.5}
          className='mr-3' // Margin right for spacing
        />
        <div className='flex flex-col'>
          <p className='text-secondaryText text-body font-[500]'>{title}</p>
          <p className='text-[12px] text-body font-[500] mb-0'>{company}</p>
        </div>
      </div>
      <div className='flex items-center mt-auto mb-1'>
        <span className='mr-2'>
          <LocationIcon />
        </span>
        <p className='text-primaryText text-[12px] font-[500]'>
          {location} {remote ? '(Remote)' : ''}
        </p>
      </div>
      <div className='flex items-center mb-1'>
        <span className='mr-2'>
          <ClockIcon />
        </span>
        <p className='text-primaryText text-[12px] font-[500]'>
          {time} |{' '}
          <span className='text-primary'>{numberOfApplicants} applicants</span>
        </p>
      </div>
      <div className='flex items-center justify-between mt-auto'>
        <div className='flex justify-center w-full'>
          <button
            className='bg-primary text-white text-[12px] font-[500] rounded'
            style={{
              width: '80%',
              height: '30px',
              borderRadius: '10px',
              marginRight: '5px',
            }}
          >
            Apply Now
          </button>
        </div>
        <span className='mr-1'>
          <SaveIcon />
        </span>
      </div>
    </div>
  )
}

export default JobCard
