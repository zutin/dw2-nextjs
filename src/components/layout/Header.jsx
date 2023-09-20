import React from 'react'

const Header = () => {
    return (
        <header id="header" className="bg-gray-100 flex items-center justify-between border-b-2 border-gray-200/30 h-16">
            <h1>Logo</h1>
            <nav>
                <ul className="flex mx-4 gap-10">
                    <li>Home</li>
                    <li>Quem Somos</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header