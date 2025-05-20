import Link from "next/link"
import Button from "./Button"


export default function Navbar() {
    return <div id="navbar" className=" bg-gray-800 shadow-lg shadow-fuchsia-900/50">
        <section className="flex py-4 px-4 mx-14 justify-between">

            {/* logo */}
            <div className="">
                <Link href="/"><img src="/assets/logo.png" alt="" className="h-7 w-auto"/></Link>
            </div>

            {/* list */}
            <div className="flex items-center justify-between">
                <ul className="flex space-x-16 text-m font-extralight text-white pr-12">
                    <li className="text-white font-extralight">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-white font-extralight">
                        <Link href="/">Profile</Link>
                    </li>
                    <li>
                        <Link href="/about">About Me</Link>
                    </li>
                    <li className="text-white font-extralight">
                        <Link href="/">My Works</Link>
                    </li>
                </ul>
                {/* button */}
                <Button/>
            </div>
        </section>
    </div>
}