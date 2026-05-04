import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-[#FFFFFF] h-screen flex items-center justify-center">
      {/*logo*/}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Logo />
      </div>
      {/*container*/}
      <div className="absolute bottom-6 left-6">
        {/* TEXT (main interaction) */}
        <Link
          href="/chichi"
          className="
            relative z-10
            text-white
            text-3xl md:text-5xl

            animate-micro-glitch
            font-space
            tracking-[0.12em]

            transition-all duration-300
            hover:tracking-[0.2em]
            hover:opacity-80
          "
        >00 enter hamsterstream
        </Link>

        {/* SUBTLE BACKGROUND LAYER (ghost repetition) */}
        <p className="
          absolute inset-0
          flex items-center justify-center
          text-white/10
          text-4xl md:text-6xl

          animate-micro-glitch

          font-space
          tracking-[0.18em]

          pointer-events-none
        ">hamsterstream
        </p>

      </div>
    </main>
  );
}
