import React from 'react'
import SidebarMeta from "./atoms/sidebar-meta/sidebar-meta.component"
import { sidebarLinksConfig } from './sidebar.constants'
import SidebarLink from './atoms/sidebar-link/sidebar-link.component'

const Sidebar = () => {
  return (
    <div className='h-screen p-4 fixed w-1/5 bg-blue-950'>  
      <SidebarMeta />
      {
        sidebarLinksConfig.map(item => {
          return <SidebarLink {...item} />
        })
      }
    </div>
  )
}

export default Sidebar