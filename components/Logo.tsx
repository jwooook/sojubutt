import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/maaii.PNG"
      alt="sojubutt logo"
      width={120}
      height={120}
      className={className}
      priority
    />
  );
}
