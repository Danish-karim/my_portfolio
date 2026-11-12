import { ImageResponse } from "next/og";

export const alt = "Danish Karim - Senior Full Stack Developer";
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
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #134e4a 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: 14,
            background: "#0d9488",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          DK
        </div>
        <div style={{ fontSize: 72, fontWeight: 700 }}>Danish Karim</div>
        <div style={{ fontSize: 38, color: "#5eead4", marginTop: 12 }}>
          Senior Full Stack Developer
        </div>
        <div style={{ fontSize: 28, color: "#cbd5e1", marginTop: 32 }}>
          React/Next.js · Node.js · PHP · AWS Serverless · OpenAI & Gemini
        </div>
      </div>
    ),
    { ...size }
  );
}
