import React from 'react'
import SearchIcon from '../../../../media/icons/SearchIcon'

const SearchInput = () => {
  return (
    <div className='p-3 w-full rounded-lg flex items-center justify-center bg-gray-100'>
      <div className='px-1'>
        <SearchIcon />
      </div>
      <input placeholder='Search features, tutorials, etc.' className='ml-2 text-xs bg-transparent focus-visible:outline-none w-full' />
    </div>
  )
}

export default SearchInput