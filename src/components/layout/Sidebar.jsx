import React from 'react'
import SidebarButton from './SidebarButton'

const Sidebar = () => {
  return (
    <div className='min-h-screen bg-gray-100 border-r-2 border-gray-200/30 w-1/12 overflow-hidden hidden lg:block'>
        <div className='flex flex-col gap-y-8 h-full justify-center'>
            <SidebarButton title="Home" link="/" />
            <SidebarButton title="Membros" link="/members"/>
            <SidebarButton title="Quem Somos" link="/about-us" />
            <SidebarButton title="Contato" link="/contact"/>
        </div>
    </div>
  )
}

export default Sidebar