"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Letter from "@/components/Letter";
import Hamsters from "@/components/Hamsters";
import Logo from "@/components/Logo";
import Ticker from "@/components/Ticker";

export default function ChichiPage() {
  const [time, setTime] = useState(25);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (time === 0) {
      router.push("/chichi/live");
      return;
    }

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer); }, [time, mounted, router]);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-[#e10600]">
      <div className="absolute top-4 right-4 text-white">
        <p className="text-xs opacity-60">redirecting</p>
        <p className="text-xl">{time}</p>
      </div>
      {/* Logo — dead center, independent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Logo />
      </div>

      {/* Letter — centered container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-lg px-6">
          <Letter className="text-center" />
        </div>
      </div>

      {/*
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Hamsters />
      </div>
      */}

      <div className="absolute top-0 left-0 w-full z-20">
        <Ticker direction="left" />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <Ticker direction="right" />
      </div>
    </main>
  );
}
