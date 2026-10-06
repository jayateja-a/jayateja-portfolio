"use client";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-data";
export function ProfilePortrait() {
  const [failed, setFailed] = useState(false);
  const photo = useRef<HTMLImageElement>(null);
  useEffect(() => { if (photo.current?.complete && photo.current.naturalWidth === 0) setFailed(true); }, []);
  return <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-full border border-[#9aabff]/40 bg-[#1a2141] shadow-[0_0_30px_rgba(119,136,255,.15)]">
    {failed ? <span className="font-mono text-lg text-[#c7d2ff]" aria-label={siteConfig.name}>JA</span> : <img ref={photo} src={siteConfig.profileImage} width={64} height={64} alt={siteConfig.name} onError={() => setFailed(true)} className="size-full object-cover object-center"/>}
  </div>;
}
