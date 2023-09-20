'use client'

import React, {useState} from 'react'

const Card = (props) => {

  const handleDelete = async (idUser) => {
    const objUser = {
      id: idUser
    }
    
    const response = await fetch('http://localhost:5555/user',
      {
        cache: 'no-store',
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objUser)
      }
    )

    if(response.ok){
      const result = await response.json()
      if(result?.success){
        setShowCard(false)
      }
    }
  }
  

  const [showCard, setShowCard] = useState(true)

  return ( 
  <>
    { showCard ? (
    <div className="bg-gray-300/40 p-4 shadow-xl rounded-xl hover:scale-110 transition duration-300">
      <div className='flex'>
        <h1 className="text-center justify-center text-xl font-semibold">#{props.member?.id}</h1>
        <button className='ml-auto' onClick={() => handleDelete(props.member?.id)}>🗑️</button>
      </div>
      <div className="flex flex-wrap">
          <img src={props.member?.picture} className='object-cover w-32 h-32 p-4 rounded-full' alt="IMG"></img>
          <div className="flex flex-col justify-center">
              <p className='font-semibold'>{props.member?.name}</p>
              <p>{props.member?.email}</p>
          </div>
      </div>  
    </div>) : null}
  </>
  )
}

export default Card