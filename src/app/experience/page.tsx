import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export default function Experience() {
    return (
        <div className="max-w-full h-230 bg-sky-950 flex flex-col gap-12">
            {/* Header */}
            <div className="flex justify-center">
                <h1 className="text-6xl text-sky-800 font-black drop-shadow-sm drop-shadow-white relative bottom-7">
                    EXPERIENCE
                </h1>
            </div>

            {/* Container */}
            <div className="bg-black/50 backdrop-blur-lg flex flex-col gap-12 border-2 border-sky-800 rounded-3xl mx-80 relative top-2 p-10">
                {/* Inner Wrapper */}
                <div className="flex flex-col gap-16">
                    {/* Experience Item */}
                    <div className="flex items-start gap-8">
                        {/* Year */}
                        <div className="drop-shadow-md drop-shadow-sky-400">
                            <h1 className="bg-sky-300 w-36 h-10 flex items-center justify-center m-6 font-extrabold text-sky-950 rounded-s-xl gap-2 relative bottom-6">
                                2018 – 2019
                                <SendHorizontal className="text-sky-700 drop-shadow-xl drop-shadow-sky-800" />
                            </h1>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-white font-extrabold text-2xl">
                                Web Developer Intern — PixelForge Studio
                            </h1>
                            <ul className="text-white text-sm flex flex-col gap-2 list-disc pl-5">
                                <li>Assisted in developing internal tools using HTML, CSS, JavaScript, and basic PHP.</li>
                                <li>Participated in daily standups and code reviews with senior developers.</li>
                                <li>Maintained WordPress-based client websites and updated content upon request.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience Item */}
                    <div className="flex items-start gap-8">
                        {/* Year */}
                        <div className="drop-shadow-md drop-shadow-sky-400">
                            <h1 className="bg-sky-300 w-36 h-10 flex items-center justify-center m-6 font-extrabold text-sky-950 rounded-s-xl gap-2 relative bottom-6">
                                2019 – 2021
                                <SendHorizontal className="text-sky-700 drop-shadow-xl drop-shadow-sky-800" />
                            </h1>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-white font-extrabold text-2xl">
                                Frontend Developer (Freelance)
                            </h1>
                            <ul className="text-white text-sm flex flex-col gap-2 list-disc pl-5">
                                <li>Built custom landing pages and dashboards for small business clients using Vue.js and Tailwind CSS.</li>
                                <li>Worked closely with backend teams to integrate RESTful APIs.</li>
                                <li>Optimized frontend performance and accessibility across multiple devices.</li>
                                <li>Provided maintenance and updates based on client feedback.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience Item */}
                    <div className="flex items-start gap-8 relative right-6">
                        {/* Year */}
                        <div className="drop-shadow-md drop-shadow-sky-400">
                            <h1 className="bg-sky-300 w-42 h-10 flex items-center justify-center m-6 font-extrabold text-sky-950 rounded-s-xl gap-2 relative bottom-7">
                                2021 – Present
                                <SendHorizontal className="text-sky-700 drop-shadow-xl drop-shadow-sky-800" />
                            </h1>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-white font-extrabold text-2xl">
                                Full-Stack Developer — NovaTech Solutions
                            </h1>
                            <ul className="text-white text-sm flex flex-col gap-2 list-disc pl-5">
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
