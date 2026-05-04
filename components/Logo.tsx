import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/maaii.PNG"
      alt="logo"
      width={120}
      height={120}
      className="w-32 h-auto"
      priority
    />
  );
}
