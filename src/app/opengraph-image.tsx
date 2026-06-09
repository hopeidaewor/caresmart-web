import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Caresmart — Georgia Case Management & EDWP Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(28,147,209,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(142,221,142,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Logo mark — green/blue rounded square */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "linear-gradient(135deg, #8EDD8E 0%, #59BCEF 100%)",
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 700, color: "#111827" }}>
            Caresmart
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.15,
            maxWidth: 780,
            marginBottom: 24,
          }}
        >
          Smarter Care. Coordinated for Georgia.
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 22,
            color: "#6b7280",
            maxWidth: 680,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Traditional & Enhanced Case Management for Medicaid members in the CCSP and EDWP programs.
        </div>

        {/* Bottom tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              backgroundColor: "#EDF7F6",
              borderRadius: 99,
              padding: "8px 20px",
              fontSize: 16,
              fontWeight: 600,
              color: "#1C93D1",
            }}
          >
            caresmart.health
          </div>
          <div
            style={{
              backgroundColor: "#CBFF4D",
              borderRadius: 99,
              padding: "8px 20px",
              fontSize: 16,
              fontWeight: 600,
              color: "#111827",
            }}
          >
            Serving 10 Georgia Counties
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
