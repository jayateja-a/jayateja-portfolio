export function SectionHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy: string }) {
  return (
    <div className="mb-10 grid gap-4 border-b border-[#e4e8ff]/10 pb-7 md:grid-cols-[90px_1fr_1fr] md:items-end">
      <span className="font-mono text-xs font-semibold text-[#8e9dff]">[{index}]</span>
      <div><p className="mb-2 font-mono text-[12px] uppercase tracking-[.2em] text-[#6fe3da]">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-[-.045em] text-[#e4e8ff] sm:text-4xl">{title}</h2></div>
      <p className="max-w-xl text-base leading-7 text-[#acb7d0] md:justify-self-end">{copy}</p>
    </div>
  );
}
