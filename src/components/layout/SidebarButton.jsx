import React from 'react'

const SidebarButton = (props) => {
  return (
    <a className="transition-all h-12 duration-100 hover:border-b-4 hover:text-blue-500 border-blue-500" href={props.link}>
        <button className='w-full font-semibold'>{props.title}</button>
    </a>
  )
}

export default SidebarButton