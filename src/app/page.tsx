import Image from "next/image";
import Button from "./components/Button";



export default function Home() {
  return (
    <div className="border-2 border-green-600 w-auto h-200">
      <div className="border-2 border-yellow-500 mx-18 h-200 justify-center content-center">
        <h2 className="py-6 mx-130 text-3xl text-center align-middle">WELCOME TO</h2>
        <h1 className="relative bottom-10 py-2 mx-60 text-7xl text-center align-middle">MY PERSONAL WEBSITE</h1>
      </div>  
    </div>
  );
}
