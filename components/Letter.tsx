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
    >
    {`i didn’t think a hamster would become a problem. not in any meaningful sense. not in a way that would linger. but it’s there. making small noises at night. running in place like it’s convinced that counts as going somewhere. u told me to get it. and at the time it felt like nothing. just another small suggestion. the kind that doesn’t carry weight until it does.

now it eats. it sleeps. it stares at nothing in particular. and for some reason that feels familiar.

i don’t think about u often. at least not in any way that feels intentional. but sometimes when it pauses or when it looks like it’s about to understand something and doesn’t, you come back for a moment. like something that was supposed to pass but didn’t.

i don’t think this is about the hamster.
but it’s also not not about the hamster.

      it’s just something that stayed. longer than it needed to. and now i’m waiting for it to go. waiting for u to go with it.`}
    </p>
  );
}
