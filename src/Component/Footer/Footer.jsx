import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-[#2C3E50]">
                <div className="container mx-auto p-4 py-20">
                    <div className="flex flex-col md:flex-row justify-center text-center text-white">
                        <div className="w-full md:w-1/3 p-4">
                            <h2 className="uppercase font-bold text-3xl">Location</h2>
                            <address className="my-4 text-xl not-italic">
                                2215 John Daniel Drive<br />
                                Clark, MO 65243
                            </address>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <h2 className="uppercase font-bold text-3xl">Around The Web</h2>
                            <div className="flex justify-center items-center gap-2 py-3">
                                <a href="https://www.facebook.com" aria-label="Facebook" className="border-2 p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.twitter.com" aria-label="Twitter" className="border-2 p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com" aria-label="LinkedIn" className="border-2 p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" aria-label="Website" className="border-2 p-2 rounded-full w-[40px] h-[40px] flex justify-center items-center">
                                    <i className="fas fa-globe"></i>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <h2 className="uppercase font-bold text-3xl">About Freelancer</h2>
                            <p className="my-2 text-[1.05rem]">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-[#17212A] items-center justify-center">
                    <span className="text-md p-5 md:p-7 text-white">Copyright © Your Website 2021.</span>
                </div>
            </footer>


        </>
    )
}
