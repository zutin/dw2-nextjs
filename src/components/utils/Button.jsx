import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-blue-500 rounded-full p-2 text-white'>{children}</button>
  )
}

export default Button