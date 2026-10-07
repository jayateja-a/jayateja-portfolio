"use client";

import { siteConfig } from "@/lib/site-data";
import { Mail } from "./icons";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-16 pt-24 sm:px-8 lg:px-10">
      <SectionHeading index="07" eyebrow="Start a conversation" title="Bring me the messy engineering problem." copy="Backend, product, cloud, data, production reliability, or a problem that crosses all of them that is usually where I am most useful." />
      <div className="grid overflow-hidden rounded-[30px] border border-[#e4e8ff]/10 bg-[#12162c]/95 shadow-[0_20px_70px_rgba(30,48,74,.06)] lg:grid-cols-[.8fr_1.2fr]">
        <div className="border-b border-[#e4e8ff]/8 bg-[#171d3b] p-7 text-white lg:border-b-0 lg:border-r sm:p-9">
          <p className="font-mono text-[12px] uppercase tracking-[.18em] text-[#92a8d8]">contact.channel</p>
          <h3 className="mt-6 text-3xl font-semibold tracking-[-.04em]">Build something useful.</h3>
          <p className="mt-4 max-w-md text-base leading-7 text-[#aebada]">I&apos;m interested in engineering work where strong backend fundamentals matter, but the job also rewards curiosity across cloud, product, data, AI, deployment, and customer problems.</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-8 inline-flex items-center gap-2 text-sm text-white transition hover:text-[#8ff2e5]"><Mail className="size-4"/>{siteConfig.email}</a>
          <div className="mt-10 border-t border-white/12 pt-5 font-mono text-[12px] leading-5 text-[#91a2ca]">response_mode: human<br/>location: {siteConfig.location}<br/>work_mode: collaborative + ownership</div>
        </div>

        <form action="https://formspree.io/f/myekkkqn" method="POST" className="p-7 sm:p-9">
          <input type="text" name="_gotcha" hidden tabIndex={-1} autoComplete="off" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" />
          </div>
          <label className="mt-5 block"><span className="mb-2 block font-mono text-[12px] text-[#a8b4d3]">Message</span><textarea name="message" required minLength={10} rows={6} placeholder="Tell me what you're building or trying to fix…" className="w-full resize-none rounded-xl border border-[#e4e8ff]/10 bg-[#0e1228] px-4 py-3.5 text-sm text-[#e4e8ff] outline-none transition placeholder:text-[#7d89ac] focus:border-[#8e9dff]/40 focus:ring-2 focus:ring-[#8e9dff]/10" /></label>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs leading-5 text-[#a3afcf]">Formspree processes your message and shows a confirmation page. Please avoid sharing sensitive information.</p>
            <button type="submit" className="group inline-flex items-center gap-2 rounded-xl bg-[#8e9dff] px-5 py-3 text-sm font-semibold text-[#080a18] transition hover:-translate-y-0.5 hover:bg-[#b4bfff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8e9dff]">Send message </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return <label className="block"><span className="mb-2 block font-mono text-[12px] text-[#a8b4d3]">{label}</span><input name={name} type={type} required autoComplete={name} placeholder={placeholder} className="w-full rounded-xl border border-[#e4e8ff]/10 bg-[#0e1228] px-4 py-3.5 text-sm text-[#e4e8ff] outline-none transition placeholder:text-[#7d89ac] focus:border-[#8e9dff]/40 focus:ring-2 focus:ring-[#8e9dff]/10" /></label>;
}
