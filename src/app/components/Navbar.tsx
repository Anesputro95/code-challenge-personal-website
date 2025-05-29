"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id="navbar" className="bg-sky-950 shadow-lg shadow-cyan-500/50 drop-shadow-sm drop-shadow-white">
            <section className="flex py-4 px-4 md:mx-14 justify-between items-center">
                {/* logo */}
                <div>
                    <Link href="/">
                        <img src="/assets/logo.png" alt="Logo" className="h-7 w-auto" />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation Menu */}
                <div className="hidden md:flex items-center justify-between">
                    <ul className="flex space-x-8 lg:space-x-16 text-sm md:text-base font-extralight text-white pr-8 lg:pr-12">
                        <li className="hover:underline underline-offset-4">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:underline underline-offset-4">
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li className="hover:underline underline-offset-4">
                            <Link href="/about">About Me</Link>
                        </li>
                        <li className="hover:underline underline-offset-4">
                            <Link href="/mywork">Portfolio</Link>
                        </li>
                    </ul>

                    {/* Desktop button */}
                    <Link href="/contact" className="ml-4">
                        <Button className="rounded-full cursor-pointer font-extralight hover:shadow-[0_0_10px_white] transition-shadow duration-300">
                            Contact
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-sky-950 pb-4 px-4 gap-2 relative top-4">
                    <ul className="flex flex-col space-y-4 text-white">
                        <li className="border-b border-sky-800 pb-2">
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className="border-b border-sky-800 pb-2">
                            <Link href="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
                        </li>
                        <li className="border-b border-sky-800 pb-2">
                            <Link href="/about" onClick={() => setIsOpen(false)}>About Me</Link>
                        </li>
                        <li className="border-b border-sky-800 pb-2">
                            <Link href="/mywork" onClick={() => setIsOpen(false)}>Portfolio</Link>
                        </li>
                        <li className="pt-2">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button className="w-full relative bottom-3 rounded-full cursor-pointer font-extralight hover:shadow-[0_0_10px_white] transition-shadow duration-300">
                                    Contact
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}