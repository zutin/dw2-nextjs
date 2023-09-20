import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-500 rounded-full p-2 text-white'>{props.title}</button>
  )
}

export default Button