import React from 'react'
import SidebarMeta from "./atoms/sidebar-meta/sidebar-meta.component"
import { sidebarLinksConfig } from './sidebar.constants'
import SidebarLink from './atoms/sidebar-link/sidebar-link.component'
import CreditsCard from '../credits-card/credits-card.component'

const Sidebar = () => {
  return (
    <div className='hidden md:block h-screen p-3 fixed w-1/5 bg-blue-950'>  
      <SidebarMeta />
      <div className='max-h-screen xl:max-h-[70%]'>
        {
        sidebarLinksConfig.map(item => {
          return <SidebarLink {...item} />
        })
      }
      </div>
      <CreditsCard />
    </div>
  )
}

export default Sidebar