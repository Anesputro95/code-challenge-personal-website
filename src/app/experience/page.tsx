import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export default function Experience() {
    return (
        <div className="w-full min-h-fit py-10 md:py-16 bg-sky-950 flex flex-col gap-8 md:gap-12">
            {/* Header */}
            <div className="flex justify-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-sky-800 font-black drop-shadow-sm drop-shadow-white">
                    EXPERIENCE
                </h1>
            </div>

            {/* Container */}
            <div className="bg-black/50 backdrop-blur-lg flex flex-col gap-8 md:gap-12 border-2 border-sky-800 rounded-3xl mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-60 2xl:mx-80 p-6 md:p-8 lg:p-10">
                {/* Inner Wrapper */}
                <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
                    {/* Experience Item */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
                        {/* Year */}
                        <div className="drop-shadow-md drop-shadow-sky-400 w-full sm:w-auto md:bottom-6 lg:bottom-7 relative">
                            <h1 className="bg-sky-300 w-full sm:w-36 h-10 flex items-center justify-center my-2 sm:m-6 font-extrabold text-sky-950 rounded-lg sm:rounded-s-xl gap-2">
                                2018 – 2019
                                <SendHorizontal className="text-sky-700 drop-shadow-xl drop-shadow-sky-800" />
                            </h1>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-4 md:gap-6 w-full">
                            <h1 className="text-white font-extrabold text-xl sm:text-2xl">
                                Web Developer Intern — PixelForge Studio
                            </h1>
                            <ul className="text-white text-sm md:text-base flex flex-col gap-2 list-disc pl-5">
                                <li>Assisted in developing internal tools using HTML, CSS, JavaScript, and basic PHP.</li>
                                <li>Participated in daily standups and code reviews with senior developers.</li>
                                <li>Maintained WordPress-based client websites and updated content upon request.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience Item */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
                        {/* Year */}
                        <div className="relative drop-shadow-md drop-shadow-sky-400 w-full sm:w-auto md:bottom-6 lg:bottom-7">
                            <h1 className="bg-sky-300 w-full sm:w-36 h-10 flex items-center justify-center my-2 sm:m-6 font-extrabold text-sky-950 rounded-lg sm:rounded-s-xl gap-2">
                                2019 – 2021
                                <SendHorizontal className="text-sky-700 drop-shadow-xl drop-shadow-sky-800" />
                            </h1>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-4 md:gap-6 w-full ">
                            <h1 className="text-white font-extrabold text-xl sm:text-2xl">
                                Frontend Developer (Freelance)
                            </h1>
                            <ul className="text-white text-sm md:text-base flex flex-col gap-2 list-disc pl-5">
                                <li>Built custom landing pages and dashboards for small business clients using Vue.js and Tailwind CSS.</li>
                                <li>Worked closely with backend teams to integrate RESTful APIs.</li>
                                <li>Optimized frontend performance and accessibility across multiple devices.</li>
                                <li>Provided maintenance and updates based on client feedback.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience Item */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
                        {/* Year */}
                        <div className="drop-shadow-md drop-shadow-sky-400 w-full sm:w-auto md:bottom-6 lg:bottom-7 relative">
                            <h1 className="bg-sky-300 w-full sm:w-42 h-10 flex items-center justify-center my-2 sm:m-6 font-extrabold text-sky-950 rounded-lg sm:rounded-s-xl gap-2">
                                2021 – Present
                                <SendHorizontal className="text-sky-700 drop-shadow-xl drop-shadow-sky-800" />
                            </h1>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-4 md:gap-6 w-full relative md:right-6">
                            <h1 className="text-white font-extrabold text-xl sm:text-2xl">
                                Full-Stack Developer — NovaTech Solutions
                            </h1>
                            <ul className="text-white text-sm md:text-base flex flex-col gap-2 list-disc pl-5">
                                <li>Developed and maintained scalable web applications using React, Node.js, and MongoDB.</li>
                                <li>Led migration from legacy systems to modern MERN stack architecture.</li>
                                <li>Collaborated with UI/UX team to implement responsive and accessible interfaces.</li>
                                <li>Integrated third-party APIs and ensured data security compliance (OAuth, JWT).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}