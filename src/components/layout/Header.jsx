import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header id="header" className="bg-gray-100 flex items-center justify-between border-b-2 border-gray-200/30 h-16">
            <h1 className='text-3xl'>Logo</h1>
            <nav>
                <ul className="flex mx-4 gap-10">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/about-us'}>Quem Somos</Link></li>
                    <li><Link href={'/members'}>Membros</Link></li>
                    <li><Link href={'/contact'}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header