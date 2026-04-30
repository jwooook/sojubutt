import Image from "next/image";

export default function Hamsters({ className = "" }: { className?: string }) {
  return (
    <div className="flex gap-10 ${className}'}">
      <Image src="/chichi_arm.PNG" alt="hamster" width={220} height={220} />
      <Image src="/chichi_arm.PNG" alt="hamster" width={220} height={220} />
      <Image src="/chichi_arm.PNG" alt="hamster" width={220} height={220} />
      <Image src="/chichi_arm.PNG" alt="hamster" width={220} height={220} />
      <Image src="/chichi_arm.PNG" alt="hamster" width={220} height={220} />
      <Image src="/chichi_arm.PNG" alt="hamster" width={220} height={220} />
      <Image src="/chichi_arm.PNG" alt="hamster" width={220} height={220} />
    </div>
  );
}
