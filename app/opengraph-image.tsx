import { ImageResponse } from "next/og";

export const alt = "Gabriel Fragoso | Desenvolvedor Full Stack Freelancer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#fffbf7",
          color: "#14110f",
        }}
      >
        <div style={{ fontSize: 30, color: "#ff5d4a", fontWeight: 700 }}>
          gabrielfragoso.com
        </div>
        <div style={{ fontSize: 110, fontWeight: 800, marginTop: 24 }}>
          Gabriel Fragoso
        </div>
        <div style={{ fontSize: 48, marginTop: 16 }}>
          Desenvolvedor Full Stack Freelancer
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#5c554f" }}>
          MVPs · SaaS · Sistemas web · React · Next.js · Node.js
        </div>
      </div>
    ),
    size
  );
}
