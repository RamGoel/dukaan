import React from 'react'

const SidebarLink = ({icon=<p>?</p>, title}) => {
  return (
      <div className='w-[90%] flex hover:opacity-100 opacity-70 rounded-md cursor-pointer items-center p-[6.5px] mx-auto my-[4px]'>
          <div className='w-[20%]'>
              {icon}
          </div>
          <div className='w-[80%]'>
              <h6 className='text-white text-xs'>{title}</h6>
          </div>
    </div>
  )
}

export default SidebarLink