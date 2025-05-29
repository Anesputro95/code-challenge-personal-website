import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <div className="bg-black w-full py-8 px-4 md:px-0">
            <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-0 items-center md:items-start justify-between">
                {/* Contact Section */}
                <div className='flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3'>
                    <h1 className="text-sky-800 text-xl font-black">
                        CONTACT
                    </h1>
                    <div className="text-white font-light text-sm flex flex-col gap-2">
                        <p>
                            Jl. Bedeng Rt/Rw 03/10 No.10<br />
                            Kelurahan Grogol, Kecamatan Limo,<br />
                            Kota Depok.
                        </p>
                        <a
                            href="mailto:anes.putro@gmail.com"
                            className="cursor-pointer"
                        >
                            <p className="w-fit text-red-500 font-bold hover:bg-white rounded-full px-2">
                                anes.putro@gmail.com
                            </p>
                        </a>
                        <div className='flex gap-4 mt-2'>
                            <a
                                href="https://www.instagram.com/anesputro/"
                                className='cursor-pointer hover:bg-sky-500 p-1 rounded transition-colors'
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.youtube.com/@anesputro3996"
                                className='cursor-pointer hover:bg-sky-500 p-1 rounded transition-colors'
                                aria-label="YouTube"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation Links - Hidden on smallest screens */}
                <div className='hidden sm:flex flex-col gap-4 text-white font-black w-full md:w-1/3'>
                    <div className='flex flex-wrap gap-6 justify-center md:justify-start'>
                        <a href="/" className='hover:text-sky-500 transition-colors'>
                            HOME
                        </a>
                        <a href="/profile" className='hover:text-sky-500 transition-colors'>
                            PROFILE
                        </a>
                        <a href="/about" className='hover:text-sky-500 transition-colors'>
                            ABOUT
                        </a>
                        <a href="/mywork" className='hover:text-sky-500 transition-colors'>
                            PORTOFOLIO
                        </a>
                        <a href="/contact" className='hover:text-sky-500 transition-colors'>
                            CONTACT
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation - Simple version for small screens */}
                <div className='sm:hidden flex flex-wrap gap-4 justify-start text-white font-black w-full mt-4'>
                    <a href="/" className='hover:text-sky-500 transition-colors text-sm'>
                        HOME
                    </a>
                    <a href="/contact" className='hover:text-sky-500 transition-colors text-sm'>
                        CONTACT
                    </a>
                    <a href="/profile" className='hover:text-sky-500 transition-colors text-sm'>
                        PROFILE
                    </a>
                    <a href="/about" className='hover:text-sky-500 transition-colors'>
                        ABOUT
                    </a>
                    <a href="/mywork" className='hover:text-sky-500 transition-colors'>
                        PORTOFOLIO
                    </a>
                </div>

                {/* Gengar Image - Centered on mobile, aligned right on desktop */}
                <div className='w-full md:w-1/3 flex justify-center md:justify-end mt-4 md:mt-0'>
                    <img
                        src="/assets/gengar.png"
                        alt="Gengar"
                        className="h-24 md:h-32 w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    )
}