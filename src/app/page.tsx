import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl text-center">
        {/* Welcome Text */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-bold mb-2 sm:mb-4 md:mb-6">
          WELCOME TO
        </h2>

        {/* Main Title */}
        <h1 className="text-4xl drop-shadow-sm drop-shadow-white sm:text-5xl md:text-6xl lg:text-7xl text-sky-950 font-extrabold mb-8 sm:mb-12 md:mb-16 leading-tight">
          MY PERSONAL WEBSITE
        </h1>

        {/* Button */}
        <div className="mt-4 sm:mt-8">
          <Link href="/mywork">
            <Button className="rounded-3xl h-12 w-46 px-8 sm:px-10 bg-sky-800 hover:bg-sky-700 transition-colors text-sm sm:text-base">
              Explore My Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}