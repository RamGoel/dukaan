import React from 'react'
import SearchInput from '../header/atoms/search-input/search-input.component'
import SortIcon from '../../media/icons/SortIcon'
import DownloadIcon from '../../media/icons/DownloadIcon'

const TableActionBar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='w-1/4'>
        <SearchInput placeholder='Search by Order ID...' customClass='rounded-md border-[1.5px] py-2' />
      </div>
      <div className='flex items-center justify-between'>
          <div className='h-[32px] flex items-center justify-between border-[1.5px] rounded-sm px-2 py-1 '>
            <p className='text-sm mr-1'>Sort</p>
            <SortIcon size={13} />
          </div>
          <div className='h-[32px] ml-2 w-[32px] flex items-center justify-between border-[1.5px] rounded-sm px-2 py-1 '>
            <DownloadIcon size={15} />
          </div>
        </div>
    </div>
  )
}

export default TableActionBar