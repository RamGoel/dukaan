import React from 'react'

const SidebarLink = ({icon=<p>?</p>, title}) => {
  return (
      <div className='w-[90%] flex hover:opacity-100 opacity-70 rounded-md cursor-pointer items-center p-2  mx-auto my-2'>
          <div className='w-[15%]'>
              {icon}
          </div>
          <div className='w-[80%]'>
              <h6 className='text-white text-sm'>{title}</h6>
          </div>
    </div>
  )
}

export default SidebarLink