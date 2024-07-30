import React from 'react';

export default function Notfound() {
    return (
        <>
            <div className='h-screen flex justify-center items-center bg-[#1ABC9C]'>
                <div className='text-5xl font-bold text-white text-center'>
                    Page Not Found
                    <p className='my-4'>This page doesn’t exist.</p>
                </div>
            </div>
        </>
    )
}
