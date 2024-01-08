import React from 'react'
import SelectArrowIcon from '../../media/icons/SelectArrowIcon'

const TransactionHeader = () => {
  return (
    <div className=' p-3 w-full flex my-3 items-center justify-between'>
      <h3 className='text-lg font-semibold'>Overview</h3>
      <div className='h-[32px] opacity-80 flex items-center justify-between border-[1.5px] rounded-md px-2 py-1 '>
        <p className='text-xs mr-2'>Last Month</p>
        <SelectArrowIcon size={10} />
      </div>
    </div>
  )
}

export default TransactionHeader