"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function HiddenBackButton() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push("/")}
      className="fixed top-1/2 right-4 w-14 h-14 cursor-pointer z-50"
    >
      {hovered && (
        <div className="w-full h-full transition-opacity duration-300 opacity-100">
          <Image
            src="/chichi.png"
            alt="back"
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
