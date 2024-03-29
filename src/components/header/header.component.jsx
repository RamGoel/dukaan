import React from 'react'
import HelpIcon from '../../media/icons/HelpIcon'
import SearchInput from './atoms/search-input/search-input.component'
import IconBg from './atoms/icon-bg/icon-bg.component'
import AnnouncementIcon from '../../media/icons/AnnouncementIcon'
import DropdownIcon from '../../media/icons/DropdownIcon'

const Header = () => {
    return (
        <div className='w-full border-b-[1.5px] flex items-center p-3 '>
            <div className='w-1/3 flex items-center justify-start'>
                <div className='w-[100px]'>
                    <p className='text-md m-0 p-0 ml-1'>Payments</p>
                </div>
                <div className='hidden md:flex w-[120px] items-center justify-center'>
                    <HelpIcon size={15} />
                    <p className='text-sm m-0 p-0 ml-1'>How it works</p>
                </div>
            </div>

            <div className='w-1/3'>
                <SearchInput placeholder='Search features, tutorials, etc.' customClass='bg-gray-100' />
            </div>

            <div className='w-1/3 mx-2 flex items-center justify-end'>
                    <IconBg component={<AnnouncementIcon size={18} />} />
                    <IconBg component={<DropdownIcon size={14} />} />
            </div>
        </div>
    )
}

export default Header