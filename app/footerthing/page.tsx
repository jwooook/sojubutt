"use client";
import FooterThing from "@/components/FooterThing";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";

export default function FooterPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-[#e10600]">
      {/* Logo — dead center, independent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Logo />
      </div>

      {/* Letter — centered container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-lg px-6">
          <FooterThing className="text-center text-sm md:text-base" />
        </div>
      </div>
      {/*back button*/}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => router.back()}
          className="
          font-space
          uppercase
          tracking-[0.35em]
          text-[10px]
          sm:text-xs
          md:text-sm
          text-white/70
          hover:text-white
          transition-colors
        "
         >
         back
        </button>
       </div>
    </main>
  );
}
