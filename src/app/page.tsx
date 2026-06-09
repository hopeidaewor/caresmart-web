import type { Metadata } from "next";
import Button from "@/components/Button";
import FAQSection from "@/components/FAQSection";
import WhyCaresmart from "@/components/WhyCaresmart";
import FadeUp from "@/components/FadeUp";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Georgia Case Management & EDWP Services",
  description:
    "Caresmart provides expert case management, care coordination, and community resource navigation for Georgia's elderly and disabled populations through the EDWP program.",
  openGraph: {
    title: "Georgia Case Management & EDWP Services",
    description:
      "Expert case management and EDWP navigation for Georgia's elderly and disabled populations.",
    url: "https://caresmartllc.net",
  },
};

const counties = [
  "Cherokee", "Clayton", "Cobb", "DeKalb", "Douglas",
  "Fayette", "Fulton", "Gwinnett", "Henry", "Rockdale",
];

const services = [
  {
    title: "Case Management",
    description:
      "We help clients navigate complex healthcare systems, coordinate appointments, and ensure seamless care transitions.",
    cardBg: "#E2F0F7",
    iconBg: "#1C93D1",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Assessment Services",
    description:
      "Comprehensive evaluations to identify client needs, strengths, and develop personalised care plans that reflect your goals.",
    cardBg: "#E2FAED",
    iconBg: "#1A6640",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: "Families and Caregivers",
    description:
      "We provide guidance, resources, and emotional support to families and caregivers navigating the challenges of long-term care alongside their loved ones.",
    cardBg: "#F1F1FF",
    iconBg: "#4343A2",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: "Community Resources",
    description:
      "We link clients to local programs, support groups, transportation, housing assistance, and other community services that enhance independence and well-being.",
    cardBg: "#FFF6DA",
    iconBg: "#C2410C",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];


export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-4 py-20 md:py-28" style={{ backgroundColor: "#EDF7F6" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <FadeUp delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Seamless coordination, Smarter care.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              We empower individuals and families across Georgia with expert-driven case management services.
            </p>
            <Button href="/contact">Get Started Today</Button>
          </FadeUp>

          {/* Right — hero image */}
          <FadeUp delay={250} className="relative flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-image.png"
              alt="Caresmart care professional with patient"
              className="w-full max-w-[520px]"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Counties Banner ── */}
      <section
        className="py-5 px-4"
        style={{ backgroundColor: "#EDF7F6", borderTop: "1px solid #89CCAA", borderBottom: "1px solid #89CCAA" }}
      >
        <FadeUp>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-gray-700 font-semibold text-base whitespace-nowrap shrink-0 border-r border-gray-300 pr-5">
              Serving Georgia's Counties
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {counties.map((county) => (
                <span key={county} className="text-gray-500 text-sm whitespace-nowrap hover:text-gray-900 transition-colors">
                  {county}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Our Services ── */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <FadeUp className="mb-12">
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-2">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Trusted coordination, from referral to care
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              At Caresmart, we provide case management to Georgia Medicaid members enrolled in the Community Care Services Program (CCSP) and Elderly and Disabled Waiver Program (EDWP).
            </p>
          </FadeUp>

          {/* Cards — staggered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={i * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  cardBg={service.cardBg}
                  iconBg={service.iconBg}
                />
              </FadeUp>
            ))}
          </div>

          {/* Bottom CTA */}
          <FadeUp delay={100}>
            <Button href="/services">View All Services</Button>
          </FadeUp>
        </div>
      </section>

      <WhyCaresmart />

      {/* ── FAQ ── */}
      <FAQSection />
    </>
  );
}
