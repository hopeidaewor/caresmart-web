"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is case management and how can it help me?",
    answer:
      "Case management is a collaborative process where a dedicated professional helps you navigate healthcare systems, coordinate services, and connect with the right resources. At Caresmart, our case managers work alongside you to assess your needs, develop a personalized care plan, and ensure you receive the support you deserve.",
  },
  {
    question: "Who qualifies for Caresmart's services?",
    answer:
      "Caresmart serves individuals and families across Georgia who need support navigating healthcare, accessing benefits, or coordinating care. Whether you're managing a chronic condition, transitioning from a hospital stay, or simply need help understanding your options, our team is here for you.",
  },
  {
    question: "How do I get started with Caresmart?",
    answer:
      "Getting started is simple. Reach out via our contact page or call us directly. We'll schedule an initial consultation to learn about your situation, explain how we can help, and begin building a care plan tailored to your needs.",
  },
  {
    question: "Which counties in Georgia does Caresmart serve?",
    answer:
      "We currently serve clients across Fulton, DeKalb, Gwinnett, Cobb, Clayton, Henry, Rockdale, Newton, Douglas, Cherokee, Forsyth, and Fayette counties — with plans to expand throughout the state.",
  },
  {
    question: "Does Caresmart accept insurance or Medicaid?",
    answer:
      "Yes. We work with a range of insurance plans and Medicaid programs. Our benefits navigation specialists can help you understand your coverage and identify additional resources you may be eligible for. Contact us to discuss your specific situation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#1C93D1] font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Have questions about case management or our services? We've answered the most common ones below.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className="text-gray-900 font-semibold text-lg pr-8 group-hover:text-[#1C93D1] transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-[#1C93D1] border-[#1C93D1] text-white rotate-45"
                      : "group-hover:border-[#1C93D1] group-hover:text-[#1C93D1]"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
