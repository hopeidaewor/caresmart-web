import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Careers | Join Our Team",
  description:
    "Caresmart is hiring case managers, nurses, and Medicaid specialists in Georgia. View open positions and apply to join our mission-driven team.",
  openGraph: {
    title: "Careers | Join Our Team",
    description: "Join our team of dedicated case managers and healthcare professionals serving Georgia.",
    url: "https://caresmartllc.net/careers",
  },
};

const roles = [
  {
    title: "Case Managers",
    sub: "Traditional & Enhanced",
    description:
      "Lead client assessments, develop individualized care plans, and coordinate services for elderly and disabled Georgians enrolled in the EDWP and CCSP programs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Registered Nurses & PRNs",
    sub: "RN / PRN",
    description:
      "Conduct clinical assessments, support care planning, and provide oversight for medically complex clients across our Georgia service counties. We hire both full-time RNs and PRN staff.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    title: "Administrative & Support Staff",
    sub: "Operations",
    description:
      "Keep our operations running smoothly by managing scheduling, documentation, communications, and day-to-day administrative functions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: "Medicaid Specialists",
    sub: "Benefits & Compliance",
    description:
      "Support members in navigating Medicaid waiver programs, verifying eligibility, and ensuring accurate documentation and compliance across EDWP services.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
];

const whyWork = [
  {
    title: "Flexible Work Environment",
    description: "We support work-life balance with flexible scheduling that fits your lifestyle and commitments.",
    color: "#1C93D1",
    bg: "#E2F0F7",
  },
  {
    title: "Collaborative Team Culture",
    description: "You'll join a supportive team that genuinely cares about one another and the people we serve.",
    color: "#1A6640",
    bg: "#E2FAED",
  },
  {
    title: "Training & Development",
    description: "We invest in your growth with ongoing training, certifications, and professional development opportunities.",
    color: "#4343A2",
    bg: "#F1F1FF",
  },
  {
    title: "Mission-Driven Growth",
    description: "Grow with an organization that puts purpose first — your work here creates real change in Georgia's communities.",
    color: "#C2410C",
    bg: "#FFF6DA",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit Your Application",
    description: "Email your resume and a brief cover letter to info@caresmartllc.net, noting the role you're interested in.",
  },
  {
    number: "02",
    title: "Initial Review",
    description: "Our team reviews every application and reaches out to qualified candidates to schedule a conversation.",
  },
  {
    number: "03",
    title: "Interview",
    description: "Meet with our team to discuss your background, experience, and how you can contribute to the Caresmart mission.",
  },
  {
    number: "04",
    title: "Offer & Onboarding",
    description: "Selected candidates receive an offer and are welcomed into a team committed to making a difference every day.",
  },
];

const requirements = [
  "Relevant licensure or certification (as applicable to role)",
  "Strong communication and organizational skills",
  "Experience working with Medicaid waiver programs preferred",
  "Passion for person-centered care and advocacy",
];

export default function Careers() {
  return (
    <>
      <HeroSection
        title="Join Our Team"
        subtitle="Be part of a mission to improve lives through compassionate case management."
        breadcrumb="Careers"
      />

      {/* ── Block 1: Why Work With Us ── */}
      <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#EDF7F6" }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-14">
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-3">
              Why Caresmart
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Why Work With Us?</h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              At Caresmart, we are passionate about improving lives through compassionate, coordinated care. We're always looking for dedicated professionals who share our commitment to supporting Georgia's elderly and disabled populations.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyWork.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full border border-gray-100">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: item.bg }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Block 2: Open Positions ── */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-14">
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-3">
              Current Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Open Positions</h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              We welcome qualified applicants for the following roles. To apply, email your resume and a brief cover letter to{" "}
              <a href="mailto:info@caresmartllc.net" className="text-[#1C93D1] hover:underline font-medium">info@caresmartllc.net</a>.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {roles.map((role, i) => (
              <FadeUp key={role.title} delay={i * 80}>
                <div className="rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-[#1C93D1]" style={{ backgroundColor: "#E2F0F7" }}>
                    {role.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{role.sub}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Minimum Requirements */}
          <FadeUp>
            <div className="rounded-2xl p-8 border border-gray-100 shadow-sm" style={{ backgroundColor: "#EDF7F6" }}>
              <h3 className="text-lg font-bold text-gray-900 mb-5">Minimum Requirements</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#1C93D1" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Block 3: Hiring Process ── */}
      <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#EDF7F6" }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-14">
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-3">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Hiring Process</h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-gray-100">
                  <span className="text-2xl font-bold block mb-3" style={{ color: "#1C93D1" }}>{step.number}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
