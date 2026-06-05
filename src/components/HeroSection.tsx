import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: ReactNode;
  backgroundGradient?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  cta,
  backgroundGradient = true,
}: HeroSectionProps) {
  return (
    <section
      className={`py-20 md:py-32 px-4 ${
        backgroundGradient
          ? "bg-gradient-to-r from-[#1C93D1] to-[#5AB8E2]"
          : "bg-[#1C93D1]"
      } text-white`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {cta && <div className="flex justify-center">{cta}</div>}
      </div>
    </section>
  );
}
