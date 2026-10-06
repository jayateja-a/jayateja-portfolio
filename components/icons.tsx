import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props} />;
}

export const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></IconBase>
);
export const Github = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1.1S17.9-.3 15 1.6a13.4 13.4 0 0 0-6 0C6.1-.3 4.9.1 4.9.1A5.4 5.4 0 0 0 4.7 3a5.8 5.8 0 0 0-1.5 4.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></IconBase>
);
export const Linkedin = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></IconBase>
);
export const Mail = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></IconBase>
);
export const Phone = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></IconBase>
);
export const Download = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></IconBase>
);
export const TerminalIcon = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}><path d="m4 17 6-6-6-6"/><path d="M12 19h8"/></IconBase>
);
export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <IconBase {...props}><path d="m9 18 6-6-6-6"/></IconBase>
);
