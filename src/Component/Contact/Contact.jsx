import React, { useState } from 'react';

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='container mx-auto my-9'>
                <div className='pt-32 text-center'>
                    <h2 className='uppercase text-3xl md:text-5xl font-bold text-[#2C3E50]'>Contact Section</h2>
                    <div className='flex justify-center items-center space-x-3 mt-6'>
                        <span className='block w-20 h-1 bg-[#2C3E50]'></span>
                        <i className="fa-solid text-[#2C3E50] fa-star" aria-hidden="true"></i>
                        <span className='block w-20 h-1 bg-[#2C3E50]'></span>
                    </div>
                </div>
                <div className='container mt-10 px-4'>
                    <form className="md:w-2/4 mx-auto" onSubmit={handleSubmit}>
                        <div className="relative z-0 w-full mb-11 group">
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className="block py-2.5 px-0 w-full text-xl pt-10 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray peer" 
                                placeholder=""  
                                required 
                                aria-label="User Name"
                            />
                            <label 
                                htmlFor="name" 
                                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                User Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-11 group">
                            <input 
                                type="number" 
                                name="age" 
                                id="age" 
                                className="block py-2.5 px-0 w-full text-xl pt-10 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-gray peer" 
                                placeholder=" "  
                                required 
                                aria-label="User Age"
                            />
                            <label 
                                htmlFor="age" 
                                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                User Age
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-11 group">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="block py-2.5 px-0 w-full text-xl pt-10 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray peer" 
                                placeholder=" "  
                                required 
                                aria-label="Email"
                            />
                            <label 
                                htmlFor="email" 
                                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-11 group">
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                className="block py-2.5 px-0 w-full text-xl pt-10 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray peer" 
                                placeholder=" "  
                                required 
                                aria-label="Password"
                            />
                            <label 
                                htmlFor="password" 
                                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                User Password
                            </label>
                        </div>
                        <button 
                            type="submit" 
                            className="text-white bg-[#1ABC9C] focus:outline-none font-medium rounded-lg text-md w-fit sm:w-auto px-5 py-2.5 text-center dark:bg-[#1ABC9C] "
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
