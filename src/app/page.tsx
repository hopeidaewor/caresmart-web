import Button from "@/components/Button";
import FAQSection from "@/components/FAQSection";
import WhyCaresmart from "@/components/WhyCaresmart";

const counties = [
  "Fulton", "DeKalb", "Gwinnett", "Cobb", "Clayton",
  "Henry", "Rockdale", "Newton", "Douglas", "Cherokee",
  "Forsyth", "Fayette",
];

const services = [
  {
    title: "Care Coordination",
    description:
      "We help clients navigate complex healthcare systems, coordinate appointments, and ensure seamless care transitions.",
    cardBg: "#EEF4FF",
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
    cardBg: "#EDFFF5",
    iconBg: "#1A6640",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: "Benefits Navigation",
    description:
      "Expert guidance on accessing available resources, insurance coverage, and government benefits programs.",
    cardBg: "#EBF6FD",
    iconBg: "#5AB8E2",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: "Transitional Support",
    description:
      "Dedicated support for clients transitioning between care settings, ensuring continuity and stability every step of the way.",
    cardBg: "#EEF2FF",
    iconBg: "#1E3A8A",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];


export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-4 py-20 md:py-28" style={{ backgroundColor: "#F3FFFE" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Seamless coordination, Smarter care.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              We empower individuals and families across Georgia with expert-driven case management services.
            </p>
            <Button href="/contact">Get Started Today</Button>
          </div>

          {/* Right — hero image */}
          <div className="relative flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-image.png"
              alt="Caresmart care professional with patient"
              className="w-full max-w-[520px]"
            />
          </div>
        </div>
      </section>

      {/* ── Counties Banner ── */}
      <section
        className="py-5 px-4 overflow-hidden"
        style={{ backgroundColor: "#F3FFFE", borderTop: "1px solid #C8F0DC", borderBottom: "1px solid #C8F0DC" }}
      >
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
      </section>

      {/* ── Our Services (nextmd style) ── */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-2">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Trusted coordination, from referral to care
            </h2>
            <p className="text-gray-500 text-base whitespace-nowrap leading-relaxed">
              From first assessment to long-term coordination, we're with you at every step of your care journey.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl p-7 flex flex-col border border-transparent hover:border-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
                style={{ backgroundColor: service.cardBg }}
              >
                {/* Icon circle — scales up on hover */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-8 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: service.iconBg }}
                >
                  {service.icon}
                </div>
                {/* Text */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#1C93D1] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-start">
            <Button href="/services">View All Services</Button>
          </div>
        </div>
      </section>

      <WhyCaresmart />

      {/* ── FAQ (carenova style) ── */}
      <FAQSection />
    </>
  );
}
