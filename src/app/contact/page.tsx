import FadeUp from "@/components/FadeUp";
import Link from "next/link";

const contactCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: "2310 Parklake Dr, Ste 550",
    sub: "Atlanta, GA 30345",
    href: "https://maps.google.com/?q=2310+Parklake+Dr+Atlanta+GA+30345",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "(678) 278-8335",
    sub: "Mon–Fri, 9AM–5PM",
    href: "tel:6782788335",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "info@caresmartllc.net",
    sub: "We respond within 24 hours",
    href: "mailto:info@caresmartllc.net",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Hours",
    value: "Monday – Friday",
    sub: "9:00 AM – 5:00 PM",
    href: null,
  },
];

const quickLinks = [
  {
    title: "Explore Services",
    description: "Learn more about our comprehensive case management services.",
    href: "/services",
    cta: "View Services",
  },
  {
    title: "Join Our Team",
    description: "Interested in a career with Caresmart? Check out our open positions.",
    href: "/careers",
    cta: "View Careers",
  },
  {
    title: "About Us",
    description: "Discover our mission, values, and commitment to excellence.",
    href: "/about",
    cta: "Learn More",
  },
];

export default function Contact() {
  return (
    <>
      {/* ── Custom Hero ── */}
      <section className="px-4 py-10 md:py-14 bg-white">
        <div
          className="max-w-6xl mx-auto rounded-3xl px-10 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-10"
          style={{ backgroundColor: "#EDF7F6" }}
        >
          {/* Left — heading */}
          <FadeUp delay={0} className="flex-1">
            <p className="text-sm text-gray-400 font-medium mb-4 flex items-center gap-2">
              <Link href="/" className="hover:text-[#1C93D1] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-600">Contact</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span style={{ color: "#1C93D1" }}>Connect</span>{" "}
              <span className="text-gray-900">with us</span>
            </h1>
          </FadeUp>

          {/* Right — subtitle */}
          <FadeUp delay={150} className="flex-1 flex flex-col items-start md:items-end gap-6">
            <p className="text-gray-500 text-base leading-relaxed max-w-sm md:text-right">
              Our dedicated team is here to assist you with any questions, referrals, or feedback you may have.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Block 1: Contact Info ── */}
      <section className="pt-4 pb-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card, i) => (
              <FadeUp key={card.label} delay={i * 80}>
                <div className="rounded-2xl p-7 h-full flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: "#EDF7F6" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-white" style={{ backgroundColor: "#111827" }}>
                    {card.icon}
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{card.label}</p>
                  {card.href ? (
                    <a href={card.href} className="font-semibold text-[#1C93D1] hover:underline leading-snug text-sm">
                      {card.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-gray-900 leading-snug text-sm">{card.value}</p>
                  )}
                  <p className="text-gray-500 text-sm mt-0.5">{card.sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Block 2: Quick Links ── */}
      <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#F4F5F7" }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-14 text-center">
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-3">
              Explore
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Quick Links</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, i) => (
              <FadeUp key={link.title} delay={i * 100}>
                <a
                  href={link.href}
                  className="group block rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1C93D1] transition-colors">{link.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{link.description}</p>
                  <span className="text-[#1C93D1] font-semibold text-sm inline-flex items-center gap-1">
                    {link.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
