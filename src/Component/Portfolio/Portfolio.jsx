import React, { useState } from 'react';
import image1 from '../../assets/port1.png';
import image2 from '../../assets/port2.png';
import image3 from '../../assets/port3.png';

export default function Portfolio() {
    const [image, setImage] = useState(0);
    const [press, setPress] = useState(false);

    function click(x) {
        let y = structuredClone(image);
        y = x;
        setPress(!press);
        setImage(y);
        console.log(press);
        console.log(x);
    }

    function closeImage() {
        setPress(!press);
    }



    return (
        <>
            <div className='container mx-auto my-9'>
                <div className='pt-32 text-center'>
                    <h2 className='uppercase text-2xl md:text-5xl font-bold text-[#2C3E50]'>Portfolio component</h2>
                    <div className='flex justify-center items-center space-x-4 mt-6'>
                        <span className='block w-20 h-1 bg-[#2C3E50]'></span>
                        <i className="fa-solid text-[#2C3E50] fa-star"></i>
                        <span className='block w-20 h-1 bg-[#2C3E50]'></span>
                    </div>
                </div>
                <div className='container mt-10 px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                        <div className="cursor-pointer group relative" onClick={() => { click(image1); }}>
                            <img src={image1} alt="Portfolio Image 1" className='rounded-xl w-full' />
                            <div className='absolute top-0 transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-xl flex justify-center items-center w-full h-full bg-[#1ABC9C] bg-opacity-85'>
                                <i className="fa-solid fa-plus fa-7x text-white"></i>
                            </div>
                        </div>
                        <div className="cursor-pointer group relative" onClick={() => { click(image2); }}>
                            <img src={image2} alt="Portfolio Image 2" className='rounded-xl w-full' />
                            <div className='absolute top-0 transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-xl flex justify-center items-center w-full h-full bg-[#1ABC9C] bg-opacity-85'>
                                <i className="fa-solid fa-plus fa-7x text-white"></i>
                            </div>
                        </div>
                        <div className="cursor-pointer group relative" onClick={() => { click(image3); }}>
                            <img src={image3} alt="Portfolio Image 3" className='rounded-xl w-full' />
                            <div className='absolute top-0 transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-xl flex justify-center items-center w-full h-full bg-[#1ABC9C] bg-opacity-85'>
                                <i className="fa-solid fa-plus fa-7x text-white"></i>
                            </div>
                        </div>
                        <div className="cursor-pointer group relative" onClick={() => { click(image1); }}>
                            <img src={image1} alt="Portfolio Image 1" className='rounded-xl w-full' />
                            <div className='absolute top-0 transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-xl flex justify-center items-center w-full h-full bg-[#1ABC9C] bg-opacity-85'>
                                <i className="fa-solid fa-plus fa-7x text-white"></i>
                            </div>
                        </div>
                        <div className="cursor-pointer group relative" onClick={() => { click(image2); }}>
                            <img src={image2} alt="Portfolio Image 2" className='rounded-xl w-full' />
                            <div className='absolute top-0 transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-xl flex justify-center items-center w-full h-full bg-[#1ABC9C] bg-opacity-85'>
                                <i className="fa-solid fa-plus fa-7x text-white"></i>
                            </div>
                        </div>
                        <div className="cursor-pointer group relative" onClick={() => { click(image3); }}>
                            <img src={image3} alt="Portfolio Image 3" className='rounded-xl w-full' />
                            <div className='absolute top-0 transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-xl flex justify-center items-center w-full h-full bg-[#1ABC9C] bg-opacity-85'>
                                <i className="fa-solid fa-plus fa-7x text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${press  ? `flex` :  `hidden`} fixed inset-0 bg-slate-700 bg-opacity-50  justify-center items-center z-50`} onClick={closeImage}>
                <img src={image} className='mt-24 md:w-2/4 rounded-xl' onClick={closeImage}/>
            </div>

        </>
    )
}
