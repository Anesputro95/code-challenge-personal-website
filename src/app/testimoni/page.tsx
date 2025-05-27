export default function Testimoni() {
    return (
        // background
        <div
            className=" max-w-full max-h-fit"
            style={{
                backgroundImage: "url('/assets/bg-profile.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="max-w-full h-130 flex flex-col gap-12">
                <div className="flex justify-center relative top-2">
                    <h1
                        className="text-6xl text-sky-800 font-black drop-shadow-sm drop-shadow-white relative bottom-9"
                    >
                        TESTIMONI</h1>
                </div>

                {/* Kartu Testimoni */}
                <div className="border-2 mx-94 h-[22rem] flex relative bg-black/50 backdrop-blur-lg rounded-xl overflow-hidden bottom-3">
                    {/* Konten Testimoni */}
                    <div className="w-1/2 px-10 py-10 flex flex-col justify-center gap-4">
                        <h1 className="text-white font-bold text-lg leading-relaxed">
                            “Professional, responsive, and technically skilled. Highly recommended for any full-stack web development needs.”
                        </h1>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="border-2 border-sky-300 w-6"></span>
                            <h4 className="text-white font-black">
                                Michael T., <span className="font-extralight text-gray-400">Founder of TechNest</span>
                            </h4>
                        </div>
                    </div>

                    {/* Gambar Avatar */}
                    <div className="w-1/2 flex items-center justify-center bg-sky-900 relative">
                        <img
                            src="https://i.pravatar.cc/200?img=12"
                            alt="Avatar Michael"
                            className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}