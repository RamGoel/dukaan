import React from 'react'
import SearchIcon from '../../../../media/icons/SearchIcon'

const SearchInput = ({placeholder='Type something...', customClass='bg-gray-100'}) => {
  return (
    <div className={`p-3 w-full rounded-lg flex items-center justify-center ${customClass}`}>
      <div className='px-1'>
        <SearchIcon />
      </div>
      <input placeholder={placeholder} className='ml-2 text-xs bg-transparent focus-visible:outline-none w-full' />
    </div>
  )
}

export default SearchInput