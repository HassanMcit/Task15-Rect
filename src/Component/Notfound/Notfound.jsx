import React from 'react';

export default function Notfound() {
    return (
        <>
            <div className='h-screen flex justify-center items-center bg-[#1ABC9C]'>
                <div className='text-3xl md:text-5xl font-bold text-white text-center mt-10'>
                    Page Not Found
                    <p className='my-4'>This page doesn’t exist.</p>
                </div>
            </div>
        </>
    )
}
