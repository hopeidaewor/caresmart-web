import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "About | Mission, Values & Team",
  description:
    "Learn about Caresmart's mission to deliver person-centered case management in Georgia, our core values, and the team dedicated to improving lives every day.",
  openGraph: {
    title: "About | Mission, Values & Team",
    description: "Our mission, values, and the team behind Georgia's trusted case management company.",
    url: "https://caresmartllc.net/about",
  },
};

const stats = [
  { target: 12, suffix: "+", label: "Georgia Counties Served", formatWithCommas: false },
  { target: 2500, suffix: "+", label: "Individuals & Families Helped", formatWithCommas: true },
  { target: 15, suffix: "+", label: "Years of Combined Experience", formatWithCommas: false },
];

const values = [
  {
    number: "01",
    title: "Accountability",
    description: "We take ownership of outcomes and follow through on every commitment — to our clients, our partners, and the communities we serve.",
    color: "#1C93D1",
  },
  {
    number: "02",
    title: "Community",
    description: "We are deeply rooted in Georgia's communities and committed to bridging the gaps that prevent individuals from accessing the care they deserve.",
    color: "#1A6640",
  },
  {
    number: "03",
    title: "Excellence",
    description: "We hold ourselves to the highest professional standards — delivering thorough, accurate, and effective case management every time.",
    color: "#4343A2",
  },
];

const team = [
  {
    name: "Deidre Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    name: "Marcus Webb",
    role: "Director of Case Management",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    name: "Tanya Osei",
    role: "Community Outreach Manager",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
  },
  {
    name: "Priya Nair",
    role: "Lead Care Coordinator",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
];

export default function About() {
  return (
    <>
      <HeroSection
        title="About Caresmart"
        subtitle="Dedicated to improving lives through intelligent case management."
        breadcrumb="About"
      />

      {/* ── Block 1: Mission / Vision + Stats ── */}
      <section className="py-12 md:py-16 px-4" style={{ backgroundColor: "#EDF7F6" }}>
        <div className="max-w-6xl mx-auto">

          {/* Mission + Vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <FadeUp delay={100}>
              <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                  To deliver person-centered case management that empowers individuals and families to achieve their health and life goals with dignity, compassion, and expert support.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?w=800&q=80&auto=format&fit=crop"
                  alt="Caresmart mission"
                  loading="lazy"
                  className="w-full h-52 object-cover rounded-xl"
                />
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                  A Georgia where every elderly and disabled individual has seamless access to the community-based services, care coordination, and human support needed to live independently and with purpose.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1732194439368-4655fd0ea955?w=800&q=80&auto=format&fit=crop"
                  alt="Caresmart vision"
                  loading="lazy"
                  className="w-full h-52 object-cover rounded-xl"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
            </FadeUp>
          </div>

          {/* Stats */}
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Caresmart at a Glance
            </h2>
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                {stats.map((stat) => (
                  <div key={stat.label} className="py-10 px-8 text-center">
                    <p className="text-5xl font-bold text-gray-900 mb-3">
                      <CountUp
                        target={stat.target}
                        suffix={stat.suffix}
                        formatWithCommas={stat.formatWithCommas}
                      />
                    </p>
                    <p className="text-gray-500 text-sm leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Block 2: Values ── */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <FadeUp className="mb-14 text-center">
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 100}>
                <div className="rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-gray-100">
                  <span className="text-2xl font-bold mb-3 block" style={{ color: v.color }}>
                    {v.number}
                  </span>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: v.color }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Block 3: Meet the Team ── */}
      <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#EDF7F6" }}>
        <div className="max-w-6xl mx-auto">

          <FadeUp className="mb-14 text-center">
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-3">
              Behind Our Success
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Team</h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                  className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-5">
                    <p className="font-bold text-gray-900 text-base">{member.name}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{member.role}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-white">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Seeking services or want to join our team? We&apos;d love to hear from you.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
