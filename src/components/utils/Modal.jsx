import React from 'react'

const Modal = ({children, open, toggleOpen, title}) => {

    return (
        <>
        {open ? (
            <div className="absolute left-0 top-0 bottom-0 right-0 bg-black/40 flex items-center content-center">
                <main className="min-w-40 min-h-30 bg-white rounded-xl px-20 py-10 mx-auto">
                    <div className='mb-4 flex justify-between'>
                        <h1 className='text-xl text-black font-semibold'>{title ?? 'Modal'}</h1>
                        <a href="#" className='text-white text-2xl text-black font-semibold rounded-full' onClick={() => toggleOpen(false)}>X</a>
                    </div>
                    {children}
                </main>
            </div>
        ) : null}
        </>
    )
}

export default Modal