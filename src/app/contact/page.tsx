"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import { Github } from 'lucide-react';
import Link from "next/link";
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

interface Comment {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [comments, setComments] = useState<Comment[]>([]);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    function messageSubmit() {
        if (
            nameRef.current?.value.trim() &&
            emailRef.current?.value.trim() &&
            messageRef.current?.value.trim()
        ) {

            console.log("Name:", nameRef.current.value);
            console.log("Email:", emailRef.current.value);
            console.log("Message:", messageRef.current.value);

            setComments([...comments, {
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value
            }])
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';
        } else {
            alert("Jangan ada yang kosong!");
            return;
        }
    }

    return (
        <div className="max-w-full max-h-fit"
            style={{
                backgroundImage: "url('/assets/bg-profile.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>

            {/* Logo button  */}
            <div className="h-200 max-w-full mx-20 flex flex-col justify-center items-center gap-8 bottom-4 relative">
                <div className=" flex gap-16 items-center justify-center cursor-pointer">
                    <Link
                        href="https://github.com/Anesputro95"
                        className="flex w-14 h-14 items-center justify-center rounded-full bg-sky-800 p-2 hover:bg-sky-300 transition">
                        <Github />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/adi-putro-wibowo-47a8b8191/"
                        className=" flex w-14 h-14 items-center justify-center rounded-full bg-sky-800 p-2 hover:bg-sky-300 transition">
                        <Linkedin />
                    </Link>
                    <Link
                        href="mailto:anes.putro@gmail.com"
                        className="flex w-14 h-14 items-center justify-center rounded-full bg-sky-800 p-2 hover:bg-sky-300 transition">
                        <Mail />
                    </Link>
                </div>

                {/* Comment */}
                <div className="bg-black/50 w-180 h-128 mx-auto rounded-2xl relative">
                    <div className="flex flex-col items-center justify-center h-full gap-4 relative bottom-6">
                        <h1 className="text-white relative right-26 top-2">Name</h1>
                        <Input type="text"
                            ref={nameRef}
                            placeholder="Masukkan Nama Anda"
                            className="w-62 text-white" />

                        <h1 className="text-white relative right-26 top-2">Email</h1>
                        <Input type="email"
                            ref={emailRef}
                            placeholder="Masukkan Email Anda"
                            className="w-62 text-white" />

                        <Textarea
                            ref={messageRef}
                            placeholder="Pesan Anda"
                            className="w-102 h-36 relative top-4 text-white " />

                        <Button
                            type="submit"
                            className="bg-sky-800 text-white cursor-pointer relative top-4 rounded-full px-6 py-2 mt-4 hover:bg-sky-300 transition"
                            onClick={messageSubmit}
                        >
                            Send Message
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}