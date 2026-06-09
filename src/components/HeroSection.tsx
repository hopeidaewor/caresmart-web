import Link from "next/link";
import FadeUp from "./FadeUp";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export default function HeroSection({ title, subtitle, breadcrumb }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32 bg-white">
      {/* Gradient bursts */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(28,147,209,0.28) 0%, rgba(28,147,209,0.08) 45%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-20 w-[560px] h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,102,64,0.22) 0%, rgba(26,102,64,0.07) 45%, transparent 70%)" }}
        />
        <div
          className="absolute -top-10 right-1/4 w-[340px] h-[340px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(90,184,226,0.18) 0%, rgba(90,184,226,0.05) 50%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[300px] h-[280px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,240,220,0.55) 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Breadcrumb */}
        <FadeUp delay={0}>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6 font-medium">
            <Link href="/" className="hover:text-[#1C93D1] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-600">{breadcrumb ?? title}</span>
          </div>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={100}>
          <h1
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-5"
            style={{ color: "#111827" }}
          >
            {title}
          </h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={200}>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
