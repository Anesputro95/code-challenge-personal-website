"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

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

            setComments([
                ...comments,
                {
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    message: messageRef.current.value,
                },
            ]);

            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        } else {
            alert("Jangan ada yang kosong!");
        }
    }

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center py-12 px-4"
            style={{
                backgroundImage: "url('/assets/bg-profile.jpg')",
            }}
        >
            {/* Social Buttons */}
            <div className="flex justify-center gap-6 mb-12 relative top-16">
                <Link
                    href="https://github.com/Anesputro95"
                    className="flex w-14 h-14 items-center justify-center rounded-full bg-sky-800 p-2 hover:bg-sky-300 transition"
                >
                    <Github className="text-white" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/adi-putro-wibowo-47a8b8191/"
                    className="flex w-14 h-14 items-center justify-center rounded-full bg-sky-800 p-2 hover:bg-sky-300 transition"
                >
                    <Linkedin className="text-white" />
                </Link>
                <Link
                    href="mailto:anes.putro@gmail.com"
                    className="flex w-14 h-14 items-center justify-center rounded-full bg-sky-800 p-2 hover:bg-sky-300 transition"
                >
                    <Mail className="text-white" />
                </Link>
            </div>

            {/* Contact Form */}
            <div className="w-full max-w-xl mx-auto bg-black/60 backdrop-blur-md p-8 rounded-2xl shadow-lg relative top-16">
                <form className="flex flex-col gap-4">
                    <label className="text-white font-medium">Name</label>
                    <Input
                        ref={nameRef}
                        type="text"
                        placeholder="Masukkan Nama Anda"
                        className="text-white"
                    />

                    <label className="text-white font-medium ">Email</label>
                    <Input
                        ref={emailRef}
                        type="email"
                        placeholder="Masukkan Email Anda"
                        className="text-white "
                    />

                    <label className="text-white font-medium">Message</label>
                    <Textarea
                        ref={messageRef}
                        placeholder="Pesan Anda"
                        className="text-white"
                    />

                    <Button
                        type="button"
                        onClick={messageSubmit}
                        className="bg-sky-800 text-white rounded-full px-6 py-2 mt-2 md:mx-40 hover:bg-sky-300 transition"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
}
