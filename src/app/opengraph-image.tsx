import { ImageResponse } from "next/og";

export const alt = "Jethro Landa — Senior Web Developer: WordPress & React";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0d12",
          color: "#e9ecf2"
        }}
      >
        <div style={{ fontSize: 30, color: "#7c9bff", marginBottom: 24 }}>
          Jethro Landa
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Senior Web Developer:
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, color: "#7c9bff" }}>
          WordPress &amp; React
        </div>
        <div style={{ fontSize: 30, color: "#a4acbc", marginTop: 40 }}>
          10+ years · 7 years building WooCommerce plugins · jethrolanda.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
