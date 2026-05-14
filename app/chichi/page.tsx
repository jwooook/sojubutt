"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import HiddenBackButton from "./HiddenBackButton";

import Letter from "@/components/Letter";
import Hamsters from "@/components/Hamsters";
import Logo from "@/components/Logo";
import Ticker from "@/components/Ticker";

export default function ChichiPage() {
  const [time, setTime] = useState(9);
  const [showOverlay, setShowOverlay] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (time === 0) {
      setShowOverlay(true);
      return;
    }

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e10600]">
      <HiddenBackButton />

      {/* Countdown */}
      <div
        className="
          absolute
          top-20
          right-4
          md:top-24
          md:right-16
          font-space
          text-white
          text-right
          z-30
        "
      >
        <p className="text-[10px] md:text-xs opacity-60 tracking-wide">
          chichi the hamster in...
        </p>

        <p className="text-2xl md:text-xl leading-none">
          {time}
        </p>
      </div>

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Logo />
      </div>

      {/* Letter */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="w-full max-w-lg">
          <Letter className="text-center text-sm md:text-base" />
        </div>
      </div>

      {/* Top ticker */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Ticker direction="left" src="/chichi.png" />
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Ticker direction="right" src="/chichi.png" />
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">

          {/* Background fade */}
          <div className="absolute inset-0 bg-black/60 animate-fade-in" />

          {/* Enter stream button */}
          <button
            onClick={() => router.push("/chichi/live")}
            className="
              relative
              text-white
              text-2xl
              md:text-6xl
              font-semibold
              tracking-[0.08em]
              md:tracking-[0.2em]
              opacity-0
              font-space
              translate-y-6
              animate-rise-in
              animate-flicker
              cursor-pointer
              px-6
              text-center
            "
          >
            enter stream
          </button>
        </div>
      )}
    </main>
  );
}
