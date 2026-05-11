"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HiddenBackButton from "./HiddenBackButton";

import Letter from "@/components/Letter";
import Hamsters from "@/components/Hamsters";
import Logo from "@/components/Logo";
import Ticker from "@/components/Ticker";

export default function ChichiPage() {
  const [time, setTime] = useState(10);
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if(time === 0) {
      setShowOverlay(true);
      return;
    }

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <main className="relative min-h-screen bg-[#e10600]">
      <HiddenBackButton />
      <div className="absolute top-4 right-4 text-white">
        <p className="text-xs opacity-60">chichi the hamster in...</p>
        <p className="text-xl">{time}</p>
      </div>
      {/* Logo — dead center, independent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Logo />
      </div>

      {/* Letter — centered container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-lg px-6">
          <Letter className="text-center text-sm md:text-base" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full z-20">
        <Ticker direction="left" src="/chichi.png" />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <Ticker direction="right" src= "/chichi.png" />
      </div>

      {showOverlay && (

        <div className="absolute inset-0 z-50 flex items-center justify-center">

        {/* background fade */}

        <div className="absolute inset-0 bg-black/60 animate-fade-in" />

        {/* emerging text */}

        <button
          onClick={() => router.push("/chichi/live")}
          className="
            relative
            text-white
            text-4xl md:text-6xl
            font-semibold
            tracking-[0.2em]
            opacity-0

            font-space

            translate-y-6
            animate-rise-in
            animate-flicker
            cursor-pointer
          ">
          enter stream
          </button>
        </div>
      )}
    </main>
  );
}
