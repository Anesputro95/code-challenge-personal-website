import Image from "next/image";
import Link from "next/link";


export default function Profile() {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bg-profile.jpg')" }}
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-white">

                    {/* Profile Info */}
                    <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-light">
                            <span className="text-xl">I'M </span><span className="font-extrabold text-sky-800">ANES PUTRO</span>
                        </h1>

                        <h2 className="text-2xl font-bold">Full Stack Developer</h2>

                        <p className="text-sm text-gray-300 font-light leading-relaxed">
                            Junior Full Stack Developer with hands-on experience in building responsive web applications
                            using JavaScript, TypeScript, Next.js, React, Node.js, and MongoDB. Focused on writing clean,
                            efficient code and implementing scalable backend services and RESTful APIs.
                        </p>

                        <div className="flex gap-4 pt-2">
                            <SocialLink
                                href="https://github.com/Anesputro95"
                                icon="/assets/git.png"
                                alt="GitHub"
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/adi-putro-wibowo-47a8b8191/"
                                icon="/assets/linked.png"
                                alt="LinkedIn"
                            />
                            <SocialLink
                                href="https://wa.link/f43ees"
                                icon="/assets/wa.png"
                                alt="WhatsApp"
                            />
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <Image
                                src="/assets/me.png"
                                alt="Profile picture"
                                layout="fill"
                                objectFit="contain"
                                className="scale-110"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Social Link Component for better reusability
type SocialLinkProps = {
    href: string;
    icon: string;
    alt: string;
};

function SocialLink({ href, icon, alt }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:-translate-y-1 duration-300"
        >
            <Image
                src={icon}
                alt={alt}
                width={40}
                height={40}
                className="object-contain"
            />
        </a>
    );
}