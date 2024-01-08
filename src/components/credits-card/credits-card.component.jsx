import React from 'react'
import WalletIcon from '../../media/icons/WalletIcon'

const CreditsCard = () => {
  return (
      <div className='bg-gray-200 flex items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-3 rounded-md absolute bottom-5 w-10/12 '>
          <div className='bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-[40px] h-[40px] rounded-md flex items-center justify-center'>
              <WalletIcon size={25} />
          </div>
          <div className='w-2/3 ml-2'>
              <p className='text-white text-xs my-0'>Available Credits</p>
              <p className='text-white text-lg my-0'>222.10</p>
          </div>
    </div>
  )
}

export default CreditsCard