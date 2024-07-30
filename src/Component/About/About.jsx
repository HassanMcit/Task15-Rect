import React from 'react';

export default function About() {
    return (
        <>
            <div className='md:pt-40 pb-10 md:pb-20  flex flex-col space-y-7 justify-center items-center bg-[#1ABC9C]'>
                <div className='pt-32 text-center'>
                    <h2 className='uppercase text-3xl md:text-5xl font-bold text-white'>About component</h2>
                    <div className='flex justify-center items-center space-x-3 mt-6'>
                        <span className='block w-20 h-1 bg-white'></span>
                        <i className="fa-solid text-white fa-star" aria-hidden="true"></i>
                        <span className='block w-20 h-1 bg-white'></span>
                    </div>
                </div>
                <div className="container md:w-3/4">
                    <div className='grid text-white md:grid-cols-2 gap-x-7 gap-y-6 px-8'>
                        <div className='text-lg'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                        <div className='text-lg'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
