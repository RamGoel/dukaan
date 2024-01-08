import React from 'react'
import Sidebar from '../../components/sidebar/sidebar.component'
import Header from '../../components/header/header.component'

const DashboardLayout = ({component}) => {
    return (
        <div className='flex'>
            <div className='hidden md:block w-1/5'>
                <Sidebar />
            </div>
            <div className='w-screen md:w-4/5'>
                <Header />
                {component}
            </div>
        </div>
    )
}

export default DashboardLayout