"use client";

import { useState, useEffect } from "react";
import Button from "./Button";

const slides = [
  {
    // Home health nurse with elderly patient at home
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    text: "In 2024, Caresmart served over 2,500 individuals and families across Georgia.",
    overlayBg: "#8EDD8E",
    overlayText: "text-gray-900",
  },
  {
    // Care coordinator reviewing plan with patient
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80",
    text: "Over 95% of our clients report improved care outcomes and overall satisfaction.",
    overlayBg: "#ffffff",
    overlayText: "text-gray-900",
  },
  {
    // Care professional supporting elderly patient at home
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    text: "Our coordinators have helped clients access over $1M in benefits and entitlements.",
    overlayBg: "#1C93D1",
    overlayText: "text-white",
  },
];

const features = [
  {
    title: "Expert Coordinators",
    description:
      "Our certified case managers bring years of experience helping clients navigate complex care systems.",
  },
  {
    title: "Personalised Plans",
    description:
      "Every care plan is built around the individual — their goals, strengths, and unique circumstances.",
  },
  {
    title: "Fast Response",
    description:
      "We move quickly to connect clients with the resources and support they need without delay.",
  },
  {
    title: "24/7 Support",
    description:
      "Our team is available around the clock to answer questions and provide guidance when it matters most.",
  },
  {
    title: "Simple Process",
    description:
      "From referral to active coordination, we make the onboarding and care process as smooth as possible.",
  },
  {
    title: "Proven Outcomes",
    description:
      "Our track record speaks for itself — measurable improvements in health outcomes and quality of life.",
  },
];

export default function WhyCaresmart() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#F3FFFE" }}>
      <div className="max-w-6xl mx-auto">

        {/* Top: text left + carousel right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">

          {/* Left */}
          <div>
            <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest block mb-4">
              Why Caresmart
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Why Thousands Choose Caresmart
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              We make case management simple, personal, and effective — with dedicated
              coordinators, proven processes, and a genuine commitment to improving every
              client's quality of life.
            </p>
            <Button href="/services">Explore Our Services</Button>
          </div>

          {/* Right — image carousel */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
            {/* Slides */}
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === current ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt="Caresmart care"
                  className="w-full h-full object-cover object-top"
                />
                {/* Text overlay */}
                <div
                  className="absolute bottom-4 left-4 right-4 rounded-xl p-5"
                  style={{ backgroundColor: slide.overlayBg }}
                >
                  <p className={`font-semibold text-base leading-snug ${slide.overlayText}`}>
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Dot navigation — top right */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? "bg-white scale-110" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-16" />

        {/* Bottom: 3x2 feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((f) => (
            <div key={f.title}>
              <h4 className="text-[#1C93D1] font-bold text-sm uppercase tracking-widest mb-3">
                {f.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
