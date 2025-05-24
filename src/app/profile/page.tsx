import Image from "next/image"
import Link from "next/link"

export default function Profile() {
    return (
        // backgorund
        <div
            className=" max-w-full h-[880px]"
            style={{
                backgroundImage: "url('/assets/bg-profile.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div
                className=" max-w-full h-220 relative left-6 bottom-6">
                <div className=" mx-24 h-180 text-white items-center relative top-20 flex">

                    {/* profile Name */}
                    <div className="w-1/2 ml-14 flex flex-col gap-6 relative left-8">

                        <h1 className="text-4xl">I'M <span className="font-extrabold text-5xl text-sky-800 drop-shadow-sm drop-shadow-white">ANES PUTRO</span></h1>

                        <h5 className="text-2xl font-bold">Full Stack Developer</h5>

                        <p className="font-extralight text-sm text-gray-300">
                            Junior Full Stack Developer with hands-on experience in building responsive web applications using JavaScript, TypeScript, Next.js, React, Node.js, and MongoDB. Focused on writing clean, efficient code and implementing scalable backend services and RESTful APIs.
                        </p>

                        <div className=" w-80 h-12 flex gap-4 relative scale-60 top-2 right-8">

                            <a href="https://github.com/Anesputro95">
                                <img src="/assets/git.png" alt="" className="transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none "/>
                            </a>

                            <a href="https://www.linkedin.com/in/adi-putro-wibowo-47a8b8191/">
                                <img src="/assets/linked.png" alt="" className="transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none"/>
                            </a>

                            <a href="https://wa.link/f43ees">
                                <img src="/assets/wa.png" alt="" className="transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none"/>
                            </a>

                        </div>

                    </div>

                    {/* foto profile */}
                    <div className="relative right-2">
                        <img
                            src="/assets/me.png"
                            alt="me"
                            className="max-h-fit w-80 mx-50 scale-125" />
                    </div>

                </div>
            </div>
        </div>
    )
}