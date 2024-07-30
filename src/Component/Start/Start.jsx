import React from 'react'
import image from '../../assets/avataaars.svg'

export default function Start() {
    return (
        <>
            <div className='pt-40 md:pb-20 flex flex-col space-y-7 justify-center items-center bg-[#1ABC9C]'>
                <div className='w-1/2 md:w-[18%]'>
                    <img src={image} className='w-full' alt="image1" />
                </div>
                <div className='text-center'>
                    <h2 className='uppercase text-3xl md:text-5xl font-bold text-white'>start framework</h2>
                    <div className='flex justify-center items-center space-x-7 mt-6'>
                        <span className='block w-24 h-1 bg-white'></span>
                        <i className="fa-solid text-white fa-star" aria-hidden="true"></i>
                        <span className='block w-24 h-1 bg-white'></span>
                    </div>
                    <p className='mt-5 mdtext-lg text-white'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
