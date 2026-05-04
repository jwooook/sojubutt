import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-[#FFFFFF] h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Logo />
      </div>

      <Link
        href="/hamsterstream"
        className="absolute top-4 left-4 text-white font-semibold">
        /chichi
      </Link>
    </main>
  );
}
