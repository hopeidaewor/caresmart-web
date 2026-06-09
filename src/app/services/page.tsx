"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";

// ── Icons ──────────────────────────────────────────────────────────────────
const Icon = ({ d, viewBox = "0 0 24 24" }: { d: string | React.ReactNode; viewBox?: string }) => (
  <svg width="36" height="36" viewBox={viewBox} fill="none" stroke="#1C93D1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {typeof d === "string" ? <path d={d} /> : d}
  </svg>
);

// ── Service data ────────────────────────────────────────────────────────────
const tabs = [
  "Case Management",
  "Assessment Services",
  "Families & Caregivers",
  "Community Resources",
];

const services: Record<string, { title: string; description: string; icon: React.ReactNode }[]> = {
  "Case Management": [
    {
      title: "Comprehensive Care Plans",
      description:
        "We develop and maintain individualized Comprehensive Care Plans (CCPs) that address each member's health, functional, social, and personal needs.",
      icon: <Icon d={<><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></>} />,
    },
    {
      title: "Multi-Provider Coordination",
      description:
        "We ensure seamless communication and continuity of care across physicians, specialists, hospitals, and community service agencies.",
      icon: <Icon d={<><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/></>} />,
    },
    {
      title: "Medicaid Waiver Brokering",
      description:
        "We broker and coordinate Medicaid waiver services — including personal care, skilled nursing, and adult day health — for EDWP and CCSP members.",
      icon: <Icon d={<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>} />,
    },
    {
      title: "Crisis Response",
      description:
        "We respond swiftly to service delays, care quality concerns, and urgent situations — including abuse, neglect, and exploitation reporting.",
      icon: <Icon d={<><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>} />,
    },
    {
      title: "Client Advocacy",
      description:
        "We serve as a dedicated healthcare liaison — supporting members through appeals, navigating service denials or reductions, and protecting their rights.",
      icon: <Icon d={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>} />,
    },
    {
      title: "Discharge Planning",
      description:
        "We coordinate smooth transitions for hospital discharges, relocations, and major life changes to ensure uninterrupted access to care.",
      icon: <Icon d={<><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>} />,
    },
  ],
  "Assessment Services": [
    {
      title: "Biopsychosocial Assessment",
      description:
        "Holistic evaluations covering physical health, mental wellbeing, social environment, and functional capacity to build a complete picture of each client.",
      icon: <Icon d={<><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>} />,
    },
    {
      title: "Functional Assessment",
      description:
        "We measure a client's ability to perform activities of daily living independently, informing appropriate service levels and care plan development.",
      icon: <Icon d={<><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>} />,
    },
    {
      title: "Strengths-Based Evaluation",
      description:
        "We identify individual strengths, natural supports, and existing resources to build care strategies that empower rather than limit.",
      icon: <Icon d={<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>} />,
    },
    {
      title: "Medicaid Eligibility Review",
      description:
        "We verify and document eligibility for Medicaid waiver programs including EDWP and CCSP, ensuring members receive the benefits they qualify for.",
      icon: <Icon d={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>} />,
    },
    {
      title: "Goal Setting & Planning",
      description:
        "We work collaboratively with clients and families to set meaningful short and long-term goals and build a clear roadmap to achieve them.",
      icon: <Icon d={<><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>} />,
    },
    {
      title: "Ongoing Progress Monitoring",
      description:
        "Regular check-ins and reassessments ensure care plans remain effective and are updated as the client's needs, circumstances, or goals evolve.",
      icon: <Icon d={<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>} />,
    },
  ],
  "Families & Caregivers": [
    {
      title: "Caregiver Education",
      description:
        "We equip family members and informal caregivers with the knowledge and practical skills needed to provide safe, confident support at home.",
      icon: <Icon d={<><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>} />,
    },
    {
      title: "Family Coordination",
      description:
        "We facilitate open communication between family members and care teams, keeping everyone aligned and informed on the care plan and progress.",
      icon: <Icon d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>} />,
    },
    {
      title: "Respite Care Referrals",
      description:
        "We connect caregivers with short-term relief services so they can rest, recover, and sustain their own wellbeing while their loved one is cared for.",
      icon: <Icon d={<><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></>} />,
    },
    {
      title: "Emotional Support & Guidance",
      description:
        "We offer compassionate guidance to families navigating the emotional weight of caregiving, connecting them to counseling and peer support resources.",
      icon: <Icon d={<><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></>} />,
    },
    {
      title: "Appeals & Advocacy",
      description:
        "We support families through the Medicaid appeals process when services are denied or reduced, ensuring their rights and needs are heard and respected.",
      icon: <Icon d={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>} />,
    },
    {
      title: "Caregiver Resource Linkage",
      description:
        "We connect families to local support groups, financial assistance programs, and community organizations to lighten the load of caregiving.",
      icon: <Icon d={<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>} />,
    },
  ],
  "Community Resources": [
    {
      title: "Adult Day Health",
      description:
        "We connect clients to supervised daytime health and social programs that promote independence, engagement, and wellbeing outside the home.",
      icon: <Icon d={<><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>} />,
    },
    {
      title: "Home Delivered Meals",
      description:
        "We arrange nutritious meal delivery for clients who are unable to shop or prepare food independently, supporting health and quality of life at home.",
      icon: <Icon d={<><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></>} />,
    },
    {
      title: "Personal Support Services",
      description:
        "We coordinate in-home assistance with daily living activities — including bathing, grooming, dressing, and mobility — through EDWP-covered providers.",
      icon: <Icon d={<><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>} />,
    },
    {
      title: "Emergency Response Services",
      description:
        "We help clients access personal emergency response systems and 24/7 crisis support lines, ensuring immediate help is always within reach.",
      icon: <Icon d={<><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>} />,
    },
    {
      title: "Medical Transportation",
      description:
        "We arrange reliable, Medicaid-covered transportation so clients can attend medical appointments, treatments, and health-related activities.",
      icon: <Icon d={<><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>} />,
    },
    {
      title: "Durable Medical Equipment",
      description:
        "We assist clients in obtaining Medicaid-covered equipment — such as wheelchairs, walkers, and hospital beds — to support safe living at home.",
      icon: <Icon d={<><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></>} />,
    },
  ],
};

