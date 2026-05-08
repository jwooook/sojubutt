"use client";

import FooterThing from "@/components/FooterThing";
import Logo from "@/components/Logo";

export default function FooterPage() {
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
    </main>
  );
}
