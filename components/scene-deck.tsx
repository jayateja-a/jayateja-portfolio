"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
const chapters = [{id:"top",label:"Home"},{id:"roles",label:"Roles"},{id:"work",label:"Work"},{id:"journey",label:"Journey"},{id:"education",label:"Education"},{id:"context",label:"Q&A"},{id:"skills",label:"Skills"},{id:"contact",label:"Contact"}];
export function SceneDeck({ children }: { children: ReactNode[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [active,setActive] = useState("top");
  useEffect(() => {
    const scenes = Array.from(root.current?.querySelectorAll<HTMLElement>(".scene") ?? []);
    const resize = () => scenes.forEach(scene => scene.style.setProperty("--pin-top",`${Math.min(82,window.innerHeight-scene.offsetHeight-20)}px`));
    const observer = new ResizeObserver(resize); scenes.forEach(scene => observer.observe(scene));
    window.addEventListener("resize",resize);resize();
    const navigate = (id: string) => {
      const index = chapters.findIndex(chapter => chapter.id === id);
      if (index < 0 || !root.current) return false;
      let top = root.current.getBoundingClientRect().top + window.scrollY;
      for (let i=0;i<=index;i++) {
        top += parseFloat(getComputedStyle(scenes[i]).marginTop) || 0;
        if(i<index) top += scenes[i].offsetHeight;
      }
      window.scrollTo({top: Math.max(0,top-82),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
      return true;
    };
    const link = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if(!anchor || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const hash = anchor.getAttribute("href")!;
      if(navigate(hash.slice(1))) { e.preventDefault(); history.pushState(null,"",hash); }
    };
    const hashchange = () => navigate(location.hash.slice(1));
    document.addEventListener("click",link);
    window.addEventListener("hashchange",hashchange);
    if(location.hash) hashchange();
    let frame = 0;
    const update = () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let current = "top";
      scenes.forEach((scene,index) => {
        const section = scene.querySelector("section");
        const next = scenes[index+1];
        const top = scene.getBoundingClientRect().top;
        if(top < window.innerHeight*.55) current = section?.id || current;
        const depth = next ? Math.max(0,Math.min(1,(window.innerHeight-next.getBoundingClientRect().top)/window.innerHeight)) : 0;
        scene.style.setProperty("--depth",reduced ? "0" : String(depth));
      });
      setActive(current);frame=0;
    };
    const scroll = () => { if(!frame) frame=requestAnimationFrame(update); };
    window.addEventListener("scroll",scroll,{passive:true});update();
    return () => {document.removeEventListener("click",link);window.removeEventListener("hashchange",hashchange);observer.disconnect();window.removeEventListener("resize",resize);window.removeEventListener("scroll",scroll);cancelAnimationFrame(frame);};
  },[]);
  return <><div ref={root} className="scene-deck">{children.map((child,i)=><div key={chapters[i].id} className="scene" style={{zIndex:i+1}}><div className="scene-surface">{child}</div></div>)}</div><nav className="chapter-dock" aria-label="Portfolio chapters">{chapters.map(chapter=><a key={chapter.id} href={`#${chapter.id}`} aria-current={active===chapter.id ? "location" : undefined} className={active===chapter.id ? "active" : ""}>{chapter.label}</a>)}</nav></>;
}
