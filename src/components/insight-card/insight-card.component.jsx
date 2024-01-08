import React from 'react'

const InsightCard = ({ title, value }) => {
    return (
        <div className='w-[48%] rounded-lg shadow-md bg-white  p-4'>
            <p className='text-gray-500 text-sm my-2'>{title}</p>
            <h1 className='text-2xl font-semibold'>{value}</h1>
        </div>
    )
}

export default InsightCard