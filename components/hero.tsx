import { siteConfig } from "@/lib/site-data";
import { Download, TerminalIcon } from "./icons";
import { ProfilePortrait } from "./profile-portrait";
import { SpotlightCard } from "./spotlight-card";

const stack = ["Java", "Spring Boot", "React", "TypeScript", "Python", "AWS", "Azure", "Kubernetes"];
export function Hero() {
  return (
    <section id="top" className="hero-section mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
      <div>
        <p className="mb-8 font-mono text-xs uppercase tracking-[.18em] text-[#74e7dc]">Canada / Software Engineer</p>
        <div className="mb-5 flex items-center gap-4"><ProfilePortrait /><span className="font-mono text-xs text-[#a3afd0]">// hello, I&apos;m</span></div>
        <h1 className="text-[clamp(3.2rem,7.8vw,6.7rem)] font-semibold leading-[.95] tracking-[-.065em] text-[#eef0ff]">Jayateja<br/><span className="name-gradient">Alugolu.</span></h1>
        <div className="mt-8 flex max-w-xl flex-wrap gap-2" aria-label="Engineering roles">{siteConfig.roles.map(role => <span key={role} className="rounded-full border border-[#8e9dff]/25 bg-[#141a34] px-3 py-2 text-sm text-[#d0d8f5]">{role}</span>)}</div>
        <div className="mt-6 flex max-w-xl flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-[#9fadd0]" aria-label="Primary technologies">{stack.map(item => <span key={item}>{item}</span>)}</div>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className="primary-action">View work</a>
          <a href={siteConfig.resume} download="Jayateja_Alugolu_resume.pdf" className="secondary-action"><Download className="size-4"/>Download resume</a>
          <a href="#contact" className="secondary-action">Let&apos;s talk</a>
        </div>
      </div>
      <div className="profile-system">
        <div className="mb-4 flex items-center justify-between font-mono text-xs text-[#8e9dff]"><span>ENGINEER / SYSTEM.PROFILE</span><span>01</span></div>
        <SpotlightCard className="p-1">
          <div className="rounded-[23px] bg-[#0c1023] p-6 sm:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-[#8e9dff]/15 pb-5 font-mono text-xs text-[#a1aed0]"><span>jayateja.config.ts</span><span className="text-[#77e8da]">build · debug · ship</span></div>
            <dl className="space-y-6 font-mono text-sm">
              <Line k="role" v={siteConfig.role}/><Line k="focus" v="backend + cloud + full stack"/><Line k="architecture" v="microservices / distributed systems"/><Line k="delivery" v="docker → ci/cd → kubernetes"/><Line k="principle" v="reliable > clever"/>
            </dl>
            <div className="my-7 rounded-2xl border border-[#8e9dff]/20 bg-[#151a35] p-5 font-mono text-sm leading-7 text-[#bac6e7]"><span className="text-[#b5a1ff]">const</span> engineer = &#123;<br/>&nbsp; ownership: <span className="text-[#74e7dc]">true</span>,<br/>&nbsp; curiosity: <span className="text-[#74e7dc]">true</span>,<br/>&nbsp; productionMindset: <span className="text-[#74e7dc]">true</span><br/>&#125;;</div>
            <button type="button" className="terminal-launch flex w-full items-center gap-3 rounded-xl border border-[#55dfd0]/20 bg-[#0c242d] px-4 py-3 text-left text-sm text-[#91eee3]" data-open-terminal><TerminalIcon className="size-5"/><span>Open terminal <span className="block text-xs text-[#a4b5d0]">Try journey, skills, education, why-lightx</span></span></button>
          </div>
        </SpotlightCard>
        <div className="mt-5 flex justify-between font-mono text-xs text-[#818fb3]"><span>PRODUCTION MINDSET</span><span>HUMAN CURIOSITY</span></div>
      </div>
    </section>
  );
}
function Line({k,v}: {k:string;v:string}) { return <div className="grid grid-cols-[105px_1fr] gap-3"><dt className="text-[#8392b7]">{k}</dt><dd className="text-[#d3dcf7]">{v}</dd></div>; }
