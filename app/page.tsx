import Image from "next/image";
import Manifesto from "@/components/Manifesto";
import Letter from "@/components/Letter";
import Hamsters from "@/components/Hamsters";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#e10600]">

      {/* Centered logo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Logo />
      </div>

      {/*<div className="absolute top-4 left-4 right-4">
        <Manifesto />
      </div>*/}
      
      <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 mt-8">
        <Letter />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Hamsters />
      </div>

    </main>
  );
}
