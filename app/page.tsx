import Letter from "@/components/Letter";
import Hamsters from "@/components/Hamsters";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#e10600]">

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

      {/* Hamsters (optional) */}
      {/*
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Hamsters />
      </div>
      */}

    </main>
  );
}
