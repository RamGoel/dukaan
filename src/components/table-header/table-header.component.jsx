import React from 'react'
import DropdownIcon from '../../media/icons/DropdownIcon'
import InfoIcon from '../../media/icons/InfoIcon'

const TableHeader = () => {
  return (
    <thead className=''>
      <tr className=' bg-gray-100 w-full rounded-sm'>
        <th className='text-xs p-2 font-normal'>Order ID</th>
        <th className='text-xs p-2 font-normal flex items-center justify-center'><span className='mr-1'>Order date</span> <DropdownIcon size={10} /></th>
        <th className='text-xs p-2 font-normal'>Order amount</th>
        <th className='text-xs p-2 font-normal flex items-center justify-center'><span className='mr-1'>Transaction fees</span> <InfoIcon size={13} /></th>
      </tr>
    </thead>
  )
}

export default TableHeader