import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <div className="bg-black max-w-full h-50 ">

            <div className="mx-40 h-40 relative top-6 flex">
                <div className='flex flex-col gap-2 max-h-fit w-1/2'>
                    <h1 className=" text-sky-800 text-xl font-black">
                        CONTACT
                    </h1>
                    <div className="text-white w-68 font-light text-sm flex flex-col gap-2">
                        <p>
                            Jl. Bedeng Rt/Rw 03/10 No.10
                            Kelurahan Grogol, Kecamatan Limo,
                            Kota Depok.
                        </p>
                        <a
                            href="mailto:anes.putro@gmail.com"
                            className="cursor-pointer"
                        >
                            <p className="text-center w-42 text-red-500 font-bold hover:bg-white rounded-full">
                                anes.putro@gmail.com
                            </p>
                        </a>
                        <div className='w-22 h-8 relative top-2 flex gap-2 right-1'>
                            <a href="https://www.instagram.com/anesputro/" className='cursor-pointer hover:bg-sky-500 p-1 rounded'>
                                <Instagram />
                            </a>
                            <a href="https://www.youtube.com/@anesputro3996" className='cursor-pointer hover:bg-sky-500 p-1 rounded'>
                                <Youtube />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-2/3 text-white flex flex-col gap-4 font-black relative left-32'>

                    <div className='flex gap-26 font-black'>
                        <a href="/">
                            <h1 className='hover:text-sky-500'>HOME</h1>
                        </a>
                        <a href="/contact" >
                            <h1 className='hover:text-sky-500'>CONTACT</h1>
                        </a>
                    </div>

                    <a href="/profile">
                        <h1 className='hover:text-sky-500 w-19'>PROFILE</h1>
                    </a>
                    <a href="/about">
                        <h1 className='hover:text-sky-500 w-19'>ABOUT</h1>
                    </a>
                    <a href="/mywork">
                        <h1 className='hover:text-sky-500 w-26'>PORTOFOLIO</h1>
                    </a>
                </div>


                <img
                    src="/assets/gengar.png"
                    alt="Gengar"
                    className=" mx-20 w-full h-auto object-contain relative left-50"
                />

            </div>
        </div>
    )
}