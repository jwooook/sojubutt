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
    >{'nothing here is useful btw. but u can still send us ur email and maybe we will send something back'}
    </p>
  );
}
