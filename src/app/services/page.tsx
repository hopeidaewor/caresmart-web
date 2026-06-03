import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import HorizontalDivider from "@/components/HorizontalDivider";

export default function Services() {
  const services = [
    {
      title: "Care Coordination",
      description:
        "We serve as your healthcare navigator, coordinating all aspects of your care to ensure seamless communication between providers and smooth care transitions.",
      features: [
        "Appointment scheduling and reminder",
        "Provider communication and care plan alignment",
        "Emergency response coordination",
        "Medical records management",
      ],
    },
    {
      title: "Assessment Services",
      description:
        "Comprehensive evaluations to understand your unique needs, strengths, and barriers. We develop personalized care plans that reflect your goals and values.",
      features: [
        "Biopsychosocial assessments",
        "Strengths-based evaluation",
        "Goal setting and planning",
        "Regular progress monitoring",
      ],
    },
    {
      title: "Benefits Navigation",
      description:
        "Expert guidance to help you access available resources, understand insurance coverage, and maximize your benefits.",
      features: [
        "Insurance benefits explanation",
        "Government benefits assistance",
        "Community resource referrals",
        "Application support",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We meet with you to understand your needs, goals, and current situation.",
    },
    {
      step: "2",
      title: "Care Planning",
      description:
        "Together, we develop a personalized care plan that addresses your priorities and connects you with resources.",
    },
    {
      step: "3",
      title: "Ongoing Support",
      description: "Regular check-ins and care coordination to ensure your plan is working and adjust as needed.",
    },
    {
      step: "4",
      title: "Success & Transition",
      description:
        "As you achieve your goals, we help ensure a smooth transition while maintaining ongoing support as needed.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive case management designed to support your health and wellbeing"
      />

      {/* Detailed Services */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title}>
              {index > 0 && <HorizontalDivider className="my-16" />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-green-500 font-bold text-xl leading-none">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact">Learn More</Button>
                </div>
                <Card variant="highlight" className="p-8 h-full">
                  <div className="text-5xl mb-4">
                    {service.title === "Care Coordination" && "🤝"}
                    {service.title === "Assessment Services" && "📊"}
                    {service.title === "Benefits Navigation" && "💼"}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Process Flow */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="How It Works"
            subtitle="Our four-step approach to delivering results"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step}>
                <Card className="text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss how our services can support your goals.
          </p>
          <Button href="/contact">Schedule a Consultation</Button>
        </div>
      </section>
    </>
  );
}
