import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";



export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center backdrop-blur-lg bg-black/60">
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
      <div
        className="flex flex-col mx-auto relative bottom-4"
        >
        <div className="mx-18 h-200 justify-center content-center">
          <h2 className="py-6 mx-130 text-3xl text-center align-middle text-gray-400">WELCOME TO</h2>
          <h1 className="relative bottom-10 py-2 mx-60 text-7xl text-center align-middle text-gray-400">MY PERSONAL WEBSITE</h1>
        </div>

        <div className="mx-auto relative bottom-85">
          <Link href="/mywork">
            <Button className="cursor-pointer rounded-3xl h-12 w-42 bg-sky-800">
              Explore My Works
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
