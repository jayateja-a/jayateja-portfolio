import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const alt = `${siteConfig.name} Software Engineer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#080a18", color: "#e4e8ff", padding: "70px", fontFamily: "sans-serif", border: "18px solid #141a34" }}>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#9aa8ff", fontSize: 22 }}><span>~/portfolio · software engineer</span><span style={{ color: "#74e7dc" }}>build · debug · ship</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 78, letterSpacing: "-5px", fontWeight: 700 }}>{siteConfig.name}</div><div style={{ marginTop: 18, fontSize: 31, color: "#b2bfdf", maxWidth: 920 }}>{siteConfig.headline}</div></div>
      <div style={{ display: "flex", gap: 16, fontSize: 20, color: "#a5b5dc" }}>Backend · Full Stack · Cloud · Data / AI · Distributed Systems</div>
    </div>, size
  );
}
