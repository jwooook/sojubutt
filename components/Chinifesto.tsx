type Props = {
  className?: string;
};

export default function Letter({ className }: Props) {
  return (
    <p
      className={`
        break-words
        leading-relaxed
        w-full
        select-text
        whitespace-pre-line
        text-[#FFFFFF]

        font-space

        font-semibold
        tracking-tight

        ${className}
      `}
    >{"chat away with hamster chichi."}
    </p>
  );
}