// ── Component ───────────────────────────────────────────────────────────────
export default function Services() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive case management and community support for individuals and families across Georgia."
        breadcrumb="Services"
      />

      {/* ── Tabbed Services ── */}
      <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#EDF7F6" }}>
        <div className="max-w-6xl mx-auto">

          {/* Tab bar */}
          <FadeUp>
            <div className="flex flex-wrap justify-center gap-2 mb-14">
              <div className="inline-flex flex-wrap justify-center gap-2 bg-white rounded-2xl shadow-sm p-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      activeTab === tab
                        ? "bg-[#1C93D1] text-white shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services[activeTab].map((service, i) => (
              <FadeUp key={service.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full">
                  <div className="mb-5 p-4 rounded-2xl" style={{ backgroundColor: "#EBF6FD" }}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDWP Banner ── */}
      <section className="py-16 px-4 bg-white">
        <FadeUp>
          <div className="max-w-6xl mx-auto">
            <div
              className="relative overflow-hidden rounded-3xl min-h-[360px] flex items-center px-10 md:px-16 py-14"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center 30%",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(to right, rgba(10,20,30,0.82) 45%, rgba(10,20,30,0.35) 100%)" }} />

              {/* Content */}
              <div className="relative max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#CBFF4D" }}>
                  Georgia EDWP Program
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                  Learn About the Elderly &amp; Disabled Waiver Program
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  The EDWP provides Medicaid-funded home and community-based services to help elderly and disabled Georgians live independently. Find out if you or your loved one qualifies.
                </p>
                <a
                  href="https://georgia.gov/apply-elderly-and-disabled-waiver-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-300"
                  style={{ backgroundColor: "#CBFF4D", color: "#0a1416" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#b8f000")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#CBFF4D")}
                >
                  <span className="relative overflow-hidden block" style={{ height: "1.5em", lineHeight: "1.5" }}>
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full" style={{ lineHeight: "1.5" }}>Learn More</span>
                    <span className="absolute inset-x-0 top-full transition-transform duration-300 ease-out group-hover:-translate-y-full" style={{ lineHeight: "1.5" }}>Learn More</span>
                  </span>
                  <span className="relative overflow-hidden flex-shrink-0" style={{ width: 16, height: 16 }}>
                    <svg className="absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-x-6" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    <svg className="absolute inset-0 -translate-x-6 transition-transform duration-300 ease-out group-hover:translate-x-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#EDF7F6" }}>
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-3">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Ready to Get the Support You Deserve?
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Contact us today to learn how Caresmart can help you or your loved one access the care and community services available through the EDWP program.
            </p>
            <Button href="/contact">Schedule a Consultation</Button>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
