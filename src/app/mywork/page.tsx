import Image from "next/image"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pin } from 'lucide-react';
import { Paperclip } from 'lucide-react';
import { Hammer } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';
import Experience from "../experience/page";
import Testimoni from "../testimoni/page";

export default function MyWork() {
    return (
        <div>
            {/* background */}
            <div
                className="max-w-full max-h-fit drop-shadow-xl drop-shadow-white/30"
                style={{
                    backgroundImage: "url('/assets/bg-profile.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="h-260 max-w-full mx-auto flex flex-col">
                    <div className="mx-40 m-20 gap-4 text-center">
                        <h1 className="text-6xl text-sky-800 font-black drop-shadow-sm drop-shadow-white">PORTOFLIO</h1>
                    </div>
                    <div className=" mx-80 h-180 flex flex-col gap-12 relative top-10">
                        <h1 className="text-4xl text-left text-white font-bold">
                            E-commerce Platform for E-Bike
                        </h1>
                        <div className="flex gap-4 text-left">
                            <h1 className="bg-sky-400 w-24 h-12 text-center justify-center items-center flex text-white font-bold rounded-lg">React</h1>
                            <h1 className="bg-sky-400 w-24 h-12 text-center justify-center items-center flex text-white font-bold rounded-lg">Node.js</h1>
                            <h1 className="bg-sky-400 w-24 h-12 text-center justify-center items-center flex text-white font-bold rounded-lg">Mongo.DB</h1>
                            <h1 className="bg-sky-400 w-24 h-12 text-center justify-center items-center flex text-white font-bold rounded-lg">AWS</h1>
                        </div>
                        <div className="flex gap-4">
                            <Image src="/assets/dummy.jpg" alt="E-commerce Platform for E-Bike" width={500} height={300} className="rounded-2xl shadow-lg relative bottom-4">
                            </Image>
                            
                            <div className="text-left text-white gap-8 flex flex-col justify-center items-start relative left-12">
                                <div className="flex gap-2 items-center">
                                    <Pin className="text-red-500 " />
                                    <h1>
                                        <span className="font-black">Purpose:</span> Platform belanja sepeda listrik online Terbesar
                                    </h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Paperclip className="text-red-500 " />
                                    <h1>
                                        <span className="font-black">Peran:</span> Fullstack Developer
                                    </h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Hammer className="text-red-500 " />
                                    <h1>
                                        <span className="font-black">Tools:</span> React, Node.js, MongoDB, AWS
                                    </h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <BadgeDollarSign className="text-red-500 " />
                                    <h1>
                                        <span className="font-black">Hasil:</span> +35% penjualan, -50% kerja manual
                                    </h1>
                                </div>
                                <div className="flex gap-2 items-center relative top-4">
                                    <Link href="https://startersites.io/blocksy/e-bike/">
                                        <Button className="bg-sky-800 rounded-lg w-42 cursor-pointer">
                                            <h1>🔗 Lihat Proyek</h1>
                                        </Button>
                                    </Link>
                                    <Link href="https://startersites.io/blocksy/e-bike/product/310/">
                                        <Button className="bg-sky-800 rounded-lg w-42 cursor-pointer">
                                            <h1>🖼️ Lihat Gambar</h1>
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Experience/>
            <Testimoni/>
        </div>
    )
}