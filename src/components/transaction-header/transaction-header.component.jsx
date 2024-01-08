import React from 'react'

const options = [
  "Last Month",
  // "Last 3 Months",
  // "Last 6 Months",
  // "Last Year"
]
const TransactionHeader = () => {
  return (
    <div className=' p-3 w-full flex my-3 items-center justify-between'>
      <h3 className='text-lg font-semibold'>Overview</h3>
      <select className='p-[5px] text-sm text-gray-500 rounded-md focus-visible:outline-none bg-transparent border-[1.5px]'>
        {
          options.map(item => <option className='text-sm p-[5px]'>{item}</option>)
        }
      </select>
    </div>
  )
}

export default TransactionHeader