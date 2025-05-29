export default function Testimoni() {
    return (
        // background
        <div
            className="w-full min-h-fit"
            style={{
                backgroundImage: "url('/assets/bg-profile.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="w-full py-12 md:py-16 lg:py-20 flex flex-col gap-8 md:gap-12 px-4 sm:px-6 md:px-8">
                <div className="flex justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-sky-800 font-black drop-shadow-sm drop-shadow-white">
                        TESTIMONI
                    </h1>
                </div>

                {/* Kartu Testimoni */}
                <div className="border-2 mx-auto w-full max-w-4xl h-auto min-h-[18rem] md:h-[22rem] flex flex-col lg:flex-row relative bg-black/50 backdrop-blur-lg rounded-xl overflow-hidden">
                    {/* Konten Testimoni */}
                    <div className="w-full lg:w-1/2 px-6 py-8 md:px-10 md:py-10 flex flex-col justify-center gap-3 md:gap-4">
                        <h1 className="text-white font-bold text-base md:text-lg leading-relaxed">
                            “Professional, responsive, and technically skilled. Highly recommended for any full-stack web development needs.”
                        </h1>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="border-2 border-sky-300 w-6"></span>
                            <h4 className="text-white font-black text-sm md:text-base">
                                Michael T., <span className="font-extralight text-gray-400">Founder of TechNest</span>
                            </h4>
                        </div>
                    </div>

                    {/* Gambar Avatar */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center bg-sky-900 p-6 md:p-8 lg:p-0">
                        <img
                            src="https://i.pravatar.cc/200?img=12"
                            alt="Michael"
                            className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}