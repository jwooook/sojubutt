import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-[#e10600] text-white flex items-center justify-center">

      {/* CENTER LOGO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 scale-75 md:scale-100">
        <Logo />
      </div>

      {/* BOTTOM LEFT STACK */}
      <div
        className="
          absolute
          bottom-6
          left-4
          md:left-6
          z-10
          flex
          flex-col
          gap-6
          md:gap-10
        "
      >

        {/* HAMSTERSTREAM */}
        <div className="relative w-fit">
          <Link
            href="/chichi"
            className="
              relative
              z-10
              block

              text-xl
              sm:text-2xl
              md:text-5xl

              animate-micro-glitch
              font-space

              tracking-[0.08em]
              md:tracking-[0.12em]

              transition-all
              duration-300

              hover:tracking-[0.15em]
              md:hover:tracking-[0.2em]

              hover:opacity-80
            "
          >
            01 enter hamsterstream
          </Link>

          {/* GHOST TEXT */}
          <p
            className="
              absolute
              inset-0

              text-white/10

              text-2xl
              sm:text-3xl
              md:text-6xl

              animate-micro-glitch
              font-space

              tracking-[0.12em]

              pointer-events-none
              whitespace-nowrap
            "
          >
            hamsterstream
          </p>
        </div>

        {/* FOOTERTHING / EMAIL */}
        <div className="relative w-fit">
          <Link
            href="/footerthing"
            className="
              relative
              z-10
              block

              text-lg
              sm:text-xl
              md:text-5xl

              animate-micro-glitch
              font-space

              tracking-[0.08em]
              md:tracking-[0.12em]

              transition-all
              duration-300

              hover:tracking-[0.15em]
              md:hover:tracking-[0.2em]
            "
          >
            00 getrandomemail
          </Link>

          {/* GHOST TEXT */}
          <p
            className="
              absolute
              inset-0

              text-white/10

              text-xl
              sm:text-2xl
              md:text-6xl

              animate-micro-glitch
              font-space

              tracking-[0.12em]

              pointer-events-none
              whitespace-nowrap
            "
          >
            getrandomemail
          </p>
        </div>

      </div>
    </main>
  );
}
