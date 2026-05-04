import Image from "next/image";

const hamsters = Array.from({ length: 10 });

export default function Ticker({
  direction = "left",
  src = "/chichi.png",
}) {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className={`flex gap-8 w-max animate-ticker-${direction}`}>
        {hamsters.map((_, i) => (
          <Image
            key={`img-${i}`}
            src={src}
            alt="ticker-image"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        ))}

        {hamsters.map((_, i) => (
          <Image
            key={`img-dup-${i}`}
            src={src}
            alt="ticker-image"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        ))}
      </div>
    </div>
  );
}
