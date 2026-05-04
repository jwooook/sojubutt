import Ticker from "@/components/Ticker";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="text-[#FFFFFF] h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Logo />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
          coming soon!
        </h1>
      </div>
      <div className="absolute top-0 left-0 w-full z-20">
        <Ticker direction="left" />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <Ticker direction="right" />
      </div>
    </main>
  );
}
