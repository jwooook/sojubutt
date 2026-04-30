import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#c00500]">
      <Image
        src="/maaiii.PNG"
        alt="sojubutt logo"
        width={400}
        height={400}
      />
    </main>
  );
}
