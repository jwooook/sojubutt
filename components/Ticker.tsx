import Image from "next/image";

const hamsters = Array.from({ length: 10 });

export default function Ticker({ direction = "left" }) {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className={`flex gap-8 w-max animate-ticker-${direction}`}>
        {hamsters.map((_, i) => (
          <Image
            key={`hamster-${i}`}
            src="/chichi.png"
            alt="hamster"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        ))}

        {hamsters.map((_, i) => (
          <Image
            key={`hamster-dup-${i}`}
            src="/chichi.png"
            alt="hamster"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        ))}
      </div>
    </div>
  );
}
