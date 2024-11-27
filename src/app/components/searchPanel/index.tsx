/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Select from 'react-select'
import { FaSearch } from 'react-icons/fa'

interface SearchPanelProps {
  locationOptions: { value: string; label: string }[]
  jobTypeOptions: { value: string; label: string }[]
}

const SearchPanel: React.FC<SearchPanelProps> = ({
  locationOptions,
  jobTypeOptions,
}) => {
  // Custom styles for react-select
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'white',
      border: 'none',
      boxShadow: 'none',
      borderRadius: '25px',
      fontSize: '14px',
      color: '#585D6E',
      fontWeight: 500,
      minHeight: '40px',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#585D6E',
      fontSize: '14px',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#585D6E',
      fontSize: '14px',
    }),
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      color: state.isSelected ? 'white' : '#585D6E',
      backgroundColor: state.isSelected ? '#0154AA' : 'white',
      fontSize: '14px',
      '&:hover': {
        backgroundColor: '#0154AA',
        color: 'white',
      },
    }),
  }

  return (
    <div className='bg-white rounded-[10px] w-full p-4 mt-4'>
      <div className='flex flex-col [@media(min-width:1280px)]:flex-row items-stretch gap-4'>
        {/* Search Input */}
        <div className='flex-1 min-w-0'>
          <input
            type='text'
            placeholder='Job Title, Company, or Keywords'
            className='w-full border-none text-body font-primary text-primaryText p-2 placeholder:text-[#585D6E] focus:outline-none focus:ring-0'
          />
        </div>

        {/* Filters and Button Container */}
        <div className='flex flex-col [@media(min-width:1280px)]:flex-row gap-4'>
          {/* Location Select */}
          <div className='w-full [@media(min-width:1280px)]:w-[180px]'>
            <Select
              options={locationOptions}
              classNamePrefix='react-select'
              placeholder='Select location'
              styles={customStyles}
            />
          </div>

          {/* Job Type Select */}
          <div className='w-full [@media(min-width:1280px)]:w-[180px]'>
            <Select
              options={jobTypeOptions}
              classNamePrefix='react-select'
              placeholder='Job Type'
              styles={customStyles}
            />
          </div>

          {/* Search Button */}
          <button className='w-full [@media(min-width:1280px)]:w-auto bg-primary text-white text-[14px] font-primary h-[40px] flex items-center justify-center px-6 rounded-[10px] hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap'>
            <FaSearch className='mr-2' />
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchPanel
