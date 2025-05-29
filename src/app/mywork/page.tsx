import Image from "next/image"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pin, Paperclip, Hammer, BadgeDollarSign } from 'lucide-react';
import Experience from "../experience/page";
import Testimoni from "../testimoni/page";

export default function MyWork() {
    return (
        <div>
            {/* background */}
            <div
                className="w-full h-fit drop-shadow-xl drop-shadow-white/30"
                style={{
                    backgroundImage: "url('/assets/bg-profile.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className=" max-w-full mx-auto flex flex-col py-10 md:py-20">
                    <div className=" mx-4 md:mx-40 my-10 md:my-20 gap-4 text-center relative bottom-14">
                        <h1 className="text-4xl md:text-6xl text-sky-800 font-black drop-shadow-sm drop-shadow-white">PORTOFLIO</h1>
                    </div>
                    <div className="mx-4 md:mx-10 lg:mx-auto xl:mx-80 h-fit flex flex-col gap-8 md:gap-12 relative bottom-20">
                        <h1 className="text-2xl md:text-4xl text-left text-white font-bold">
                            E-commerce Platform for E-Bike
                        </h1>
                        <div className="flex flex-wrap gap-2 md:gap-4 text-left ">
                            <h1 className="bg-sky-400 px-4 py-2 md:w-24 h-12 text-center justify-center items-center flex text-white font-bold rounded-lg">React</h1>
                            <h1 className="bg-sky-400 px-4 py-2 md:w-24 h-12 text-center justify-center items-center flex text-white font-bold rounded-lg">Node.js</h1>
                            <h1 className="bg-sky-400 px-4 py-2 md:w-24 h-12 text-center justify-center items-center flex text-white font-bold rounded-lg">Mongo.DB</h1>
                            <h1 className="bg-sky-400 px-4 py-2 md:w-24 h-12 text-center justify-center items-center flex text-white font-bold rounded-lg">AWS</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src="/assets/dummy.jpg"
                                    alt="E-commerce Platform for E-Bike"
                                    width={800}
                                    height={450}
                                    className="rounded-2xl shadow-lg w-full h-auto"
                                    layout="responsive"
                                />
                            </div>

                            <div className="w-full lg:w-1/2 text-left text-white gap-4 md:gap-8 flex flex-col justify-center items-start">
                                <div className="flex gap-2 items-center">
                                    <Pin className="text-red-500 flex-shrink-0" />
                                    <h1>
                                        <span className="font-black">Purpose:</span> Platform belanja sepeda listrik online Terbesar
                                    </h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Paperclip className="text-red-500 flex-shrink-0" />
                                    <h1>
                                        <span className="font-black">Peran:</span> Fullstack Developer
                                    </h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Hammer className="text-red-500 flex-shrink-0" />
                                    <h1>
                                        <span className="font-black">Tools:</span> React, Node.js, MongoDB, AWS
                                    </h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <BadgeDollarSign className="text-red-500 flex-shrink-0" />
                                    <h1>
                                        <span className="font-black">Hasil:</span> +35% penjualan, -50% kerja manual
                                    </h1>
                                </div>
                                <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-8">
                                    <Link href="https://startersites.io/blocksy/e-bike/" passHref>
                                        <Button className="bg-sky-800 rounded-lg w-full sm:w-auto cursor-pointer">
                                            <h1>🔗 Lihat Proyek</h1>
                                        </Button>
                                    </Link>
                                    <Link href="https://startersites.io/blocksy/e-bike/product/310/" passHref>
                                        <Button className="bg-sky-800 rounded-lg w-full sm:w-auto cursor-pointer">
                                            <h1>🖼️ Lihat Gambar</h1>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Experience />
            <Testimoni />
        </div>
    )
}