import React from 'react'

const IconBg = ({ component }) => {

    if (!component) {
        throw new Error('Component is Required');
    }
    return (
        <div className='w-[35px] mx-1 flex hover:bg-gray-300 cursor-pointer items-center justify-center h-[35px] p-[10px] rounded-full bg-gray-200'>
            {component}
        </div>
    )
}

export default IconBg