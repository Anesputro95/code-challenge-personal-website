export default function About() {
    return (
        // background
        <div
            className=" max-w-full max-h-fit"
            style={{
                backgroundImage: "url('/assets/bg-profile-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

            <div className="h-600 max-w-full mx-20 flex flex-col">

                <div className=" mx-40 m-20  gap-6">
                    <h1 className="text-5xl text-sky-800 font-black drop-shadow-sm drop-shadow-white">ABOUT ME</h1>
                    <div>
                        <p className="ml-22 font-extralight text-gray-400 text-left">
                            I’m a <span className="font-bold text-white">Full-Stack Developer</span> with a creative background and over 5 years of experience in the digital media industry. My interest in <span className="font-bold text-white">web development</span> began with a passion for visual design and evolved into a deep focus on technical problem solving. I develop using <span className="font-bold text-white">modern TypeScript-based stacks such as React, Node.js, and Express,</span> and work confidently with <span className="font-bold text-white">REST APIs, MongoDB, and Git</span>. I enjoy contributing to both <span className="font-bold text-white">frontend and backend development</span>, and I’m committed to writing <span className="font-bold text-white">clean, type-safe code</span> while continuously improving my understanding of <span className="font-bold text-white">system design, performance optimization, and developer best practices.</span>
                            <br /><br />
                            <span>
                                I value timeliness, ensuring all tasks are completed on schedule; I have strong attention to detail, consistently delivering high-quality work; and I prioritize clear communication to collaborate effectively and avoid misunderstandings.
                            </span>
                        </p>
                    </div>
                </div>

                <div className=" border-green-500 mx-60 flex flex-col gap-16 py-12 relative bottom-8">
                    {/* Judul */}
                    <div>
                        <div className="text-center text-sky-800 font-black drop-shadow-sm drop-shadow-white flex flex-col gap-2">
                            <h1 className="text-7xl relative bottom-12">
                                MY SKILLS
                            </h1>
                            <h2 className="text-5xl ">
                                Front-End
                            </h2>
                        </div>
                    </div>

                    {/* Front-end */}
                    <div className="grid grid-cols-3 gap-8 px-12">
                        {/* Skill Item */}
                        <div className="bg-sky-800 text-black rounded-3xl text-center flex items-center justify-center h-50 shadow-md hover:shadow-lg transition">
                            <img src="/assets/html.png" alt="" />
                        </div>
                        <div className="bg-sky-800 text-black rounded-3xl text-center flex items-center justify-center h-50 shadow-md hover:shadow-lg transition">
                            <img src="/assets/css.png" alt="" />
                        </div>
                        <div className="bg-sky-800 text-black rounded-3xl text-center flex items-center justify-center h-50 shadow-md hover:shadow-lg transition">
                            <img src="/assets/ts.png" alt="" />
                        </div>
                        <div className="bg-sky-800 text-black rounded-3xl text-center flex items-center justify-center h-50 shadow-md hover:shadow-lg transition">
                            <img src="/assets/react.png" alt="" />
                        </div>
                        <div className="bg-sky-800 text-black rounded-3xl text-center flex items-center justify-center h-50 shadow-md hover:shadow-lg transition">
                            <img src="/assets/angular.png" alt="" />
                        </div>
                        <div className="bg-sky-800 text-black rounded-3xl text-center flex items-center justify-center h-50 shadow-md hover:shadow-lg transition">
                            <img src="/assets/tailwind.png" alt="" />
                        </div>
                    </div>

                    {/* back-end */}
                    <div className="text-center text-sky-800 font-black drop-shadow-sm drop-shadow-white flex flex-col gap-2">
                        <h2 className="text-5xl ">
                            Back-End
                        </h2>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-8 px-12">
                            {/* Skill Item */}
                            <div className="bg-sky-800 text-black rounded-3xl flex items-center justify-center w-70 h-50 shadow-md hover:shadow-lg transition">
                                <img src="/assets/node.png" alt="HTML" className="h-55" />
                            </div>
                            <div className="bg-sky-800 text-black rounded-3xl flex items-center justify-center w-70 h-50 shadow-md hover:shadow-lg transition">
                                <img src="/assets/ex.png" alt="CSS" className="h-55" />
                            </div>
                            <div className="bg-sky-800 text-black rounded-3xl flex items-center justify-center w-70 h-50 shadow-md hover:shadow-lg transition">
                                <img src="/assets/rails.png" alt="TypeScript" className="h-55" />
                            </div>
                            <div className="bg-sky-800 text-black rounded-3xl flex items-center justify-center w-70 h-50 shadow-md hover:shadow-lg transition">
                                <img src="/assets/dj.png" alt="React" className="h-55" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-sky-800 font-black drop-shadow-sm drop-shadow-white flex flex-col gap-2">
                        <h2 className="text-5xl ">
                            DevOps & Tools
                        </h2>
                    </div>

                    {/* DevOps & Tools */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-8 px-12">
                            {/* Skill Item */}
                            <div className="bg-sky-800 text-black rounded-3xl flex items-center justify-center w-70 h-50 shadow-md hover:shadow-lg transition">
                                <img src="/assets/docker.png" alt="HTML" className="h-55" />
                            </div>
                            <div className="bg-sky-800 text-black rounded-3xl flex items-center justify-center w-70 h-50 shadow-md hover:shadow-lg transition">
                                <img src="/assets/git2.png" alt="CSS" className="h-55" />
                            </div>
                            <div className="bg-sky-800 text-black rounded-3xl flex items-center justify-center w-70 h-50 shadow-md hover:shadow-lg transition">
                                <img src="/assets/jenkins.png" alt="TypeScript" className="h-55" />
                            </div>
                            <div className="bg-sky-800 text-black rounded-3xl flex items-center justify-center w-70 h-50 shadow-md hover:shadow-lg transition">
                                <img src="/assets/dj.png" alt="React" className="h-55" />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>

    )
}