import { ArrowDown2 } from 'iconsax-react';
import React from 'react'
import HomeIcon from '../../../../media/icons/home.icon';
import DownArrowIcon from '../../../../media/icons/down-arrow.icon';

const StoreData = {
    image: require('../../../../media/logo.png'),
    name: 'Nishyan',
    link: {
        title: 'Visit Store',
        url: '#'
    }
}
const SidebarMeta = () => {
    return (
        <div className='flex items-center p-2'>
            <div className='bg-white rounded-md w-[50px] flex items-center justify-center h-[50px]'>
                <img src={StoreData.image} alt='store' className='w-[90%] ' />
            </div>
            <div className='w-[50%] mx-auto'>
                <h4 className='text-md text-white'>{StoreData.name}</h4>
                <a href={StoreData.link.url} className='text-xs mt-2 underline text-gray-200'>{StoreData.link.title}</a>
            </div>
            <div className='w-[10%]'>
                <DownArrowIcon size={15} />
            </div>
        </div>
    )
}

export default SidebarMeta;