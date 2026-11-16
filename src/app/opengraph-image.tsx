import { ImageResponse } from "next/og";

export const alt = "Clario — Vos démarches. En plus simple.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#FAFAF8", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, color: "#172320" }}>
        <div style={{ display: "flex", width: 96, height: 96, borderRadius: 26, background: "#397C69", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: 44, border: "8px solid #fff", borderRightColor: "transparent" }} />
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, marginTop: 48 }}>clario.</div>
        <div style={{ fontSize: 40, color: "#5b6863", marginTop: 16 }}>Vos démarches. En plus simple.</div>
      </div>
    ),
    size,
  );
}
