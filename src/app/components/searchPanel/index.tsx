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
    <div className='bg-white rounded-[10px] h-[80px] w-[calc(100%-1rem)] flex items-center p-2 mt-4'>
      {/* Job Title Input */}
      <input
        type='text'
        placeholder='Job Title, Company, or Keywords'
        className='border-none text-body font-primary text-primaryText w-[50%] p-2 placeholder:text-[#585D6E] focus:outline-none focus:ring-0'
      />

      {/* Separator */}
      <span className='mx-2 text-[#E9ECEF]'>|</span>

      {/* Location Dropdown using react-select */}
      <Select
        options={locationOptions}
        className='w-[20%] mx-2'
        classNamePrefix='react-select'
        placeholder='Select location'
        styles={customStyles} // Apply custom styles
      />

      {/* Separator */}
      <span className='mx-2 text-[#E9ECEF]'>|</span>

      {/* Job Type Dropdown using react-select */}
      <Select
        options={jobTypeOptions}
        className='w-[20%]'
        classNamePrefix='react-select'
        placeholder='Job Type'
        styles={customStyles} // Apply custom styles
      />

      {/* Separator */}
      <span className='mx-2 text-[#E9ECEF]'>|</span>

      {/* Search Button */}
      <button className='bg-primary text-white text-[14px] font-primary h-[40px] flex items-center justify-center p-2 ml-2 w-[15%] rounded-[10px] mr-2'>
        <FaSearch className='mr-2' />
        Search
      </button>
    </div>
  )
}

export default SearchPanel
