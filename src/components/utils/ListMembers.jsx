'use client'

import {useState, useEffect} from 'react'
import Card from '@/components/cards/Member'
import Modal from './Modal'

const ListMembers = () => {
    const [members, setMembers] = useState([])
    const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false)

    useEffect(() => {
        const getMembers = async () => {
            const response = await fetch('http://localhost:5555/user/list', {cache: 'no-store'})
            const data = await response.json()
            setMembers(data)
        }
        getMembers()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newMember = {
            name: event.target.name.value,
            email: event.target.email.value,
            picture: event.target.picture.value,
            pass: event.target.pass.value
        }

        const response = await fetch('http://localhost:5555/user',
            {
                cache: 'no-store',
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newMember)
            }
        )

        if(response.ok){
            const result = await response.json()
            if(result?.success){
                setMembers([...members, result.user])
            }
        }
    }

    return (
        <>
            <h1 className="text-3xl font-semibold mt-8 text-center">Member list</h1>
            <button className='bg-blue-500 text-white shadow-lg p-3 rounded-full mx-auto flex mt-6 transition duration-200 hover:scale-105' onClick={() => setIsModalSignUpOpen(true)}>New member</button>
            <div className="flex flex-wrap gap-8 my-8 justify-center">
            {
            members.map((member) => {
                return (
                <Card key={member.id} member={member}/>
                )
            })
            }
            </div>
            
            <Modal open={isModalSignUpOpen} toggleOpen={setIsModalSignUpOpen} title="New member">
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    Name: <input type='text' className='rounded-full bg-gray-100 shadow focus:outline-blue-500 p-1 font-semibold mb-4' name='name' />
                    Email: <input type='text' className='rounded-full bg-gray-100 shadow focus:outline-blue-500 p-1 font-semibold mb-4' name='email' />
                    Picture: <input type='text' className='rounded-full bg-gray-100 shadow focus:outline-blue-500 p-1 font-semibold mb-4' name='picture' />
                    Password: <input type='password' className='rounded-full bg-gray-100 shadow focus:outline-blue-500 p-1 font-semibold mb-4' name='pass' />
                    <input type='submit' className='bg-blue-500 text-white shadow-lg p-3 rounded-full mt-4 hover:cursor-pointer focus:bg-white focus:text-blue-500 focus:outline-blue-500' value="Register"/>
                </form>
            </Modal>
        </>
    )
}

export default ListMembers