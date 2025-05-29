export default function About() {
    return (
        // Background Section
        <div
            className="w-full min-h-fit"
            style={{
                backgroundImage: "url('/assets/bg-profile.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16">

                {/* About Me */}
                <div className="my-8 md:my-12 lg:my-16 space-y-4 md:space-y-6">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-sky-800 font-black drop-shadow-sm drop-shadow-white">
                        ABOUT ME
                    </h1>
                    <div className="mt-4 md:mt-6">
                        <p className="text-sm md:text-base lg:text-lg font-extralight text-gray-400 text-left">
                            I'm a <span className="font-bold text-white">Full-Stack Developer</span> with a creative background and over 5 years of experience in the digital media industry. My interest in <span className="font-bold text-white">web development</span> began with a passion for visual design and evolved into a deep focus on technical problem solving. I develop using <span className="font-bold text-white">modern TypeScript-based stacks such as React, Node.js, and Express,</span> and work confidently with <span className="font-bold text-white">REST APIs, MongoDB, and Git</span>. I enjoy contributing to both <span className="font-bold text-white">frontend and backend development</span>, and I'm committed to writing <span className="font-bold text-white">clean, type-safe code</span> while continuously improving my understanding of <span className="font-bold text-white">system design, performance optimization, and developer best practices.</span>
                            <br /><br />
                            <span>
                                I value timeliness, ensuring all tasks are completed on schedule; I have strong attention to detail, consistently delivering high-quality work; and I prioritize clear communication to collaborate effectively and avoid misunderstandings.
                            </span>
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mx-auto w-full max-w-4xl lg:max-w-6xl flex flex-col gap-8 md:gap-12 lg:gap-16 py-8 md:py-12">

                    {/* Title */}
                    <div className="text-center text-sky-800 font-black drop-shadow-sm drop-shadow-white flex flex-col gap-1 md:gap-2">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl">MY SKILLS</h1>
                        <h2 className="text-xl md:text-3xl lg:text-4xl mt-2 md:mt-4">Front-End</h2>
                    </div>

                    {/* Front-End Skills */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mx-auto  justify-center items-center px-4 sm:px-6 md:px-8">
                        {['html', 'css', 'ts', 'react', 'angular', 'tailwind'].map((skill) => (
                            <div
                                key={skill}
                                className="bg-sky-800 rounded-2xl md:rounded-3xl text-center flex items-center justify-center aspect-square max-h-40 shadow-md hover:shadow-lg transition p-4"
                            >
                                <img
                                    src={`/assets/${skill}.png`}
                                    alt={skill}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Back-End Title */}
                    <div className="text-center text-sky-800 font-black drop-shadow-sm drop-shadow-white flex flex-col gap-1 md:gap-2 mt-4 md:mt-8 ">
                        <h2 className="text-xl md:text-3xl lg:text-4xl">Back-End</h2>
                    </div>

                    {/* Back-End Skills */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mx-auto px-4 sm:px-6 md:px-8">
                        {['node', 'ex', 'rails', 'dj'].map((skill) => (
                            <div
                                key={skill}
                                className="bg-sky-800 rounded-2xl md:rounded-3xl flex items-center justify-center aspect-square max-h-40 shadow-md hover:shadow-lg transition p-4"
                            >
                                <img
                                    src={`/assets/${skill}.png`}
                                    alt={skill}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* DevOps & Tools Title */}
                    <div className="text-center text-sky-800 font-black drop-shadow-sm drop-shadow-white flex flex-col gap-1 md:gap-2 mt-4 md:mt-8">
                        <h2 className="text-xl md:text-3xl lg:text-4xl">DevOps & Tools</h2>
                    </div>

                    {/* DevOps & Tools Skills */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mx-auto px-4 sm:px-6 md:px-8 mb-8 md:mb-12">
                        {['docker', 'git2', 'jenkins', 'dj'].map((skill) => (
                            <div
                                key={skill}
                                className="bg-sky-800 rounded-2xl md:rounded-3xl flex items-center justify-center aspect-square max-h-40 shadow-md hover:shadow-lg transition p-4"
                            >
                                <img
                                    src={`/assets/${skill}.png`}
                                    alt={skill}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
