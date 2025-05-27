import Link from "next/link"
import { Button } from "@/components/ui/button"



export default function Navbar() {
    return <div id="navbar" className="bg-sky-950 shadow-lg shadow-cyan-500/50 drop-shadow-sm drop-shadow-white">
        <section className=" flex py-4 px-4 mx-14 justify-between">

            {/* logo */}
            <div className="">
                <Link href="/"><img src="/assets/logo.png" alt="" className="h-7 w-auto" /></Link>
            </div>

            {/* list */}
            <div className="flex items-center justify-between">
                <ul className="flex space-x-16 text-m font-extralight text-white pr-12">
                    <li className="text-white font-extralight hover:underline underline-offset-4">
                        <Link href="/" className="">Home</Link>
                    </li>
                    <li className="text-white font-extralight hover:underline underline-offset-4">
                        <Link href="/profile">Profile</Link>
                    </li>
                    <li className="text-white font-extralight hover:underline underline-offset-4">
                        <Link href="/about">About Me</Link>
                    </li>
                    <li className="text-white font-extralight hover:underline underline-offset-4">
                        <Link href="/mywork">Portofolio</Link>
                    </li>
                </ul>
                {/* button */}
                <Link href="/contact">
                    <Button className="rounded-full cursor-pointer font-extralight hover:shadow-[0_0_10px_white] transition-shadow duration-300">
                        Contact
                    </Button>
                </Link>
            </div>
        </section>
    </div>
}