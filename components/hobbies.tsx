import { hobbies } from "@/lib/site-data";

export function Hobbies() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 lg:px-10" aria-labelledby="outside-code">
      <div className="rounded-[26px] border border-[#e4e8ff]/10 bg-[#10152c]/70 px-6 py-6 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[220px_1fr] lg:items-center">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[.18em] text-[#68dbd2]">outside the editor</p>
            <h2 id="outside-code" className="mt-2 text-lg font-semibold text-[#e4e8ff]">Things that reset my brain.</h2>
          </div>
          <div className="flex flex-wrap gap-2.5 lg:justify-end">
            {hobbies.map((hobby) => (
              <span key={hobby.name} title={hobby.detail} className="rounded-full border border-[#e4e8ff]/10 bg-[#12162c]/95 px-3.5 py-2 text-xs text-[#afbbdc]">
                <strong className="font-medium text-[#e4e8ff]">{hobby.name}</strong><span className="hidden text-[#9faccb] sm:inline"> · {hobby.detail}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
